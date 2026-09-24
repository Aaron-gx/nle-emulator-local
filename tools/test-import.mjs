// End-to-end import check: take the decrypted XML, push it through the local
// backend's N2VToXml replay, and drive the simulator's own import action so we
// can see whether the canvas actually renders the project.
import fs from 'node:fs';
import { launch, attachFirstPage, sleep } from './cdp.mjs';
import { cfg, requireCredentials } from './config.mjs';

const LOCAL = process.env.L_LOCAL || 'http://127.0.0.1:8090';
const USER = cfg.user;
const PASS = cfg.pass;

async function main() {
  const proc = await launch({ headless: true });
  let page;
  try {
    page = await attachFirstPage();
    await page.send('Runtime.enable');
    await page.send('Page.enable');

    // --- login against the LOCAL backend ---------------------------------
    console.log('[import] 登录本地后端 ...');
    await page.navigate(`${LOCAL}/training/login`, { waitMs: 5000 });
    const login = await page.eval(`
      (async () => {
        const fd = new FormData();
        fd.append('phone', ${JSON.stringify(USER)});
        fd.append('password', ${JSON.stringify(PASS)});
        fd.append('grant_type', 'password');
        const r = await fetch(${JSON.stringify(LOCAL)} + '/gateway/upms/auth/token', { method: 'POST', body: fd });
        const j = await r.json();
        if (j && j.data && j.data.access_token) {
          localStorage.setItem('cloud-token', j.data.access_token);
          return j.data.access_token;
        }
        return null;
      })()
    `);
    if (!login) throw new Error('本地登录失败');
    console.log('[import] token =', login.slice(0, 10) + '…');

    // --- open the simulator ---------------------------------------------
    console.log('[import] 打开仿真平台 ...');
    await page.navigate(`${LOCAL}/emulator/main/simulation`, { waitMs: 9000 });

    // The emulator routes are guarded; make sure the token survives the
    // bootstrap (initToken/initStore read `cloud-token` from localStorage).
    let env = await page.eval(`JSON.stringify({
      url: location.href,
      hasApp: !!document.getElementById('app'),
      appChildren: (document.getElementById('app')||{children:[]}).children.length,
      token: (localStorage.getItem('cloud-token')||'none').slice(0,10)
    })`);
    console.log('[import] 页面(1):', env);

    if (/\/account\/login|\/training\/login/.test(JSON.parse(env).url)) {
      console.log('[import] 被守卫拦截，重新注入 token 后再进 ...');
      await page.eval(`
        localStorage.setItem('cloud-token', ${JSON.stringify(login)});
        localStorage.setItem('auth', ${JSON.stringify(login)});
      `);
      await page.navigate(`${LOCAL}/emulator/main/simulation`, { waitMs: 9000 });
      env = await page.eval(`JSON.stringify({
        url: location.href,
        hasApp: !!document.getElementById('app'),
        appChildren: (document.getElementById('app')||{children:[]}).children.length,
        token: (localStorage.getItem('cloud-token')||'none').slice(0,10)
      })`);
      console.log('[import] 页面(2):', env);
    }

    // --- load the captured plaintext and run the real import path --------
    const recordPath = 'E:/Learn/MeProject/2026.9.24-newland/backend/data/n2v/实验1.json';
    const xml = JSON.parse(fs.readFileSync(recordPath, 'utf8')).xml;
    console.log(`[import] 明文 XML ${Buffer.byteLength(xml)} 字节`);

    // Step 1: prove the local backend returns the plaintext for the ciphertext.
    const cipherB64 = fs.readFileSync('E:/Learn/MeProject/2026.9.24-newland/backend/data/n2v/实验1.N2V').toString('base64');
    const back = await page.eval(`
      (async () => {
        const bin = atob(${JSON.stringify(cipherB64)});
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const fd = new FormData();
        fd.append('file', new File([bytes], '实验1.N2V'), '实验1.N2V');
        const r = await fetch(${JSON.stringify(LOCAL)} + '/emulator-server/api/Common/N2VToXml', {
          method: 'POST',
          headers: { Authorization: 'Bearer ' + ${JSON.stringify(login)} },
          body: fd,
        });
        const j = await r.json();
        return { code: j.code, len: (j.data||'').length, items: ((j.data||'').match(/<DesignerItem>/g)||[]).length };
      })()
    `);
    console.log(`[import] 本地 N2VToXml 重放: code=${back.code} XML=${back.len} 设备=${back.items}`);

    // Step 2: drive the simulator's own action with that XML. Pass the payload
    // as base64 so XML quotes/newlines never touch JS string literals.
    const xmlB64 = Buffer.from(xml, 'utf8').toString('base64');
    const applied = await page.eval(`
      (async () => {
        const el = document.querySelector('#app');
        const root = el && (el.__vue__ || null);
        if (!root || !root.$store) {
          // Walk children in case the root element carries the instance deeper.
          const all = document.querySelectorAll('*');
          for (let i = 0; i < all.length; i++) {
            if (all[i].__vue__ && all[i].__vue__.$store) { return { ok: false, reason: 'store 在子节点上', tag: all[i].className }; }
          }
          return { ok: false, reason: '拿不到 Vuex store', hasApp: !!el };
        }
        const bin = atob(${JSON.stringify(xmlB64)});
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        const decoded = new TextDecoder('utf-8').decode(bytes);
        try {
          const r = root.$store.dispatch('kcanvas/importcanvas', { xml: decoded, single: true });
          if (r && typeof r.then === 'function') await r;
          return { ok: true, modules: Object.keys(root.$store.state || {}) };
        } catch (e) { return { ok: false, reason: String(e && e.message || e).slice(0, 200) }; }
      })()
    `);
    console.log('[import] importcanvas:', JSON.stringify(applied).slice(0, 400));

    await sleep(3000);
    const after = await page.eval(`JSON.stringify({
      url: location.href,
      canvasNodes: document.querySelectorAll('canvas').length,
      svgNodes: document.querySelectorAll('svg').length,
      deviceLabels: Array.from(document.querySelectorAll('*')).filter(function(n){
        return n.children.length === 0 && /网关|路由器|烟雾|火焰|继电器|警示灯|电源|4150/.test(n.textContent||'');
      }).slice(0, 12).map(function(n){ return (n.textContent||'').trim(); }),
      text: document.body.innerText.slice(0, 300)
    })`);
    console.log('[import] 渲染结果:', after);

    fs.writeFileSync('E:/Learn/MeProject/2026.9.24-newland/backend/data/n2v/_import_test.json',
      JSON.stringify({ back, applied, after: JSON.parse(after) }, null, 2));
    console.log('[import] 写入 _import_test.json');
  } finally {
    try { await page?.close(); } catch {}
    try { proc.kill(); } catch {}
  }
}

main().catch((e) => { console.error('[fatal]', e.message); process.exit(1); });
