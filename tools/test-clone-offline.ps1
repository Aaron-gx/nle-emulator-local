# Fresh-clone offline startup test.
# Simulates: git clone -> .env -> start, with the campus network unreachable.
# Runs on 8100/8101 so it cannot disturb an existing local deployment.
param(
  [string]$Root = 'E:\Learn\MeProject\_clonetest',
  [int]$FePort = 8100,
  [int]$BePort = 8101
)

$ErrorActionPreference = 'Continue'
try { [Console]::OutputEncoding = [Text.Encoding]::UTF8 } catch {}

$log = Join-Path $Root '_clonetest.log'
function Say($m) { Write-Host $m; Add-Content -Path $log -Value $m -Encoding UTF8 }
Set-Content -Path $log -Value '' -Encoding UTF8

Say "=== 1. 模拟新机器：创建 .env ==="
# 账号不写死在脚本里：优先环境变量，其次从项目根的 .env 读。
$srcEnv = Join-Path (Split-Path -Parent $PSScriptRoot) '.env'
$userName = $env:NLE_USER
$userPass = $env:NLE_PASS
if ((-not $userName -or -not $userPass) -and (Test-Path $srcEnv)) {
  foreach ($line in Get-Content $srcEnv -Encoding UTF8) {
    if ($line -match '^\s*NLE_USER\s*=\s*(.+)$') { $userName = $Matches[1].Trim() }
    if ($line -match '^\s*NLE_PASS\s*=\s*(.+)$') { $userPass = $Matches[1].Trim() }
  }
}
if (-not $userName -or -not $userPass) {
  Say "  错误：未找到账号。请设置 NLE_USER / NLE_PASS 环境变量，或创建 .env（见 .env.example）"
  exit 2
}

$envFile = Join-Path $Root '.env'
if (!(Test-Path $envFile)) {
  @"
NLE_USER=$userName
NLE_PASS=$userPass
S_PORT=$FePort
B_PORT=$BePort
NLE_LOCAL=http://127.0.0.1:$FePort
NLE_BACKEND=http://127.0.0.1:$BePort
"@ | Set-Content -Path $envFile -Encoding UTF8
  Say "  已创建 .env（账号取自本地配置，不回显）"
} else {
  Say "  .env 已存在"
}

Say ""
Say "=== 2. 检查数据库是否需要初始化 ==="
$db = Join-Path $Root 'backend\data\platform.db'
Say "  platform.db 存在: $(Test-Path $db)"

if (!(Test-Path $db)) {
  Say "  正在运行 import.mjs ..."
  Push-Location (Join-Path $Root 'backend')
  $importOut = node --no-warnings 'import.mjs' 2>&1
  Pop-Location
  $importOut | ForEach-Object { Say "    $_" }
}

Say ""
Say "=== 3. 启动后端（端口 $BePort）==="
Get-Process -Name 'node' -ErrorAction SilentlyContinue | ForEach-Object {
  $cl = (Get-CimInstance Win32_Process -Filter "ProcessId=$($_.Id)" -ErrorAction SilentlyContinue).CommandLine
  if ($cl -match '_clonetest.*server\.mjs') { Stop-Process -Id $_.Id -Force -ErrorAction SilentlyContinue }
}
$env:B_PORT = "$BePort"
$be = Start-Process -FilePath 'node' -ArgumentList '--no-warnings','server.mjs' `
  -WorkingDirectory (Join-Path $Root 'backend') -PassThru -WindowStyle Hidden
Start-Sleep -Seconds 3
Say "  后端 PID=$($be.Id)  已退出=$($be.HasExited)"

$beOk = $false
try {
  $r = Invoke-WebRequest "http://127.0.0.1:$BePort/api/server/time" -TimeoutSec 5 -UseBasicParsing
  $beOk = $r.StatusCode -eq 200
  Say "  后端健康检查: $($r.Content)"
} catch { Say "  后端未响应: $($_.Exception.Message)" }

Say ""
Say "=== 4. 启动前端（端口 $FePort）==="
$env:S_PORT = "$FePort"
$env:S_LOCALBASE = "http://127.0.0.1:$FePort"
$env:S_BACKEND = "http://127.0.0.1:$BePort"
$fe = Start-Process -FilePath 'node' -ArgumentList 'server\serve.mjs' `
  -WorkingDirectory $Root -PassThru -WindowStyle Hidden
