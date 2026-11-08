# 一键启动器

把 `launcher/supervisor.cjs` 打包成独立的 `物联网仿真平台.exe`（Node SEA），
让没装 Node 的机器也能**解压后双击运行**整个平台。

## 产物做什么

exe 本身只做编排（Node SEA 的入口是单个脚本，不监听端口）：

1. 首次运行时调用 `backend/import.mjs` 建库（无 `.env` 时账号为
   `local-admin / local-admin`）
2. 用旁边的 `node.exe` 启动 `backend/server.mjs`（B_PORT）
3. 启动 `server/serve.mjs`（S_PORT）
4. 健康检查通过后用默认浏览器打开教学平台
5. 端口从 8090/8091 起自动找空闲位；关闭窗口即退出全部服务

## 构建步骤

需要 Node ≥ 22.23（SEA 熔丝 ID 与旧版不同，见下）。

```powershell
# 1. 生成 SEA blob
node --experimental-sea-config launcher/sea-config.json

# 2. 复制一份 node.exe 作为载体
Copy-Item (Join-Path (Split-Path (Get-Command node).Source) 'node.exe') launcher\dist\物联网仿真平台.exe

# 3. 注入 blob
npx -y postject launcher\dist\物联网仿真平台.exe NODE_SEA_BLOB `
  launcher\dist\sea-blob.blob `
  --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
```

**注意哨兵熔丝 ID**：postject 默认值是 Node 20 时代的
`NODE_SEA_FUSE_fce644ab0ca34edd89b7a1b8b4a58b17`，在 Node 22.23 的二进制里
不存在（报 "Could not find the sentinel"）。实际的 ID 可以从二进制里搜出来：

```python
d = open(r'C:\path\to\node.exe','rb').read()
i = d.find(b'NODE_SEA_FUSE')   # → NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2:0
```

构建时传哪个 ID，就用二进制里实际存在的那一个。

## 打包目录布局

exe 靠"自身所在目录"定位资源，因此**必须放在包根目录**，旁边要有：

```
物联网仿真平台.exe      ← SEA 产物（编排器）
node.exe                ← 与构建时同大版本（子进程用它跑真实服务）
backend/  server/  site/  data/  tools/
assets/NLEEmulatorClientAssistant.exe
```

不需要 `.env`（无则用默认账号）与 `backend/data/`（首次运行自动建库）。
完整打包脚本见仓库 Release 流程；`launcher/dist/` 为构建中间产物，不入库。

## 已知行为

- exe 未签名，首次运行 SmartScreen 会提示，选「仍要运行」
- 控制台窗口即日志面板，关闭窗口 = 停止全部服务
- 若之前被任务管理器强杀过进程，SQLite 可能残留 WAL 导致短暂
  "readonly database"，重新正常启动一次即可恢复
