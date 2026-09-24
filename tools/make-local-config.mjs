// Local config generator: the mirrored SPAs hardcode the campus host in their
// config.js, so emit local variants that point every service at localhost.
// Originals stay untouched in site/; this writes to local-config/.
import fs from 'node:fs';
import path from 'node:path';

const HERE = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const ROOT = process.env.S_SITE || path.join(HERE, '..', 'site');
const OUT = process.env.S_LOCALCFG || path.join(ROOT, 'local-config');
const LOCAL = process.env.S_LOCALBASE || 'http://127.0.0.1:8080';

fs.mkdirSync(OUT, { recursive: true });

// 1. training/config/config.js — rewrite every absolute service URL.
const trainSrc = fs.readFileSync(path.join(ROOT, 'training', 'config', 'config.js'), 'utf8');
let trainOut = trainSrc
  .replace(/web_host:\s*"[^"]*"/, `web_host: "${LOCAL}/training-server"`)
  // The trailing slash is REQUIRED: the login chunk joins it as
  // `cloud_host + "upms/auth/token"` (no separator), while app.js joins it as
  // `cloud_host + "/upms/..."`. Removing it yields "/gatewayupms/...".
  // The double slash that app.js produces is absorbed by the backend's path
  // normalisation.
  .replace(/cloud_host:\s*"[^"]*"/, `cloud_host: "${LOCAL}/gateway/"`)
  .replace(/cloud_myinfo:\s*"[^"]*"/, `cloud_myinfo: "${LOCAL}/account/my/info"`)
  .replace(/redirect_uri:\s*"[^"]*"/, `redirect_uri: "${LOCAL}/account/login"`)
  .replace(/redirect_register:\s*"[^"]*"/, `redirect_register: "${LOCAL}/account/register"`)
  .replace(/emulator_host:\s*"[^"]*"/, `emulator_host: "${LOCAL}/emulator"`)
  // File service base. Points at the local backend; document rendering needs
  // an extra service (see OFFLINE.md) but the path shape stays the same.
  .replace(/doc_host:\s*"[^"]*"/, `doc_host: "${LOCAL}"`)
  .replace(/doc_priview_host:\s*"[^"]*"/, `doc_priview_host: "${LOCAL}/preview_v2.2.1"`);
fs.writeFileSync(path.join(OUT, 'training-config.js'), trainOut);

// 2. emulator/config/config.js — same treatment, plus the assistant versions.
const emuSrc = fs.readFileSync(path.join(ROOT, 'emulator', 'config', 'config.js'), 'utf8');
let emuOut = emuSrc
  .replace(/web_host:\s*"[^"]*"/, `web_host: "${LOCAL}/emulator-server"`)
  // Same trailing-slash requirement as the training config: this app also
  // joins `cloud_host + "/upms/..."`.
  .replace(/cloud_host:\s*"[^"]*"/, `cloud_host: "${LOCAL}/gateway/"`)
  .replace(/redirect_uri:\s*"[^"]*"/, `redirect_uri: "${LOCAL}/account/login"`)
  .replace(/redirect_register:\s*"[^"]*"/, `redirect_register: "${LOCAL}/account/register"`)
  .replace(/app_store_path:\s*"[^"]*"/, `app_store_path: "${LOCAL}/training-server/api/FileManager/Download/NLEEmulatorClientAssistant.exe"`);
fs.writeFileSync(path.join(OUT, 'emulator-config.js'), emuOut);

// 3. account/js/config.js — single gateway binding.
const acctSrc = fs.readFileSync(path.join(ROOT, 'account', 'js', 'config.js'), 'utf8');
const acctOut = acctSrc.replace(/var GATEWAY_URL\s*=\s*'[^']*'/, `var GATEWAY_URL = '${LOCAL}/gateway'`);
fs.writeFileSync(path.join(OUT, 'account-config.js'), acctOut);

const changes = [];
for (const [name, before, after] of [
  ['training', trainSrc, trainOut],
  ['emulator', emuSrc, emuOut],
  ['account', acctSrc, acctOut],
]) {
  const b = before.split('\n').filter(l => /https?:\/\//.test(l)).length;
  const a = after.split('\n').filter(l => /https?:\/\//.test(l)).length;
  changes.push({ app: name, urlLinesBefore: b, urlLinesAfter: a, changed: before !== after });
}

fs.writeFileSync(path.join(OUT, '_report.json'), JSON.stringify({ LOCAL, changes }, null, 2));
console.log('[local-config]', OUT);
for (const c of changes) console.log(`  ${c.app.padEnd(10)} changed=${c.changed}`);
console.log('\n[remaining upstream URLs in local configs]');
for (const f of ['training-config.js', 'emulator-config.js', 'account-config.js']) {
  const t = fs.readFileSync(path.join(OUT, f), 'utf8');
  const hits = [...t.matchAll(/https?:\/\/[^\s"';]+/g)].map(m => m[0])
    .filter(u => !u.startsWith(LOCAL) && !/w3\.org|schemas|purl|openxmlformats|oasis/.test(u));
  if (hits.length) console.log(`  ${f}: ${[...new Set(hits)].join(', ')}`);
}