Start-Sleep -Seconds 3
Say "  前端 PID=$($fe.Id)  已退出=$($fe.HasExited)"

Say ""
Say "=== 5. 验证（全部离线，无校园网）==="
$results = @()
function Check($name, $url, $expect = 200) {
  try {
    $r = Invoke-WebRequest $url -TimeoutSec 15 -UseBasicParsing
    $ok = $r.StatusCode -eq $expect
    $script:results += [pscustomobject]@{ 项目 = $name; 结果 = if ($ok) {'通过'} else {"HTTP $($r.StatusCode)"}; 大小 = $r.RawContentLength }
  } catch {
    $script:results += [pscustomobject]@{ 项目 = $name; 结果 = '失败'; 大小 = $_.Exception.Message.Substring(0, [Math]::Min(40, $_.Exception.Message.Length)) }
  }
}
$base = "http://127.0.0.1:$FePort"
Check '教学平台首页'   "$base/training/"
Check '仿真平台首页'   "$base/emulator/"
Check '通行证首页'     "$base/account/"
Check '文档预览'       "$base/preview_v2.2.1/index"
Check '教学主 bundle'  "$base/training/js/app.2fbd3d13.js"
Check '设备图标'       "$base/emulator/image/device/Router_Thumbnail.png"
Check '场景大图'       "$base/emulator/img/bg_smart_farming.b2e755ab.png"
Check '助手库'         "$base/emulator/lib/nleEmulatorLib.js"
Check '习题导入模板'   "$base/training/config/ExerciseTemplate.xls"
Check 'SPA 深链回退'   "$base/emulator/main/simulation"

Say ""
Say "=== 6. 登录与数据（经前端代理到本地后端）==="
try {
  $login = Invoke-WebRequest "$base/gateway/upms/auth/token" -Method POST -TimeoutSec 15 -UseBasicParsing `
    -ContentType 'application/x-www-form-urlencoded' `
    -Body "phone=$userName&password=$userPass&grant_type=password"
  $j = $login.Content | ConvertFrom-Json
  Say "  登录 code=$($j.code)"
  $tok = $j.data.access_token
  $h = @{ Authorization = "Bearer $tok" }
  $ex = (Invoke-WebRequest "$base/training-server/api/Exercise/GetExerciseWithState" -Headers $h -TimeoutSec 30 -UseBasicParsing).Content | ConvertFrom-Json
  Say "  题库: $($ex.data.Count) 道"
  $tk = (Invoke-WebRequest "$base/training-server/api/Task/GetTaskPage?pageIndex=1&pageSize=5" -Headers $h -TimeoutSec 15 -UseBasicParsing).Content | ConvertFrom-Json
  Say "  任务: $($tk.data.records) 个"
  $st = (Invoke-WebRequest "$base/training-server/api/Statistic/GetStatisticData" -Headers $h -TimeoutSec 15 -UseBasicParsing).Content | ConvertFrom-Json
  Say "  统计: code=$($st.code)"
} catch { Say "  登录/数据失败: $($_.Exception.Message)" }

Say ""
Say "=== 结果汇总 ==="
$results | Format-Table -AutoSize | Out-String | ForEach-Object { Say $_ }
$fail = ($results | Where-Object { $_.结果 -ne '通过' }).Count
Say "通过 $($results.Count - $fail)/$($results.Count)"

Say ""
Say "=== 清理 ==="
if (-not $fe.HasExited) { Stop-Process -Id $fe.Id -Force -ErrorAction SilentlyContinue; Say "  已停前端" }
if (-not $be.HasExited) { Stop-Process -Id $be.Id -Force -ErrorAction SilentlyContinue; Say "  已停后端" }
