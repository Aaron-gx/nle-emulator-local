// Remove rows created by the verification suite so the shipped DB holds only
// mirrored real data plus the seeded admin account.
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { openDb } from './db.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const db = openDb(process.env.B_DB || path.join(HERE, 'data', 'platform.db'));

const before = {
  exercises: db.prepare('SELECT COUNT(*) c FROM exercises').get().c,
  section_states: db.prepare('SELECT COUNT(*) c FROM section_states').get().c,
  practices: db.prepare('SELECT COUNT(*) c FROM practices').get().c,
};

// Verification artifacts are recognisable by their ids.
const exDel = db.prepare("DELETE FROM exercises WHERE id LIKE 'q1-%' OR id LIKE 'q2-%' OR sectionId LIKE 'test-section-%'").run().changes;
const ssDel = db.prepare("DELETE FROM section_states WHERE sectionId LIKE 'test-section-%'").run().changes;
const pDel = db.prepare("DELETE FROM practices WHERE id LIKE 'emu-%' AND sectionId = '00000000-0000-0000-0000-000000000000'").run().changes;

const after = {
  exercises: db.prepare('SELECT COUNT(*) c FROM exercises').get().c,
  section_states: db.prepare('SELECT COUNT(*) c FROM section_states').get().c,
  practices: db.prepare('SELECT COUNT(*) c FROM practices').get().c,
};

console.log('[clean] 删除验证残留:');
console.log(`  exercises       -${exDel}   (${before.exercises} -> ${after.exercises})`);
console.log(`  section_states  -${ssDel}   (${before.section_states} -> ${after.section_states})`);
console.log(`  practices       -${pDel}   (${before.practices} -> ${after.practices})`);

console.log('\n[clean] 最终库内容:');
for (const t of ['users', 'classes', 'templates', 'sections', 'tasks', 'task_records', 'exercises', 'practices', 'lessons', 'rfid_records']) {
  console.log(`  ${t.padEnd(16)} ${db.prepare(`SELECT COUNT(*) c FROM ${t}`).get().c}`);
}
