// Import the mirrored platform data into the standalone SQLite database.
// Idempotent: re-running replaces rows rather than duplicating them.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { openDb } from './db.mjs';
import { cfg } from '../tools/config.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(HERE, '..');
const DB_FILE = process.env.B_DB || path.join(HERE, 'data', 'platform.db');
const DATA = process.env.B_DATA || path.join(ROOT, 'data');
const DEEP = path.join(DATA, 'deep');

const db = openDb(DB_FILE);
const read = (f) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch { return null; } };
const J = (v) => JSON.stringify(v ?? null);
const S = (v) => (v === undefined || v === null ? null : String(v));
const N = (v) => (v === undefined || v === null || v === '' ? 0 : Number(v) || 0);

const stats = {};
const bump = (k, n = 1) => { stats[k] = (stats[k] || 0) + n; };

// ------------------------------------------------------------------ users ---
// Seed the local administrator from .env so no real account is baked into
// source. Falls back to a clearly-local placeholder when unconfigured.
function seedUsers() {
  const adminPhone = cfg.user || 'local-admin';
  const adminPass = cfg.pass || 'local-admin';
  const accounts = [
    {
      id: adminPhone, phone: adminPhone, password: adminPass,
      name: '本地管理员', userName: adminPhone,
      kind: 1, roleName: '老师', roleId: 1,
      classId: '901', className: '物联网', collegeName: '本地部署院校',
    },
  ];
  for (const a of accounts) {
    const exists = db.prepare('SELECT id FROM users WHERE id = ?').get(a.id);
    if (exists) {
      db.prepare('UPDATE users SET password = ?, name = ?, userName = ?, kind = ?, roleName = ?, roleId = ?, classId = ?, className = ? WHERE id = ?')
        .run(a.password, a.name, a.userName, a.kind, a.roleName, a.roleId, a.classId, a.className, a.id);
    } else {
      db.prepare(`INSERT INTO users (id, phone, password, name, userName, kind, roleName, roleId, classId, className, collegeName)
                  VALUES (?,?,?,?,?,?,?,?,?,?,?)`)
        .run(a.id, a.phone, a.password, a.name, a.userName, a.kind, a.roleName, a.roleId, a.classId, a.className, a.collegeName);
    }
    bump('users');
  }
  // Classes referenced by the real task data.
  for (const [id, name] of [['901', '物联网'], ['902', '测试-验证统一授权']]) {
    db.prepare('INSERT OR REPLACE INTO classes (id, name) VALUES (?, ?)').run(id, name);
  }
  // Students appearing in the mirrored task records, so lists resolve names.
  const recs = read(path.join(DATA, 'task_record.json')) || [];
  for (const r of recs) {
    if (!r.studentId) continue;
    const exists = db.prepare('SELECT id FROM users WHERE id = ?').get(String(r.studentId));
    if (exists) continue;
    db.prepare(`INSERT INTO users (id, phone, password, name, userName, kind, roleName, classId, className, studentNumber)
                VALUES (?,?,?,?,?,?,?,?,?,?)`)
      .run(String(r.studentId), null, 'student', r.studentName || String(r.studentId), r.studentName || '',
        2, '学生', S(r.classId), S(r.className), S(r.studentNumber));
    bump('users');
  }
}

