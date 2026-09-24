// Offline smoke test: run the whole stack with upstream pointed at an
// unreachable host, proving nothing depends on the campus network.
// Credentials come from .env (see .env.example).
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { cfg } from '../tools/config.mjs';

const ROOT = cfg.root;
const FE = 8095;
const BE = 8096;

if (!cfg.user || !cfg.pass) {
  console.error('[fatal] 缺少账号：请复制 .env.example 为 .env 并填写 NLE_USER / NLE_PASS');
  process.exit(2);
}

const procs = [];
function launch(file, args, env, cwd) {
  const p = spawn('node', args, { cwd, env: { ...process.env, ...env }, stdio: ['ignore', 'pipe', 'pipe'] });
  p.stdout.on('data', () => {});
  p.stderr.on('data', (d) => process.stderr.write(`[${path.basename(file)}] ${d}`));
  procs.push(p);
  return p;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function get(url, opts = {}) {
  try {
    const res = await fetch(url, { ...opts, signal: AbortSignal.timeout(15000) });
    const text = await res.text();
    return { status: res.status, ctype: res.headers.get('content-type') || '', body: text };
  } catch (e) {
    return { status: 0, ctype: '', body: '', err: e.message };
  }
}

const results = [];
const check = (name, ok, detail) => {
  results.push({ name, ok: !!ok, detail });
  console.log(`  [${ok ? 'PASS' : 'FAIL'}] ${name}${detail ? '  — ' + detail : ''}`);
};

async function main() {
  console.log('=== 离线自检 ===');
  console.log(`  前端 ${FE} / 后端 ${BE}，全程不访问外部网络\n`);

  launch('backend', ['--no-warnings', 'server.mjs'], { B_PORT: String(BE) }, path.join(ROOT, 'backend'));
  await sleep(2500);
  launch('serve', ['server/serve.mjs'], {
    S_PORT: String(FE), S_LOCALBASE: `http://127.0.0.1:${FE}`,
    S_BACKEND: `http://127.0.0.1:${BE}`,
  }, ROOT);
  await sleep(3000);

  console.log('=== 1. 静态素材（不依赖网络）===');
  const assets = [
    ['教学平台首页', '/training/'],
    ['仿真平台首页', '/emulator/'],
    ['通行证首页', '/account/'],
    ['文档预览服务', '/preview_v2.2.1/index.html'],
    ['教学主 bundle', '/training/js/app.2fbd3d13.js'],
    ['仿真主 bundle', '/emulator/js/app.6ae0aea6.js'],
    ['仿真设备图标', '/emulator/image/device/Router_Thumbnail.png'],
    ['仿真场景图', '/emulator/img/bg_smart_farming.b2e755ab.png'],
    ['教学轮播图', '/training/img/pic_carousel_back.39ed3f5e.png'],
    ['助手库', '/emulator/lib/nleEmulatorLib.js'],
    ['习题导入模板xls', '/training/config/ExerciseTemplate.xls'],
    ['习题导入模板docx', '/training/config/ExerciseTemplate.docx'],
  ];
  for (const [name, p] of assets) {
    const r = await get(`http://127.0.0.1:${FE}${p}`);
    check(name, r.status === 200 && r.body.length > 0, `${r.status} ${r.body.length}B`);
  }

  console.log('\n=== 2. 本地后端（独立数据）===');
  const login = await get(`http://127.0.0.1:${FE}/gateway/upms/auth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ phone: cfg.user, password: cfg.pass, grant_type: 'password' }).toString(),
  });
  let token = null;
  try { token = JSON.parse(login.body).data.access_token; } catch {}
  check('离线登录', !!token, token ? 'token 已签发' : login.body.slice(0, 80));

  const api = async (p) => get(`http://127.0.0.1:${FE}${p}`, { headers: { Authorization: 'Bearer ' + token } });
  const t = await api('/training-server/api/Task/GetTaskPage?pageIndex=1&pageSize=5');
  let tj = {}; try { tj = JSON.parse(t.body); } catch {}
  check('任务列表', tj.code === 0 && tj.data?.records >= 0, `records=${tj.data?.records}`);

  const ex = await api('/training-server/api/Exercise/GetExerciseWithState');
  let ej = {}; try { ej = JSON.parse(ex.body); } catch {}
  check('题库', Array.isArray(ej.data) && ej.data.length > 5000, `${ej.data?.length} 道`);

  const st = await api('/training-server/api/Statistic/GetStatisticData');
  let sj = {}; try { sj = JSON.parse(st.body); } catch {}
  check('统计', sj.code === 0, `taskCount=${sj.data?.taskCount}`);

  console.log('\n=== 3. 接口转发链路 ===');
  // A request to a backend path must reach the local backend through the
  // static server's forwarder.
  const proxied = await api('/training-server/api/server/time');
  let pj = {}; try { pj = JSON.parse(proxied.body); } catch {}
  check('接口经前端转发到后端', pj.code === 0, `data=${pj.data}`);

  const failed = results.filter((r) => !r.ok);
  console.log(`\n**** 合计 ${results.length} 项，通过 ${results.length - failed.length}，失败 ${failed.length} ****`);
  if (failed.length) {
    for (const f of failed) console.log(`   失败: ${f.name}  ${f.detail || ''}`);
  }
}

main()
  .catch((e) => { console.error('[fatal]', e); process.exitCode = 1; })
  .finally(() => {
    for (const p of procs) { try { p.kill(); } catch {} }
    setTimeout(() => process.exit(process.exitCode || 0), 400);
  });
