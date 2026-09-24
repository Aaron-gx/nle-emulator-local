// Shared runtime configuration.
// Credentials come from the environment (or a local .env), never from source,
// so this repository can be published without leaking an account.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Minimal .env loader: KEY=VALUE per line, # comments, no interpolation.
function loadEnvFile(file) {
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const s = line.trim();
    if (!s || s.startsWith('#')) continue;
    const eq = s.indexOf('=');
    if (eq < 0) continue;
    const k = s.slice(0, eq).trim();
    const v = s.slice(eq + 1).trim();
    if (!(k in process.env)) process.env[k] = v;
  }
}
loadEnvFile(path.join(ROOT, '.env'));

const required = (...names) => {
  for (const n of names) if (process.env[n]) return process.env[n];
  return undefined;
};

export const cfg = {
  root: ROOT,

  // Local login account. Supplied via .env; never hardcoded.
  user: required('NLE_USER'),
  pass: required('NLE_PASS'),

  local: process.env.NLE_LOCAL || 'http://127.0.0.1:8090',
  backend: process.env.NLE_BACKEND || 'http://127.0.0.1:8091',

  fePort: Number(process.env.S_PORT || 8090),
  bePort: Number(process.env.B_PORT || 8091),
};

export function requireCredentials() {
  if (!cfg.user || !cfg.pass) {
    throw new Error(
      '缺少账号配置。请复制 .env.example 为 .env 并填写 NLE_USER / NLE_PASS。',
    );
  }
  return { user: cfg.user, pass: cfg.pass };
}