// -------------------------------------------------------------- exercises ---
function importExercises() {
  const list = read(path.join(DATA, 'exercise.json'));
  if (!Array.isArray(list)) { console.log('  ! exercise.json 缺失'); return; }
  const ins = db.prepare(`INSERT OR REPLACE INTO exercises
    (id, sectionId, title, idx, type, score, question, optionA, optionB, optionC, optionD, optionE, answer, addingMode, author, modifyTime, importBatchId, tag, payload)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
  for (const e of list) {
    ins.run(
      String(e.id), S(e.sectionId), S(e.title), N(e.index), N(e.type), N(e.score),
      S(e.question), S(e.optionA), S(e.optionB), S(e.optionC), S(e.optionD), S(e.optionE),
      S(e.answer), N(e.addingMode), S(e.author), S(e.modifyTime), S(e.importBatchId), S(e.tag),
      J(e),
    );
    bump('exercises');
  }
}

// Upstream expresses "no parent" as an all-zero GUID rather than null.
const ZERO_GUID = /^0{8}-0{4}-0{4}-0{4}-0{12}$/;
const parentOf = (v) => {
  const s = S(v);
  if (!s || ZERO_GUID.test(s)) return null;
  return s;
};

// --------------------------------------------------- templates & sections ---
function importTemplates() {
  const list = read(path.join(DEEP, 'task_templates.json'));
  if (!Array.isArray(list)) { console.log('  ! task_templates.json 缺失'); return; }
  const insTpl = db.prepare(`INSERT OR REPLACE INTO templates (id, name, lessonId, sourceId, collegeId, teacherId, number, payload)
                             VALUES (?,?,?,?,?,?,?,?)`);
  const insSec = db.prepare(`INSERT OR REPLACE INTO sections
    (id, templateId, parentId, sectionName, sequence, taskType, duration, score, hasContent, content, payload)
    VALUES (?,?,?,?,?,?,?,?,?,?,?)`);

  for (const t of list) {
    insTpl.run(String(t.id), S(t.name), S(t.lessonId), S(t.sourceId), S(t.collegeId), S(t.teacherId), S(t.templateNumber), J(t));
    bump('templates');

    const sections = Array.isArray(t.sections) ? t.sections : [];
    sections.forEach((parent, pi) => {
      // Root sections are unnamed upstream; synthesise a stable id.
      const parentId = String(parent.id || `root-${t.id}-${pi}`);
      insSec.run(parentId, String(t.id), parentOf(parent.parentId),
        S(parent.sectionName) || '新章节', N(parent.sequence), N(parent.taskType), N(parent.duration), N(parent.score),
        parent.content ? 1 : 0, S(parent.content), J(parent));
      bump('sections');

      const kids = Array.isArray(parent.children) ? parent.children : [];
      kids.forEach((c, ci) => {
        const cid = String(c.id || `${parentId}-${ci}`);
        insSec.run(cid, String(t.id), parentId,
          S(c.sectionName) || `章节${ci + 1}`, N(c.sequence), N(c.taskType), N(c.duration), N(c.score),
          c.hasContent ? 1 : 0, S(c.content), J(c));
        bump('sections');
      });
    });
  }
}

// ------------------------------------------------------------------ tasks ---
function importTasks() {
  const list = read(path.join(DATA, 'task_page.json'));
  if (!Array.isArray(list)) { console.log('  ! task_page.json 缺失'); return; }
  const ins = db.prepare(`INSERT OR REPLACE INTO tasks
    (id, number, name, templateId, teacherId, classId, duration, publishTime, limitTime, limitStartTime, limitEndTime,
     autoSubmit, exOrderRand, exOptionsOrderRand, scoreDisplay, mode, hideReport, payload)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
  for (const t of list) {
    ins.run(String(t.id), S(t.number), S(t.name), S(t.templateId), S(t.teacherId), S(t.classId), N(t.duration),
      S(t.publishTime), t.limitTime ? 1 : 0, S(t.limitStartTime), S(t.limitEndTime),
      t.autoSubmit ? 1 : 0, t.exOrderRand ? 1 : 0, t.exOptionsOrderRand ? 1 : 0,
      N(t.scoreDisplay ?? 1), N(t.mode), t.hideReport ? 1 : 0, J(t));
    bump('tasks');
  }
}

function importRecords() {
  const list = read(path.join(DATA, 'task_record.json'));
  if (!Array.isArray(list)) { console.log('  ! task_record.json 缺失'); return; }
  const ins = db.prepare(`INSERT OR REPLACE INTO task_records
    (id, taskId, studentId, templateId, studentName, studentNumber, classId, teacherId, sectionCount, sectionFinishedCount,
     score, publicScore, autoScore, duration, progress, completed, teacherComment, publishTime, completionTime, beginTime, payload)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);
  for (const r of list) {
    ins.run(String(r.id), S(r.taskId), S(r.studentId), S(r.templateId), S(r.studentName), S(r.studentNumber),
      S(r.classId), S(r.teacherId), N(r.sectionCount), N(r.sectionFinishedCount),
      N(r.score), r.publicScore === null || r.publicScore === undefined ? null : N(r.publicScore), N(r.autoScore),
      N(r.duration), N(r.progress), r.completed ? 1 : 0, r.teacherCommnet ? 1 : 0,
      S(r.publishTime), S(r.completionTime), S(r.beginTime), J(r));
    bump('task_records');
  }
}

// -------------------------------------------------------------- practices ---
function importPractices() {
  const ep = read(path.join(DATA, 'emu_practice.json'));
  if (Array.isArray(ep)) {
    const ins = db.prepare('INSERT OR REPLACE INTO practices (id, kind, sectionId, targetId, name, payload) VALUES (?,?,?,?,?,?)');
    for (const e of ep) {
      ins.run(String(e.id || `emu-${Math.random().toString(16).slice(2)}`), 'emulator', S(e.sectionId), S(e.targetId), S(e.name), J(e));
      bump('practices');
    }
  }
  const deep = read(path.join(DEEP, 'emulator_practice.json'));
  if (Array.isArray(deep)) {
    const ins = db.prepare('INSERT OR REPLACE INTO practices (id, kind, sectionId, targetId, name, payload) VALUES (?,?,?,?,?,?)');
    for (const d of deep) {
      const rows = d?.data?.rows || [];
      for (const r of rows) {
        ins.run(String(r.id || `emu-${Math.random().toString(16).slice(2)}`), 'emulator', S(r.sectionId), S(d.taskId || r.targetId), S(r.remark), J(r));
        bump('practices');
      }
    }
  }
}

function importRfid() {
  const list = read(path.join(DATA, 'rfid_record.json'));
  if (!Array.isArray(list)) return;
  const ins = db.prepare('INSERT OR REPLACE INTO rfid_records (id, taskId, userId, payload, createdAt) VALUES (?,?,?,?,?)');
  for (const r of list) {
    ins.run(String(r.id || `rfid-${Math.random().toString(16).slice(2)}`), S(r.taskId), S(r.userId || r.studentId), J(r), S(r.createTime || r.createdAt));
    bump('rfid_records');
  }
}

function importLessons() {
  const params = read(path.join(DATA, 'lesson_params.json'));
  if (params) bump('lesson_params');
  const lessons = read(path.join(DEEP, 'lessons.json'));
  if (Array.isArray(lessons)) {
    const ins = db.prepare('INSERT OR REPLACE INTO lessons (id, name, payload) VALUES (?,?,?)');
    for (const l of lessons) {
      if (!l.lessonId) continue;
      ins.run(String(l.lessonId), S(l.data?.name || l.page?.rows?.[0]?.name || ''), J(l));
      bump('lessons');
    }
  }
}

console.log('[import] 数据源:', DATA);
seedUsers();
importExercises();
importTemplates();
importTasks();
importRecords();
importPractices();
importRfid();
importLessons();

console.log('\n[import] 结果:');
for (const [k, v] of Object.entries(stats)) console.log(`  ${k.padEnd(16)} ${v}`);

// Sanity summary straight from the DB.
const counts = ['users', 'classes', 'templates', 'sections', 'tasks', 'task_records', 'exercises', 'practices', 'rfid_records', 'lessons'];
console.log('\n[import] 库内实际行数:');
for (const t of counts) {
  const c = db.prepare(`SELECT COUNT(*) c FROM ${t}`).get().c;
  console.log(`  ${t.padEnd(16)} ${c}`);
}
console.log('\n[import] 完成 ->', DB_FILE);
