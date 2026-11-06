// Static front-end server for the local deployment.
// Serves the three SPAs and forwards their API calls to the local backend,
// so the whole stack runs from localhost with no external dependency.
//
//   /training/*        -> SPA
//   /emulator/*        -> SPA
//   /account/*         -> SPA
//   /training-server/* -> local backend
//   /emulator-server/* -> local backend
//   /gateway/*         -> local backend
import http from 'node:http';
import https from 'node:https';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = process.env.S_SITE || path.join(HERE, '..', 'site');
const PORT = Number(process.env.S_PORT || 8090);
const LOCALIZE = process.env.S_LOCALIZE !== '0';

const agent = new https.Agent({ rejectUnauthorized: false, keepAlive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.txt': 'text/plain; charset=utf-8',
  '.exe': 'application/octet-stream',
  '.xml': 'text/xml; charset=utf-8',
  '.wasm': 'application/wasm',
};

// Service prefixes that belong to the backend rather than the static site.
const PROXY_PREFIXES = [
  '/training-server',
  '/emulator-server',
  '/gateway',
  '/account/my',
  '/preview_v2.2.1',
  '/emulator/lib',   // served locally too; local copy wins (see static first)
];

// SPA roots: unknown in-app routes fall back to that app's index.html.
const SPA_ROOTS = ['/training', '/emulator', '/account'];

// API calls are forwarded to the local backend.
const BACKEND = process.env.S_BACKEND || 'http://127.0.0.1:8091';

// Config injection: rewrite each app's config.js so the SPAs address this
// server on whatever port we actually bound. This keeps the localised config
// correct even when the port shifts to avoid a conflict.
function localizedConfigFor(appKey, port) {
  const base = `http://127.0.0.1:${port}`;
  const f = path.join(ROOT, 'local-config', `${appKey}-config.js`);
  if (!fs.existsSync(f)) return null;
  let t = fs.readFileSync(f, 'utf8');
  // Replace any previously injected localhost origin with the live port.
  t = t.replace(/http:\/\/127\.0\.0\.1:\d+/g, base);
  return t;
}

const CONFIG_ROUTES = {
  '/training/config/config.js': 'training',
  '/emulator/config/config.js': 'emulator',
  '/account/js/config.js': 'account',
};

let BOUND_PORT = PORT;

// ---------------------------------------------------------- auth bridging ---
// The three apps persist the token under three different keys upstream:
//   account   localStorage.auth              (plain string)
//   training  localStorage["cloud-token"]    (JSON-encoded string)
//   emulator  cookie "cloud-token"           (read via a cookie helper)
// Upstream ties them together because the account portal also sets the cookie.
// This deployment skips that step, so the emulator's router guard sees no
// token and bounces every /main/* visit to /account/login. Bridge the keys in
// the page itself, leaving the mirrored bundles untouched.
const AUTH_BRIDGE = `
(function () {
  var KEY = 'cloud-token';

  function readLocalToken() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        try { return JSON.parse(raw); } catch (e) { return raw; }
      }
      var auth = localStorage.getItem('auth');
      if (auth) return auth;
    } catch (e) {}
    return '';
  }

  // Mirror every known key onto the cookie the emulator reads, so all three
  // apps agree on "who is logged in" no matter which one signed in first.
  // Skip when the origin already handed us ?token= — that path writes the
  // cookie itself, and writing twice leaves a duplicate cookie pair.
  function hasTokenParam() {
    return /[?&]token=/.test(location.search);
  }

  function sync() {
    if (hasTokenParam()) return;
    var t = readLocalToken();
    if (!t) return;
    var current = (document.cookie.split('; ').find(function (c) { return c.indexOf(KEY + '=') === 0; }) || '').slice(KEY.length + 1);
    if (current && decodeURIComponent(current) === t) return;
    if (current) {
      // Replace rather than append, so repeated logins cannot stack cookies.
      document.cookie = KEY + '=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    }
    document.cookie = KEY + '=' + encodeURIComponent(t) + '; path=/';
  }

  sync();
  // The SPAs assign localStorage while running; keep the cookie in step.
  var setItem = Storage.prototype.setItem;
  Storage.prototype.setItem = function (k, v) {
    var r = setItem.apply(this, arguments);
    if (this === localStorage && (k === KEY || k === 'auth')) sync();
    return r;
  };

  // The emulator writes the token back through a cookie helper on refresh;
  // accept either encoding when reading it back out.
  window.__nleToken = readLocalToken;
})();
`;

function serveLocalizedConfig(res, urlPath) {
  if (!LOCALIZE) return false;
  const appKey = CONFIG_ROUTES[urlPath];
  if (!appKey) return false;
  const body = localizedConfigFor(appKey, BOUND_PORT);
  if (body === null) return false;
  res.writeHead(200, { 'Content-Type': MIME['.js'], 'Cache-Control': 'no-cache' });
  res.end(body);
  return true;
}

// Serve an SPA document with the auth bridge prepended. Returning HTML rather
// than editing the mirrored index.html keeps the mirror byte-identical.
function serveSpaIndex(res, indexPath) {
  let html;
  try { html = fs.readFileSync(indexPath, 'utf8'); } catch { return false; }
  const tag = '<script>' + AUTH_BRIDGE + '</script>';
  const at = html.search(/<script\s+src=/i);
  html = at === -1 ? html.replace(/<\/head>/i, tag + '</head>') : html.slice(0, at) + tag + html.slice(at);
  res.writeHead(200, { 'Content-Type': MIME['.html'], 'Cache-Control': 'no-cache' });
  res.end(html);
  return true;
}

// A request for an asset that does not exist must 404, never fall back to
// index.html: the SPA would otherwise try to decode HTML as an image and show
// a broken-image box instead of a clean miss.
const ASSET_EXT = /\.(png|jpe?g|gif|svg|webp|bmp|ico|woff2?|ttf|eot|mp3|mp4|wasm|css|js|map|xml|txt|json|pdf|exe|zip)$/i;

function serveStatic(req, res, urlPath) {
  let rel = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  if (rel.endsWith('/')) rel += 'index.html';
  const target = path.join(ROOT, rel);
  // Contain path traversal.
  if (!path.resolve(target).startsWith(path.resolve(ROOT))) return false;

  const candidates = [target];
  // The kkFileView entry point is served as /preview_v2.2.1/index with no
  // extension, so fall back to appending .html before giving up.
  if (!path.extname(target)) candidates.push(target + '.html');

  for (const c of candidates) {
    if (fs.existsSync(c) && fs.statSync(c).isFile()) {
      const ext = path.extname(c).toLowerCase();
      // SPA documents get the auth bridge; every other asset is served as-is
      // so the mirrored bytes stay untouched.
      if (ext === '.html' && LOCALIZE) {
        const abs = path.resolve(c);
        if (SPA_ROOTS.some(r => abs.startsWith(path.resolve(ROOT, r.slice(1)) + path.sep))) {
          if (serveSpaIndex(res, c)) return true;
        }
      }
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      fs.createReadStream(c).pipe(res);
      return true;
    }
  }
  return false;
}

// Forward to the configured backend over plain HTTP (the local backend), or to
// the campus host over HTTPS when the local backend is disabled.
function proxyTo(baseUrl, req, res) {
  const target = new URL(req.url, baseUrl);
  const headers = { ...req.headers, host: target.host };
  const isTls = target.protocol === 'https:';
  const mod = isTls ? https : http;
  const opts = {
    hostname: target.hostname,
    port: target.port || (isTls ? 443 : 80),
    path: target.pathname + target.search,
    method: req.method,
    headers,
  };
  if (isTls) opts.agent = agent;
  const preq = mod.request(opts, (pres) => {
    // Forward headers verbatim: stripping content-encoding while leaving the
    // compressed body intact would corrupt every response.
    res.writeHead(pres.statusCode || 502, pres.headers);
    pres.pipe(res);
  });
  preq.on('error', (e) => {
    res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ code: 9999, msg: 'backend unreachable: ' + e.message, local: true }));
  });
  req.pipe(preq);
}

