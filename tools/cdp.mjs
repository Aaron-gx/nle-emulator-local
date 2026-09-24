// Minimal Chrome DevTools Protocol driver.
// Node 22 ships a global WebSocket, so no external dependency is needed.
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));

// Locate a Chromium-based browser. Override with C_CDP_CHROME if needed.
function findBrowser() {
  if (process.env.C_CDP_CHROME) return process.env.C_CDP_CHROME;
  const candidates = [
    `${process.env.ProgramFiles}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env['ProgramFiles(x86)']}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    `${process.env['ProgramFiles(x86)']}\\Microsoft\\Edge\\Application\\msedge.exe`,
    `${process.env.ProgramFiles}\\Microsoft\\Edge\\Application\\msedge.exe`,
  ];
  for (const c of candidates) if (c && fs.existsSync(c)) return c;
  return 'chrome'; // fall back to PATH
}

const CHROME = findBrowser();
const PORT = Number(process.env.C_CDP_PORT || 9333);
// Profile lives beside the project, never at an absolute path from another machine.
const PROFILE = process.env.C_CDP_PROFILE || path.join(HERE, '..', '.chrome-cdp');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function launch({ headless = true } = {}) {
  fs.mkdirSync(PROFILE, { recursive: true });
  const args = [
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${PROFILE}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--ignore-certificate-errors',
    '--disable-features=IsolateOrigins,site-per-process',
    '--disable-popup-blocking',
    '--window-size=1600,1000',
    'about:blank',
  ];
  if (headless) args.unshift('--headless=new');
  const proc = spawn(CHROME, args, { stdio: ['ignore', 'pipe', 'pipe'] });
  proc.stderr.on('data', () => {});

  // Wait for the debugging endpoint to be genuinely usable: /json/version can
  // answer slightly before the WS target list exists.
  for (let i = 0; i < 80; i++) {
    try {
      const v = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (v.ok) {
        const l = await fetch(`http://127.0.0.1:${PORT}/json/list`);
        if (l.ok) {
          const targets = await l.json();
          if (Array.isArray(targets) && targets.some((t) => t.type === 'page' && t.webSocketDebuggerUrl)) {
            await sleep(300);
            return proc;
          }
        }
      }
    } catch { /* not up yet */ }
    await sleep(400);
  }
  proc.kill();
  throw new Error('Chrome CDP 端口未就绪');
}

export async function newPage() {
  const r = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, { method: 'PUT' });
  const info = await r.json();
  const { page, ready } = attach(info.webSocketDebuggerUrl);
  await ready;
  return page;
}

// Attach to the first available page target (used when reusing a session).
export async function attachFirstPage() {
  const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
  const page = list.find((t) => t.type === 'page');
  if (!page) throw new Error('没有可用的页面目标');
  const { page: p, ready } = attach(page.webSocketDebuggerUrl);
  await ready;
  return p;
}

function attach(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const events = [];

  const ready = new Promise((resolve, reject) => {
    ws.addEventListener('open', () => resolve());
    ws.addEventListener('error', (e) => reject(new Error('WS error: ' + (e.message || 'unknown'))));
  });

  ws.addEventListener('message', (ev) => {
    let msg;
    try { msg = JSON.parse(ev.data); } catch { return; }
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    } else if (msg.method) {
      events.push(msg);
    }
  });

  const send = (method, params = {}) => new Promise((resolve, reject) => {
    const myId = ++id;
    pending.set(myId, { resolve, reject });
    ws.send(JSON.stringify({ id: myId, method, params }));
    setTimeout(() => {
      if (pending.has(myId)) { pending.delete(myId); reject(new Error(`CDP 超时: ${method}`)); }
    }, 60000);
  });

  const page = {
    ws,
    send,
    events,
    async close() { try { ws.close(); } catch {} },

    async navigate(url, { waitMs = 2500 } = {}) {
      await send('Page.enable');
      await send('Page.navigate', { url });
      await sleep(waitMs);
    },

    // Evaluate in page context; awaits promises and returns JSON-safe values.
    async eval(expression) {
      const res = await send('Runtime.evaluate', {
        expression,
        awaitPromise: true,
        returnByValue: true,
        allowUnsafeEvalBlockedByCSP: true,
      });
      if (res.exceptionDetails) {
        const d = res.exceptionDetails;
        throw new Error(`页面异常: ${d.text} ${d.exception?.description || ''}`.slice(0, 400));
      }
      return res.result?.value;
    },

    async setCookie(cookie) {
      await send('Network.enable');
      await send('Network.setCookie', cookie);
    },
  };
  return { page, ready };
}

export { sleep, PORT, PROFILE };
