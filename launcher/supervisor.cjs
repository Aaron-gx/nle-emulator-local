'use strict';
// 物联网仿真实训教学平台 · 一键启动器（Node SEA 入口）
//
// 打包流程见 launcher/README.md。产物是一个独立的 exe，双击后：
//   1. 首次运行时先建库（backend/import.mjs，无 .env 时账号为 local-admin）
//   2. 启动后端 API（B_PORT，默认 8091）
//   3. 启动前端静态服务（S_PORT，默认 8090）
//   4. 打开浏览器进入教学平台
// 本进程只做编排，自身不监听端口；真正的服务是同目录的两个 Node 子进程。
const { spawn, spawnSync } = require('node:child_process');
const path = require('node:path');
const http = require('node:http');
const net = require('node:net');
const fs = require('node:fs');

// 双击运行时 exe 所在目录就是包根目录；不能依赖 cwd（命令行启动时 cwd 任意）。
const ROOT = path.dirname(process.execPath);
const NODE_BIN = fs.existsSync(path.join(ROOT, 'node.exe')) ? path.join(ROOT, 'node.exe') : 'node';

const log = (...a) => console.log('[启动器]', ...a);
const die = (msg) => { console.error('[启动器] 错误:', msg); process.exitCode = 1; };

// 选中一个当前未被占用的端口，从 preferred 开始向上找。
function freePort(preferred) {
  return new Promise((resolve) => {
    const srv = net.createServer();
    srv.once('error', () => resolve(freePort(preferred + 1)));
    srv.listen(preferred, '127.0.0.1', () => {
      const p = srv.address().port;
      srv.close(() => resolve(p));
    });
  });
}

function waitUrl(url, timeoutMs, label) {
  const started = Date.now();
  return new Promise((resolve, reject) => {
    const tick = () => {
      const req = http.get(url, (res) => {
        res.resume();
        if (res.statusCode === 200) return resolve();
        retry();
      });
      req.on('error', retry);
      req.setTimeout(1500, () => { req.destroy(); retry(); });
    };
    const retry = () => {
      if (Date.now() - started > timeoutMs) return reject(new Error(label + ' 启动超时'));
      setTimeout(tick, 400);
    };
    tick();
  });
}

const children = [];
const track = (child) => { children.push(child); return child; };

async function main() {
  // 控制台中文输出需要 UTF-8 代码页。
  try { spawnSync('cmd.exe', ['/c', 'chcp', '65001'], { stdio: 'ignore' }); } catch {}
  process.title = '物联网仿真平台';

  console.log('==============================================');
  console.log('  物联网仿真实训教学平台 · 本地部署');
  console.log('==============================================');

  if (!fs.existsSync(path.join(ROOT, 'backend', 'server.mjs'))) {
    return die('未找到 backend/server.mjs，请确认 exe 位于部署包根目录');
  }

  const B_PORT = await freePort(8091);
  const S_PORT = await freePort(B_PORT === 8090 ? 8092 : 8090);
  const env = { ...process.env, B_PORT: String(B_PORT), S_PORT: String(S_PORT) };
  const backendDir = path.join(ROOT, 'backend');
  const serverDir = path.join(ROOT, 'server');

  // ---- 1. 首次运行建库 --------------------------------------------------
  const dbFile = path.join(backendDir, 'data', 'platform.db');
  if (!fs.existsSync(dbFile)) {
    log('首次运行，正在导入数据（约需十几秒）...');
    fs.mkdirSync(path.join(backendDir, 'data'), { recursive: true });
    const r = spawnSync(NODE_BIN, ['--no-warnings', 'import.mjs'], {
      cwd: backendDir, env, stdio: 'inherit',
    });
    if (r.status !== 0 || !fs.existsSync(dbFile)) {
      return die('数据导入失败，请检查 data/ 目录是否完整');
    }
    log('数据库就绪:', dbFile);
  }

  // ---- 2. 后端 ---------------------------------------------------------
  const backend = track(spawn(NODE_BIN, ['--no-warnings', 'server.mjs'], {
    cwd: backendDir, env, stdio: 'inherit',
  }));
  backend.on('exit', (c) => { if (c !== 0 && !shuttingDown) die('后端进程退出（码 ' + c + '）'); });

  try {
    await waitUrl(`http://127.0.0.1:${B_PORT}/api/server/time`, 30000, '后端');
    log(`后端就绪  http://127.0.0.1:${B_PORT}`);
  } catch (e) { return die(e.message); }

  // ---- 3. 前端 ---------------------------------------------------------
  const frontend = track(spawn(NODE_BIN, ['--no-warnings', 'serve.mjs'], {
    cwd: serverDir, env: { ...env, S_BACKEND: `http://127.0.0.1:${B_PORT}` }, stdio: 'inherit',
  }));
  frontend.on('exit', (c) => { if (c !== 0 && !shuttingDown) die('前端进程退出（码 ' + c + '）'); });

  let entry = `http://127.0.0.1:${S_PORT}/training/`;
  try {
    await waitUrl(entry, 30000, '前端');
    log(`前端就绪  ${entry}`);
  } catch (e) { return die(e.message); }

  // ---- 4. 打开浏览器 ---------------------------------------------------
  console.log('\n  教学平台   ' + entry);
  console.log('  仿真平台   ' + `http://127.0.0.1:${S_PORT}/emulator/`);
  console.log('  通行证     ' + `http://127.0.0.1:${S_PORT}/account/`);
  console.log('  登录账号   local-admin / local-admin（首次建库时的默认账号）');
  console.log('  仿真功能   需先安装并启动 assets/NLEEmulatorClientAssistant.exe');
  console.log('\n  关闭本窗口即退出服务。\n');

  if (!process.env.NLE_NO_BROWSER) {
    spawn('cmd.exe', ['/c', 'start', '', entry], { detached: true, stdio: 'ignore' }).unref();
  }

  // 保活：子进程退出不会让父进程存活，这里用常驻定时器顶住事件循环。
  setInterval(() => {}, 1 << 30);
}

let shuttingDown = false;
function shutdown() {
  if (shuttingDown) return;
  shuttingDown = true;
  log('正在停止服务...');
  // 同一控制台组里的子进程通常也会收到 Ctrl+C；这里再按 PID 显式补一刀
  //（/t 连带孙进程，例如 serve 反代出去的连接不受影响，只杀服务树）。
  for (const c of children) {
    if (!c.pid || c.exitCode !== null) continue;
    try { spawnSync('taskkill', ['/pid', String(c.pid), '/t', '/f'], { stdio: 'ignore' }); } catch {}
  }
  process.exit(0);
}
process.on('SIGINT', shutdown);
process.on('SIGBREAK', shutdown);
process.on('SIGHUP', shutdown);

main().catch((e) => die(e && e.message ? e.message : String(e)));
