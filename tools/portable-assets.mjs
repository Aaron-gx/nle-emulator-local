// Export/import the assets that cannot live in git.
//
// Two things are deliberately excluded from the repository:
//   1. the vendor desktop assistant (copyrighted, 32MB)
//   2. .N2V simulator projects and their decrypted plaintext (your local data)
//
// This tool packages them into a single folder you can carry to another machine
// and unpack there, so a fresh clone becomes fully functional offline.
//
//   node tools/portable-assets.mjs export D:\carry
//   node tools/portable-assets.mjs import D:\carry
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { cfg } from './config.mjs';

const ROOT = cfg.root;

// Paths relative to the project root that must travel with you.
const ITEMS = [
  { rel: 'assets/NLEEmulatorClientAssistant.exe', required: false, note: '仿真桌面助手安装包' },
  { rel: 'backend/data/n2v', dir: true, required: false, note: '.N2V 工程与其明文' },
  { rel: 'backend/data/platform.db', required: false, note: '已导入的数据库（可在新机器重新生成）' },
  { rel: '.env', required: false, note: '本地账号配置' },
];

function sha256(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

function exportTo(dest) {
  fs.mkdirSync(dest, { recursive: true });
  const manifest = { exportedAt: new Date().toISOString(), root: ROOT, items: [] };
  let copied = 0;

  for (const it of ITEMS) {
    const src = path.join(ROOT, it.rel);
    if (!fs.existsSync(src)) {
      console.log(`  跳过（本地不存在）: ${it.rel}`);
      continue;
    }
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
      for (const f of walk(src)) {
        const rel = path.relative(ROOT, f);
        const out = path.join(dest, rel);
        fs.mkdirSync(path.dirname(out), { recursive: true });
        fs.copyFileSync(f, out);
        manifest.items.push({ rel: rel.split(path.sep).join('/'), size: fs.statSync(f).size, sha256: sha256(f), note: it.note });
        copied++;
      }
    } else {
      const out = path.join(dest, it.rel);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.copyFileSync(src, out);
      manifest.items.push({ rel: it.rel, size: stat.size, sha256: sha256(src), note: it.note });
      copied++;
    }
    console.log(`  已导出: ${it.rel}`);
  }

  fs.writeFileSync(path.join(dest, 'portable-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`\n[导出] ${copied} 个文件 -> ${dest}`);
  console.log('[导出] 清单: portable-manifest.json');
  const total = manifest.items.reduce((a, b) => a + b.size, 0);
  console.log(`[导出] 合计 ${(total / 1024 / 1024).toFixed(1)} MB`);
}

function importFrom(src) {
  const mf = path.join(src, 'portable-manifest.json');
  if (!fs.existsSync(mf)) {
    console.error(`[导入] 找不到清单 ${mf}`);
    console.error('[导入] 请指向 export 生成的目录');
    process.exit(1);
  }
  const manifest = JSON.parse(fs.readFileSync(mf, 'utf8'));
  let ok = 0, bad = 0;
  for (const item of manifest.items) {
    const from = path.join(src, item.rel);
    const to = path.join(ROOT, item.rel);
    if (!fs.existsSync(from)) { console.log(`  缺失: ${item.rel}`); bad++; continue; }
    const h = sha256(from);
    if (h !== item.sha256) { console.log(`  校验失败: ${item.rel}`); bad++; continue; }
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to);
    ok++;
  }
  console.log(`\n[导入] 成功 ${ok}，失败 ${bad}`);
  console.log('[导入] 完成后运行 .\\start.ps1');
}

const [cmd, target] = process.argv.slice(2);
if (cmd === 'export' && target) exportTo(path.resolve(target));
else if (cmd === 'import' && target) importFrom(path.resolve(target));
else {
  console.log('用法:');
  console.log('  node tools/portable-assets.mjs export <目标目录>   # 打包离线资产');
  console.log('  node tools/portable-assets.mjs import <来源目录>   # 在新机器还原');
  process.exit(1);
}