function proxy(req, res) {
  return proxyTo(BACKEND, req, res);
}

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];

  // Localised config must win over the mirrored original.
  if (serveLocalizedConfig(res, urlPath)) return;

  const isProxy = PROXY_PREFIXES.some(p => urlPath === p || urlPath.startsWith(p + '/') || urlPath.startsWith(p + '?'));

  // Prefer a mirrored file whenever one exists — even under a proxied prefix.
  // /preview_v2.2.1 is both a mirrored static app and a proxied service; serving
  // the local copy keeps document preview working with no network.
  if (serveStatic(req, res, urlPath)) return;

  if (isProxy) return proxy(req, res);

  // A missing asset must 404 rather than fall through to a SPA shell. Handing
  // HTML to an <img> makes the browser render a broken-image placeholder and
  // hides the fact that the file simply is not part of the platform.
  if (ASSET_EXT.test(urlPath)) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 asset not mirrored: ' + urlPath);
    return;
  }

  // SPA fallback for client-side routes.
  for (const root of SPA_ROOTS) {
    if (urlPath === root || urlPath.startsWith(root + '/')) {
      const idx = path.join(ROOT, root.replace(/^\//, ''), 'index.html');
      if (fs.existsSync(idx)) {
        // Match the static handler's cache policy: a cached SPA shell here
        // would strand deep links on a stale document.
        if (LOCALIZE && serveSpaIndex(res, idx)) return;
        res.writeHead(200, { 'Content-Type': MIME['.html'], 'Cache-Control': 'no-cache' });
        fs.createReadStream(idx).pipe(res);
        return;
      }
    }
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('404 local: ' + urlPath);
});

// Bind with automatic port fallback: a taken port must not take the whole
// deployment down, and the injected config has to follow the port we land on.
let attempt = 0;
function listen(port) {
  server.once('error', (e) => {
    if (e.code === 'EADDRINUSE' && attempt < 20) {
      attempt++;
      console.log(`[local] port ${port} in use, trying ${port + 1}`);
      listen(port + 1);
    } else {
      console.error('[local] fatal:', e.message);
      process.exit(1);
    }
  });
  server.listen(port, '127.0.0.1', () => {
    BOUND_PORT = server.address().port;
    console.log(`[local] serving ${ROOT}`);
    console.log(`[local] http://127.0.0.1:${BOUND_PORT}/training/`);
    console.log(`[local] http://127.0.0.1:${BOUND_PORT}/emulator/`);
    console.log(`[local] http://127.0.0.1:${BOUND_PORT}/account/`);
    console.log(`[local] proxying -> ${BACKEND}`);
    console.log(`[local] LOCALIZE=${LOCALIZE} (config.js served with local origins)`);
  });
}
listen(PORT);
