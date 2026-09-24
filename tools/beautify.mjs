// Beautify the mirrored webpack bundles into readable sources for secondary
// development. Originals are preserved; output goes to a parallel _readable tree.
import fs from 'node:fs';
import path from 'node:path';
import prettier from 'prettier';

const SRC = process.argv[2] || 'E:/Learn/MeProject/2026.9.24-newland/site';
const DST = process.argv[3] || 'E:/Learn/MeProject/2026.9.24-newland/site_readable';
const MAX = Number(process.env.BEAUTIFY_MAX || 12 * 1024 * 1024);

function walk(dir, acc = []) {
  let ents;
  try { ents = fs.readdirSync(dir, { withFileTypes: true }); } catch { return acc; }
  for (const e of ents) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.js$/i.test(e.name)) acc.push(p);
  }
  return acc;
}

const files = walk(SRC).sort((a, b) => fs.statSync(a).size - fs.statSync(b).size);
console.log(`[beautify] ${files.length} js files, sequential (large-last)`);

const results = [];
for (const f of files) {
  const st = fs.statSync(f);
  const rel = path.relative(SRC, f);
  const outPath = path.join(DST, rel);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  if (st.size > MAX) {
    fs.copyFileSync(f, outPath);
    results.push({ rel, size: st.size, status: 'copied-too-large' });
    console.log(`  skip(large) ${rel} ${(st.size / 1024 / 1024).toFixed(2)}MB`);
    continue;
  }

  const t0 = Date.now();
  try {
    const src = fs.readFileSync(f, 'utf8');
    const out = await prettier.format(src, {
      parser: 'babel',
      printWidth: 160,
      semi: true,
      singleQuote: false,
    });
    fs.writeFileSync(outPath, out);
    const ms = Date.now() - t0;
    results.push({ rel, size: st.size, outSize: out.length, ms, status: 'formatted' });
    console.log(`  ok ${String(ms).padStart(6)}ms  ${rel}`);
  } catch (e) {
    fs.copyFileSync(f, outPath);
    results.push({ rel, size: st.size, status: 'parse-failed', err: e.message.slice(0, 200) });
    console.log(`  FAIL ${rel}: ${e.message.slice(0, 120)}`);
  }
}

fs.writeFileSync(path.join(DST, '_beautify_report.json'), JSON.stringify(results, null, 2));
const fmt = results.filter(r => r.status === 'formatted').length;
console.log(`\n[beautify done] formatted=${fmt} other=${results.length - fmt}`);
console.log(`[output] ${DST}`);
