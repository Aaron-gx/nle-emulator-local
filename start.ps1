# 启动本地部署。
#   .\start.ps1                 # 前端 8090 + 后端 8091
#   .\start.ps1 -Port 9000      # 自定义前端端口
#   .\start.ps1 -BackendPort 9001
param(
  [int]$Port = 8090,
  [int]$BackendPort = 8091
)

$ErrorActionPreference = 'Stop'
# The banner contains CJK text; without this the console mangles it.
try { [Console]::OutputEncoding = [Text.Encoding]::UTF8 } catch {}
$OutputEncoding = [Text.Encoding]::UTF8

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$server = Join-Path $root 'server\serve.mjs'
$backend = Join-Path $root 'backend\server.mjs'
$dbFile = Join-Path $root 'backend\data\platform.db'

if (!(Test-Path $server)) { throw "静态服务缺失: $server" }
if (!(Test-Path $backend)) { throw "后端缺失: $backend" }

# --- 本地后端 ---------------------------------------------------------------
if (!(Test-Path $dbFile)) {
  Write-Host "[1/2] 首次运行，正在导入数据到 SQLite ..." -ForegroundColor Yellow
  node --no-warnings (Join-Path $root 'backend\import.mjs')
}

Write-Host "[1/2] 启动后端 (端口 $BackendPort) ..." -ForegroundColor Cyan
$env:B_PORT = "$BackendPort"
$backendProc = Start-Process -FilePath 'node' -ArgumentList '--no-warnings', "`"$backend`"" `
  -WorkingDirectory (Join-Path $root 'backend') -PassThru -WindowStyle Hidden
Start-Sleep -Seconds 2

$ok = $false
foreach ($i in 1..10) {
  try {
    $r = Invoke-WebRequest -Uri "http://127.0.0.1:$BackendPort/api/server/time" -TimeoutSec 3 -UseBasicParsing
    if ($r.StatusCode -eq 200) { $ok = $true; break }
  } catch { Start-Sleep -Milliseconds 500 }
}
if ($ok) {
  Write-Host "      后端就绪 http://127.0.0.1:$BackendPort" -ForegroundColor Green
} else {
  Write-Host "      后端未响应，请检查 Node 版本与端口占用" -ForegroundColor Red
  if ($backendProc -and -not $backendProc.HasExited) { Stop-Process -Id $backendProc.Id -Force -ErrorAction SilentlyContinue }
  exit 1
}

# --- 静态前端 ---------------------------------------------------------------
$env:S_BACKEND = "http://127.0.0.1:$BackendPort"

# Regenerate localised config so origins match the requested port.
$env:S_LOCALBASE = "http://127.0.0.1:$Port"
if (Test-Path (Join-Path $root 'tools\make-local-config.mjs')) {
  node (Join-Path $root 'tools\make-local-config.mjs') | Out-Null
}

$env:S_PORT = "$Port"

Write-Host "[2/2] 启动前端 (端口 $Port) ..." -ForegroundColor Cyan
Write-Host ""
Write-Host "  物联网仿真实训教学平台  ·  本地部署" -ForegroundColor Cyan
Write-Host "  ================================================"
Write-Host "  教学平台   http://127.0.0.1:$Port/training/"
Write-Host "  仿真平台   http://127.0.0.1:$Port/emulator/"
Write-Host "  通行证     http://127.0.0.1:$Port/account/"
Write-Host ""
Write-Host "  后端       http://127.0.0.1:$BackendPort" -ForegroundColor Green
Write-Host "  数据文件   backend\data\platform.db"
Write-Host "  桌面助手   ws://127.0.0.1:6600 （仿真功能需安装并启动）"
# Account is read from .env, never baked into this script.
$envFile = Join-Path $root '.env'
$accountHint = '（未配置，见 .env.example）'
if (Test-Path $envFile) {
  $line = Get-Content $envFile -Encoding UTF8 | Where-Object { $_ -match '^\s*NLE_USER\s*=' } | Select-Object -First 1
  if ($line) { $accountHint = ($line -split '=', 2)[1].Trim() }
}
Write-Host "  登录账号   $accountHint"
Write-Host ""
Write-Host "  按 Ctrl+C 停止"
Write-Host ""

try {
  node $server
} finally {
  if ($backendProc -and -not $backendProc.HasExited) {
    Write-Host "`n正在停止后端 ..." -ForegroundColor Yellow
    Stop-Process -Id $backendProc.Id -Force -ErrorAction SilentlyContinue
  }
}
