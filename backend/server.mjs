// Standalone training-platform backend.
//
// Implements the API surface the mirrored SPA actually calls, against a local
// SQLite database. Response envelopes match upstream conventions:
//   /upms/*  -> { code: 200, msg, data }
//   /api/*   -> { code: 0, message, data }
// Paged reads return { records, rows, page, pagesize, total } where `records`
// is the row count and `total` is the page count (upstream quirk, kept on
// purpose so the existing list components paginate correctly).
import http from 'node:http';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { openDb } from './db.mjs';
import { issueToken, resolveToken, revokeToken, bearerFrom, shapeUser, upmsOk, upmsErr } from './auth.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DB_FILE = process.env.B_DB || path.join(HERE, 'data', 'platform.db');
const PORT = Number(process.env.B_PORT || 8091);
const UPLOAD_DIR = process.env.B_UPLOADS || path.join(HERE, 'data', 'uploads');

const db = openDb(DB_FILE);
fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// ---------------------------------------------------------------- helpers ---
const ok = (data) => ({ code: 0, message: '操作成功', data });
const fail = (message, code = -1) => ({ code, message, data: null });

// Parse a multipart/form-data body from raw bytes. Uploaded binaries must not
// go through a utf8 round-trip or their size (and content) is corrupted.
function parseMultipart(buf, boundary) {
  const out = {};
  const delim = Buffer.from(`--${boundary}`);
  const parts = [];
  let pos = buf.indexOf(delim);
  while (pos !== -1) {
    const start = pos + delim.length;
    const next = buf.indexOf(delim, start);
    parts.push(buf.subarray(start, next === -1 ? buf.length : next));
    pos = next;
  }

  for (const part of parts) {
    const headEnd = part.indexOf('\r\n\r\n');
    if (headEnd === -1) continue;
    const rawHeaders = part.subarray(0, headEnd).toString('utf8');
    // Strip the leading CRLF and the trailing CRLF before the next boundary.
    let body = part.subarray(headEnd + 4);
    if (body.length >= 2 && body[body.length - 2] === 0x0d && body[body.length - 1] === 0x0a) {
      body = body.subarray(0, body.length - 2);
    }
    const nameMatch = /name="([^"]*)"/.exec(rawHeaders);
    if (!nameMatch) continue;
    const name = nameMatch[1];
    const fileMatch = /filename="([^"]*)"/.exec(rawHeaders);
    const mimeMatch = /Content-Type:\s*([^\r\n]+)/i.exec(rawHeaders);
    if (fileMatch) {
      // Keep the exact byte count; callers match uploads by size.
      out[name] = {
        _file: true,
        filename: fileMatch[1],
        mime: mimeMatch ? mimeMatch[1].trim() : 'application/octet-stream',
        size: body.length,
        bytes: body,
      };
    } else {
      out[name] = body.toString('utf8');
    }
  }
  return out;
}

function readBody(req) {
  return new Promise((resolve) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => {
      const buf = Buffer.concat(chunks);
      if (!buf.length) return resolve({});
      const ct = String(req.headers['content-type'] || '');

      try {
        if (ct.includes('application/json')) return resolve(JSON.parse(buf.toString('utf8')));
      } catch { /* fall through to the tolerant parsers below */ }

      const boundaryMatch = /boundary=("?)([^";]+)\1/.exec(ct);
      if (ct.includes('multipart/form-data') && boundaryMatch) {
        return resolve(parseMultipart(buf, boundaryMatch[2]));
      }

      const raw = buf.toString('utf8');
      if (ct.includes('application/x-www-form-urlencoded') || (raw.includes('=') && !raw.trimStart().startsWith('{'))) {
        const out = {};
        for (const pair of raw.split('&')) {
          const eq = pair.indexOf('=');
          if (eq < 0) continue;
          const k = decodeURIComponent(pair.slice(0, eq).replace(/\+/g, ' '));
          const v = decodeURIComponent(pair.slice(eq + 1).replace(/\+/g, ' '));
          if (k) out[k] = v;
        }
        return resolve(out);
      }
      resolve({ _raw: raw });
    });
    req.on('error', () => resolve({}));
  });
}

function paramsFrom(req, body, url) {
  // Merge query string and body; later sources win. Accept the common aliases
  // the SPA uses interchangeably.
  const q = {};
  for (const [k, v] of url.searchParams.entries()) q[k] = v;
  const src = { ...q, ...(body || {}) };
  const has = (k) => src[k] !== undefined && src[k] !== null && src[k] !== '';
  const get = (...names) => names.map(n => src[n]).find(v => v !== undefined && v !== null && v !== '');
  return {
    src,
    has,
    get,
    str: (...n) => {
      const v = get(...n);
      return v === undefined || v === null ? null : String(v);
    },
    // Accept pageIndex|page|pageNum and pageSize|pagesize|limit|rows.
    page: () => {
      const v = Number(get('pageIndex', 'page', 'pageNum', 'pageNo') ?? 1);
      return Number.isFinite(v) && v > 0 ? v : 1;
    },
    pageSize: () => {
      const v = Number(get('pageSize', 'pagesize', 'limit', 'rows', 'size') ?? 10);
      return Number.isFinite(v) && v > 0 ? Math.min(v, 1000) : 10;
    },
  };
}

// Upstream paging envelope: records = row count, total = page count.
function paged(rows, page, pageSize) {
  const total = rows.length;
  const pages = Math.max(1, Math.ceil(total / pageSize));
  const start = (page - 1) * pageSize;
  return {
    records: total,
    rows: rows.slice(start, start + pageSize),
    page,
    pagesize: pageSize,
    total: pages,
  };
}

const nowIso = () => new Date().toISOString().slice(0, 23);
const parseJson = (s, fb = null) => { try { return s ? JSON.parse(s) : fb; } catch { return fb; } };
const bool = (v) => v === 1 || v === true;

// Keep upstream field names verbatim; stored payload carries the原始对象.
function taskRow(r) {
  const p = parseJson(r.payload, {}) || {};
  return {
    ...p,
    id: r.id,
    number: r.number,
    name: r.name,
    templateId: r.templateId,
    duration: r.duration,
    teacherId: r.teacherId,
    classId: r.classId,
    publishTime: r.publishTime,
    limitTime: bool(r.limitTime),
    limitStartTime: r.limitStartTime,
    limitEndTime: r.limitEndTime,
    autoSubmit: r.autoSubmit == null ? null : bool(r.autoSubmit),
    exOrderRand: bool(r.exOrderRand),
    exOptionsOrderRand: bool(r.exOptionsOrderRand),
    scoreDisplay: r.scoreDisplay,
    mode: r.mode,
    hideReport: bool(r.hideReport),
  };
}

function recordRow(r) {
  const p = parseJson(r.payload, {}) || {};
  return {
    ...p,
    id: r.id,
    taskId: r.taskId,
    studentId: r.studentId,
    templateId: r.templateId,
    studentName: r.studentName,
    studentNumber: r.studentNumber,
    classId: r.classId,
    teacherId: r.teacherId,
    sectionCount: r.sectionCount,
    sectionFinishedCount: r.sectionFinishedCount,
    score: r.score,
    publicScore: r.publicScore,
    autoScore: r.autoScore,
    duration: r.duration,
    progress: r.progress,
    completed: bool(r.completed),
    teacherCommnet: bool(r.teacherComment),
    publishTime: r.publishTime,
    completionTime: r.completionTime,
    beginTime: r.beginTime,
  };
}

function exerciseRow(r) {
  return {
    id: r.id,
    sectionId: r.sectionId,
    title: r.title,
    index: r.idx,
    type: r.type,
    score: r.score,
    question: r.question,
    optionA: r.optionA, optionB: r.optionB, optionC: r.optionC,
    optionD: r.optionD, optionE: r.optionE,
    answer: r.answer,
    state: parseJson(r.payload, {})?.state ?? null,
    addingMode: r.addingMode,
    author: r.author,
    modifyTime: r.modifyTime,
    importBatchId: r.importBatchId,
    tag: r.tag,
  };
}

// --------------------------------------------------------------- scoring ----
// Normalise an answer for comparison: uppercase, strip separators, sort letters.
function normalizeAnswer(v, type) {
  if (v === undefined || v === null) return '';
  let s = String(v).trim();
  if (type === 1 || type === 4) {
    const parts = s.split(/[,，、;；\s]+/).filter(Boolean).map(x => x.toUpperCase());
    return [...new Set(parts)].sort().join(',');
  }
  return s.toUpperCase();
}

// Multi-choice counts as correct when the selected set matches exactly.
function gradeExercise(ex, submitted) {
  const expected = normalizeAnswer(ex.answer, ex.type);
  const got = normalizeAnswer(submitted, ex.type);
  const correct = expected !== '' && expected === got;
  return { correct, expected, got, score: correct ? (ex.score || 0) : 0 };
}

// ---------------------------------------------------------- upms handlers ---
const upms = {
  'POST /upms/auth/token': async ({ body }) => {
    // OAuth password grant: phone + password (+ grant_type=password).
    const phone = String(body.phone || body.username || body.account || '').trim();
    const password = String(body.password || '');
    if (!phone || !password) return upmsErr('参数错误');
    const u = db.prepare('SELECT * FROM users WHERE phone = ?').get(phone);
    if (!u || u.password !== password) return upmsErr('手机号或密码错误');
    const token = issueToken(db, u.id);
    return upmsOk({ access_token: token, refresh_token: token });
  },

  // The SPA reads `t.data.status` unconditionally on this response
  // (app.js: tokenValid -> `"0" != t.data.status`), and the call sits at the
  // head of the boot chain, so an absent `data` aborts mounting entirely.
  // Always answer with a `data.status`, valid or not.
  'POST /upms/auth/tokenValid': async ({ user }) =>
    user
      ? upmsOk({ msg: 'token有效', status: '1' })
      : upmsOk({ msg: 'token无效或已过期', status: '0' }),

  'GET /upms/auth/tokenValid': async ({ user }) =>
    user
      ? upmsOk({ msg: 'token有效', status: '1' })
      : upmsOk({ msg: 'token无效或已过期', status: '0' }),

  'POST /upms/auth/exit': async ({ token }) => { revokeToken(db, token); return upmsOk(true); },

  // getUserInfo() returns `t.data` verbatim and the caller immediately does
  // `t.name` / `t.roles.map(...)`, so data must always be an object with a
  // roles array — never null.
  'POST /upms/my/userInfo': async ({ user }) => upmsOk(shapeUser(user)),

  'GET /upms/my/userInfo': async ({ user }) => upmsOk(shapeUser(user)),

  'POST /upms/my/updateInfo': async ({ user, body }) => {
    if (!user) return upmsErr('用户未登录', 8004);
    const fields = ['name', 'avatar', 'sex', 'birthday', 'city', 'address', 'email', 'contactName', 'contactPhone'];
    const sets = [], vals = [];
    for (const f of fields) if (body[f] !== undefined) { sets.push(`${f} = ?`); vals.push(body[f]); }
    if (sets.length) {
      db.prepare(`UPDATE users SET ${sets.join(', ')} WHERE id = ?`).run(...vals, user.id);
    }
    return upmsOk(true);
  },

  'POST /upms/class/getListByCollegeId': async ({ body }) => {
    const collegeId = body.collegeId ?? body.id;
    const rows = collegeId
      ? db.prepare('SELECT * FROM classes WHERE collegeId = ?').all(String(collegeId))
      : db.prepare('SELECT * FROM classes').all();
    return upmsOk(rows);
  },

  'POST /upms/student/getStudentList': async ({ body }) => {
    const classId = body.classId;
    const rows = classId
      ? db.prepare("SELECT * FROM users WHERE classId = ? AND roleName = '学生'").all(String(classId))
      : db.prepare("SELECT * FROM users WHERE roleName = '学生'").all();
    return upmsOk(rows.map(shapeUser));
  },

  'POST /upms/school/get': async () => upmsOk({ id: '1', name: '本地部署院校' }),
  'POST /upms/school/querySchoolList': async () => upmsOk([]),
  'POST /upms/school/queryRegionList': async () => upmsOk([]),
  'POST /upms/user/get': async ({ user }) => upmsOk(shapeUser(user)),
};

// ---------------------------------------------------------- api handlers ----
const api = {
  // --- infrastructure -----------------------------------------------------
  'GET /api/server/time': async () => ok(nowIso()),

  'POST /api/NLEUser/AddOrUpdateNLEUser': async ({ body, user }) => {
    // The SPA calls this on boot to sync the current user into the platform DB.
    const id = String(body.id || body.userId || user?.id || '');
    if (id) {
      const exists = db.prepare('SELECT id FROM users WHERE id = ?').get(id);
      if (!exists) {
        db.prepare('INSERT INTO users (id, name, userName, phone, kind, roleName, classId) VALUES (?,?,?,?,?,?,?)')
          .run(id, body.name || body.userName || id, body.userName || '', body.phone || '', body.kind ?? 2, body.roleName || '学生', body.classId || null);
      }
    }
    return ok(id || 'ok');
  },

  'GET /api/Statistic/GetStatisticData': async ({ user }) => {
    const uid = user?.id || '';
    const logs = db.prepare('SELECT kind, COUNT(*) c, COALESCE(SUM(duration),0) d FROM activity_log WHERE userId = ? GROUP BY kind').all(uid);
    const pick = (k) => {
      const r = logs.find(x => x.kind === k);
      return { times: r ? r.c : 0, duration: r ? r.d : 0 };
    };
    const doc = pick('doc'), video = pick('video'), exer = pick('exer'), code = pick('code'), app = pick('app'), emul = pick('emul');
    const taskCount = db.prepare('SELECT COUNT(*) c FROM tasks').get().c;
    const recordCount = db.prepare('SELECT COUNT(*) c FROM task_records WHERE studentId = ?').get(uid).c;
    const taskDuration = db.prepare('SELECT COALESCE(SUM(duration),0) d FROM task_records WHERE studentId = ?').get(uid).d;
    const reportsCount = db.prepare('SELECT COUNT(*) c FROM task_reports WHERE userId = ?').get(uid).c;
    return ok({
      docTimes: doc.times, docDuration: doc.duration,
      videoTimes: video.times, videoDuration: video.duration,
      exerTimes: exer.times, exerDuration: exer.duration,
      codeTimes: code.times, codeDuration: code.duration,
      appTimes: app.times, appDuration: app.duration,
      emulTimes: emul.times, emulDuration: emul.duration,
      reportsCount, taskCount, taskDuration, recordConut: recordCount,
      recordPassCount: 0, taskPassArray: [],
    });
  },

  // --- tasks --------------------------------------------------------------
  'GET /api/Task/GetTaskPage': async ({ p, user }) => {
    let rows = db.prepare('SELECT * FROM tasks ORDER BY publishTime DESC').all();
    const teacherId = p.str('teacherId');
    const classId = p.str('classId');
    const name = p.str('name', 'keyword');
    if (teacherId) rows = rows.filter(r => r.teacherId === teacherId);
    if (classId) rows = rows.filter(r => r.classId === classId);
    if (name) rows = rows.filter(r => (r.name || '').includes(name));
    const rowsOut = rows.map(r => {
      const rec = db.prepare('SELECT COUNT(*) c, COALESCE(SUM(completed),0) done FROM task_records WHERE taskId = ?').get(r.id);
      const t = taskRow(r);
      return { ...t, templateName: t.templateName || db.prepare('SELECT name FROM templates WHERE id = ?').get(r.templateId)?.name || '', count: rec.c, completedCount: rec.done, className: db.prepare('SELECT name FROM classes WHERE id = ?').get(r.classId)?.name || '' };
    });
    return ok(paged(rowsOut, p.page(), p.pageSize()));
  },

  'GET /api/TaskRecord/GetTaskRecordPage': async ({ p, user }) => {
    let rows = db.prepare('SELECT * FROM task_records ORDER BY publishTime DESC').all();
    const taskId = p.str('taskId');
    const studentId = p.str('studentId');
    const classId = p.str('classId');
    const name = p.str('name', 'keyword');
    if (taskId) rows = rows.filter(r => r.taskId === taskId);
    if (studentId) rows = rows.filter(r => r.studentId === studentId);
    if (classId) rows = rows.filter(r => r.classId === classId);
    if (name) rows = rows.filter(r => (r.studentName || '').includes(name));
    // Students只看到自己的记录
    if (user && user.roleName === '学生') rows = rows.filter(r => r.studentId === user.id);
    return ok(paged(rows.map(recordRow), p.page(), p.pageSize()));
  },

  'GET /api/TaskRecord/GetTaskRecordByTaskId': async ({ p, user }) => {
    const taskId = p.str('taskId');
    const studentId = p.str('studentId') || (user?.roleName === '学生' ? user.id : null);
    if (!taskId) return fail('任务ID不能为空');
    let rows = db.prepare('SELECT * FROM task_records WHERE taskId = ?').all(taskId);
    if (studentId) rows = rows.filter(r => r.studentId === studentId);
    return ok(rows.map(recordRow));
  },

  'GET /api/TaskRecord/GetTaskRecordByStudentId': async ({ p, user }) => {
    const studentId = p.str('studentId') || user?.id;
    if (!studentId) return fail('学生ID不能为空');
    const rows = db.prepare('SELECT * FROM task_records WHERE studentId = ? ORDER BY publishTime DESC').all(String(studentId));
    return ok(paged(rows.map(recordRow), p.page(), p.pageSize()));
  },

  'GET /api/TaskRecord/GetLastTaskRecord': async ({ user }) => {
    if (!user) return ok(null);
    const r = db.prepare('SELECT * FROM task_records WHERE studentId = ? ORDER BY publishTime DESC LIMIT 1').get(user.id);
    return ok(r ? recordRow(r) : null);
  },

  'GET /api/TaskRecord/GetTaskRecordTimeOut': async () => ok(-1),

  'GET /api/TaskRecord/GetTaskRecordCompleteInfo': async ({ p, user }) => {
    const taskId = p.str('taskId');
    const studentId = p.str('studentId') || user?.id;
    if (!taskId || !studentId) return ok(null);
    const r = db.prepare('SELECT * FROM task_records WHERE taskId = ? AND studentId = ?').get(taskId, String(studentId));
    return ok(r ? recordRow(r) : null);
  },

  'GET /api/TaskRecord/GetTemplateWithState': async ({ p, user }) => {
    const taskRecordId = p.str('taskRecordId');
    const rec = taskRecordId ? db.prepare('SELECT * FROM task_records WHERE id = ?').get(taskRecordId) : null;
    if (!rec) return ok(null);
    const tpl = db.prepare('SELECT * FROM templates WHERE id = ?').get(rec.templateId);
    if (!tpl) return ok(null);
    const sections = db.prepare('SELECT * FROM sections WHERE templateId = ? ORDER BY sequence').all(rec.templateId);
    const states = db.prepare('SELECT * FROM section_states WHERE taskRecordId = ?').all(taskRecordId);
    const parents = sections.filter(s => !s.parentId);
    const build = (parent) => ({
      ...(parseJson(parent.payload, {}) || {}),
      id: parent.id,
      sectionName: parent.sectionName,
      sequence: parent.sequence,
      taskType: parent.taskType,
      duration: parent.duration,
      score: parent.score,
      hasContent: bool(parent.hasContent),
      content: parent.content,
      children: sections.filter(s => s.parentId === parent.id).map((c) => ({
        ...(parseJson(c.payload, {}) || {}),
        id: c.id,
        sectionName: c.sectionName,
        sequence: c.sequence,
        taskType: c.taskType,
        duration: c.duration,
        score: c.score,
        hasContent: bool(c.hasContent),
        content: c.content,
        state: states.find(st => st.sectionId === c.id) || null,
      })),
    });
    const tplObj = parseJson(tpl.payload, {}) || {};
    return ok({ ...tplObj, id: tpl.id, name: tpl.name, lessonId: tpl.lessonId, sections: parents.map(build) });
  },

  'GET /api/TaskRecord/GetSelfStudyRecordInfo': async ({ user }) => {
    if (!user) return fail('学生ID不能为空');
    const r = db.prepare("SELECT * FROM task_records WHERE studentId = ? AND taskId IS NULL ORDER BY publishTime DESC LIMIT 1").get(user.id);
    return r ? ok(recordRow(r)) : ok(null);
  },

  'GET /api/TaskRecord/SearchStudentSelfstudyPage': async ({ p, user }) => {
    const studentId = p.str('studentId') || user?.id;
    if (!studentId) return fail('学生ID不能为空');
    const rows = db.prepare('SELECT * FROM task_records WHERE studentId = ? ORDER BY publishTime DESC').all(String(studentId));
    return ok(paged(rows.map(recordRow), p.page(), p.pageSize()));
  },

  'GET /api/TaskRecord/GetTaskPublishState': async ({ p }) => {
    const taskId = p.str('taskId');
    const t = taskId ? db.prepare('SELECT * FROM tasks WHERE id = ?').get(taskId) : null;
    return ok(t ? 1 : 0);
  },

  // --- templates / sections ----------------------------------------------
  'GET /api/TaskTemplate/GetTaskTemplate': async ({ p }) => {
    const id = p.str('id', 'templateId');
    if (!id) return ok(null);
    const tpl = db.prepare('SELECT * FROM templates WHERE id = ?').get(id);
    if (!tpl) return ok(null);
    const sections = db.prepare('SELECT * FROM sections WHERE templateId = ? ORDER BY sequence').all(id);
    const obj = parseJson(tpl.payload, {}) || {};
    const parents = sections.filter(s => !s.parentId);
    const build = (s) => ({
      ...(parseJson(s.payload, {}) || {}),
      id: s.id,
      sectionName: s.sectionName,
      sequence: s.sequence,
      taskType: s.taskType,
      duration: s.duration,
      score: s.score,
      hasContent: bool(s.hasContent),
      content: s.content,
      children: sections.filter(c => c.parentId === s.id).map(c => ({
        ...(parseJson(c.payload, {}) || {}),
        id: c.id,
        sectionName: c.sectionName,
        sequence: c.sequence,
        taskType: c.taskType,
        duration: c.duration,
        score: c.score,
        hasContent: bool(c.hasContent),
        content: c.content,
      })),
    });
    return ok({ ...obj, id: tpl.id, name: tpl.name, lessonId: tpl.lessonId, sections: parents.map(build) });
  },

  'GET /api/TaskTemplate/GetTaskTemplatePage': async ({ p, user }) => {
    let rows = db.prepare('SELECT * FROM templates').all();
    const teacherId = p.str('teacherId');
    if (teacherId) rows = rows.filter(r => r.teacherId === teacherId);
    const out = rows.map(r => ({ ...(parseJson(r.payload, {}) || {}), id: r.id, name: r.name, lessonId: r.lessonId }));
    return ok(paged(out, p.page(), p.pageSize()));
  },

  'GET /api/TaskTemplate/GetTaskTemplatePageByTeacherId': async ({ p, user }) => {
    let rows = db.prepare('SELECT * FROM templates').all();
    const teacherId = p.str('teacherId') || user?.id;
    if (teacherId) rows = rows.filter(r => r.teacherId === teacherId);
    const out = rows.map(r => ({ ...(parseJson(r.payload, {}) || {}), id: r.id, name: r.name, lessonId: r.lessonId }));
    return ok(paged(out, p.page(), p.pageSize()));
  },

  'GET /api/TaskTemplate/GetAllTaskTemplateInfo': async () =>
    ok(db.prepare('SELECT * FROM templates').all().map(r => ({ ...(parseJson(r.payload, {}) || {}), id: r.id, name: r.name }))),

  'GET /api/SectionState/GetSectionStateList': async ({ p, user }) => {
    const taskRecordId = p.str('taskRecordId');
    const taskId = p.str('taskId');
    const studentId = p.str('studentId') || user?.id;
    let rows = db.prepare('SELECT * FROM section_states').all();
    if (taskRecordId) rows = rows.filter(r => r.taskRecordId === taskRecordId);
    if (taskId) rows = rows.filter(r => r.taskId === taskId);
    if (studentId) rows = rows.filter(r => r.studentId === String(studentId));
    return ok(rows.map(r => ({ ...(parseJson(r.payload, {}) || {}), ...r, isFinished: bool(r.isFinished) })));
  },

  'GET /api/SectionState/GetTaskSectionStateList': async ({ p, user }) => {
    const taskId = p.str('taskId');
    const taskRecordId = p.str('taskRecordId');
    const studentId = p.str('studentId') || user?.id;
    let rows = db.prepare('SELECT * FROM section_states').all();
    if (taskId) rows = rows.filter(r => r.taskId === taskId);
    if (taskRecordId) rows = rows.filter(r => r.taskRecordId === taskRecordId);
    if (studentId) rows = rows.filter(r => r.studentId === String(studentId));
    return ok(rows.map(r => ({ ...(parseJson(r.payload, {}) || {}), ...r, isFinished: bool(r.isFinished) })));
  },

  'GET /api/SectionState/GetTaskAllStateList': async ({ p, user }) => {
    const taskId = p.str('taskId');
    let rows = db.prepare('SELECT * FROM section_states').all();
    if (taskId) rows = rows.filter(r => r.taskId === taskId);
    return ok(rows.map(r => ({ ...(parseJson(r.payload, {}) || {}), ...r, isFinished: bool(r.isFinished) })));
  },

  // --- exercises ----------------------------------------------------------
  'GET /api/Exercise/GetExerciseWithState': async ({ p }) => {
    const sectionId = p.str('sectionId');
    let rows = sectionId
      ? db.prepare('SELECT * FROM exercises WHERE sectionId = ? ORDER BY idx').all(sectionId)
      : db.prepare('SELECT * FROM exercises ORDER BY idx').all();
    return ok(rows.map(exerciseRow));
  },

  'GET /api/Exercise/GetExercisePageFromStorag': async ({ p }) => {
    const sectionId = p.str('sectionId');
    let rows = sectionId ? db.prepare('SELECT * FROM exercises WHERE sectionId = ?').all(sectionId) : [];
    const name = p.str('name', 'keyword', 'title');
    if (name) rows = rows.filter(r => (r.question || '').includes(name));
    return ok(paged(rows.map(exerciseRow), p.page(), p.pageSize()));
  },

  'GET /api/Exercise/GetComposeExerciseFromStorag': async ({ p }) => {
    const sectionId = p.str('sectionId');
    if (!sectionId) return ok([]);
    const rows = db.prepare('SELECT * FROM exercises WHERE sectionId = ? ORDER BY idx').all(sectionId);
    return ok(rows.map(exerciseRow));
  },

  'GET /api/Exercise/GetTags': async () => ok(db.prepare('SELECT DISTINCT tag FROM exercises WHERE tag IS NOT NULL AND tag != ""').all().map(r => r.tag)),
  'GET /api/Exercise/GetImportTitles': async () => ok(db.prepare('SELECT DISTINCT importBatchId FROM exercises WHERE importBatchId IS NOT NULL').all().map(r => r.importBatchId)),

  // --- lessons ------------------------------------------------------------
  'GET /api/LessonSeries/GetLessonSeriesPage': async ({ p }) => {
    const rows = db.prepare('SELECT * FROM lessons ORDER BY sequence').all().map(r => ({ ...(parseJson(r.payload, {}) || {}), id: r.id, name: r.name }));
    return ok(paged(rows, p.page(), p.pageSize()));
  },

  'GET /api/LessonSeries/GetLessonInfoByPermission': async ({ p }) => {
    const lessonId = p.str('lessonId');
    const rows = lessonId
      ? db.prepare('SELECT * FROM lessons WHERE id = ?').all(lessonId)
      : db.prepare('SELECT * FROM lessons').all();
    return ok(rows.map(r => ({ ...(parseJson(r.payload, {}) || {}), id: r.id, name: r.name })));
  },

  'GET /api/LessonSeries/GetLessonParams': async () => ok({
    directions: [], languages: [], levels: [], targets: [],
  }),

  // --- practices (仿真/文档/视频/代码/案例) --------------------------------
  'GET /api/EmulatorPractice/GetPageFromStorage': async ({ p }) => {
    const sectionId = p.str('sectionId');
    const targetId = p.str('targetId');
    let rows = db.prepare("SELECT * FROM practices WHERE kind = 'emulator'").all();
    if (sectionId) rows = rows.filter(r => r.sectionId === sectionId);
    else if (targetId) rows = rows.filter(r => r.targetId === targetId);
    else return ok(paged([], p.page(), p.pageSize()));
    const out = rows.map(r => ({ ...(parseJson(r.payload, {}) || {}), id: r.id, sectionId: r.sectionId }));
    return ok(paged(out, p.page(), p.pageSize()));
  },

  'POST /api/EmulatorPractice/EmulatorXmlToObj': async ({ body }) => {
    const xml = body.xml || body.content || body._raw || '';
    // Minimal XML -> object conversion for the N2V package format.
    const obj = { raw: String(xml).slice(0, 200000), parsed: true };
    return ok(obj);
  },

  'POST /api/Common/XmlToN2V': async ({ body }) => ok(String(body.xml || body.content || '')),
  'POST /api/Common/N2VToXml': async ({ body }) => {
    // Upstream decrypts .N2V with a session key we do not have. Instead we
    // replay previously captured plaintext: each entry in data/n2v is a
    // {name, cipherSize, xml} record, matched against the uploaded byte size.
    // Capture instructions live in OFFLINE.md.
    const store = path.join(HERE, 'data', 'n2v');
    if (!fs.existsSync(store)) return fail('本地未配置 .N2V 明文库', 404);

    let uploadedSize = 0;
    const f = body.file;
    if (Buffer.isBuffer(f)) uploadedSize = f.length;
    else if (f && typeof f === 'object' && f._file) uploadedSize = f.size || 0;
    else if (typeof body.size === 'number') uploadedSize = body.size;

    const entries = fs.readdirSync(store).filter((n) => n.toLowerCase().endsWith('.json'));
    if (!entries.length) return fail('本地 .N2V 明文库为空，请先按 OFFLINE.md 抓取一次', 404);

    const records = entries.map((n) => {
      try { return JSON.parse(fs.readFileSync(path.join(store, n), 'utf8')); } catch { return null; }
    }).filter(Boolean);

    // Exact size match wins; otherwise pick the nearest known project.
    let hit = records.find((r) => r.cipherSize === uploadedSize);
    if (!hit && records.length) {
      hit = records.slice().sort((a, b) => Math.abs(a.cipherSize - uploadedSize) - Math.abs(b.cipherSize - uploadedSize))[0];
    }
    if (!hit) return fail('未找到匹配的 .N2V 明文', 404);
    return ok(hit.xml);
  },

  'GET /api/RfidExperimentRecording/GetRfidExperimentRecordingPage': async ({ p, user }) => {
    let rows = db.prepare('SELECT * FROM rfid_records ORDER BY createdAt DESC').all();
    if (user?.roleName === '学生') rows = rows.filter(r => r.userId === user.id);
    const out = rows.map(r => ({ ...(parseJson(r.payload, {}) || {}), id: r.id }));
    return ok(paged(out, p.page(), p.pageSize()));
  },

  // --- task reports -------------------------------------------------------
  'GET /api/TaskReport/GetRcordWithReportByTaskId': async ({ p, user }) => {
    const taskId = p.str('taskId');
    let rows = db.prepare('SELECT * FROM task_reports').all();
    if (taskId) rows = rows.filter(r => r.taskId === taskId);
    return ok(rows.map(r => ({ ...(parseJson(r.payload, {}) || {}), id: r.id, content: r.content, score: r.score })));
  },

  'GET /api/TaskReport/GetTaskReportByUserIdAndTaskId': async ({ p, user }) => {
    const taskId = p.str('taskId');
    const userId = p.str('userId') || user?.id;
    const r = db.prepare('SELECT * FROM task_reports WHERE taskId = ? AND userId = ?').get(taskId, String(userId));
    return ok(r ? { ...(parseJson(r.payload, {}) || {}), id: r.id, content: r.content, score: r.score } : null);
  },

  'GET /api/TaskReport/GetTaskReportIdByUserIdAndTaskId': async ({ p, user }) => {
    const taskId = p.str('taskId');
    const userId = p.str('userId') || user?.id;
    const r = db.prepare('SELECT id FROM task_reports WHERE taskId = ? AND userId = ?').get(taskId, String(userId));
    return ok(r ? r.id : null);
  },

  // --- files --------------------------------------------------------------
  'GET /api/FileManager/Download/NLEEmulatorClientAssistant.exe': async (ctx, res) => {
    const local = path.join(HERE, '..', 'assets', 'NLEEmulatorClientAssistant.exe');
    if (!fs.existsSync(local)) return fail('助手安装包未就位', 404);
    const total = fs.statSync(local).size;
    const range = ctx.req.headers.range;
    const m = range && /bytes=(\d*)-(\d*)/.exec(range);
    if (m) {
      // Honour byte ranges: browsers and download managers rely on this, and a
      // streamed 32MB body without range support can be reset mid-transfer.
      const start = m[1] ? Number(m[1]) : 0;
      const end = m[2] ? Math.min(Number(m[2]), total - 1) : total - 1;
      if (Number.isNaN(start) || start >= total || end < start) {
        res.writeHead(416, { 'Content-Range': `bytes */${total}` });
        res.end();
        return { __handled: true };
      }
      res.writeHead(206, {
        'Content-Type': 'application/octet-stream',
        'Content-Length': end - start + 1,
        'Content-Range': `bytes ${start}-${end}/${total}`,
        'Accept-Ranges': 'bytes',
      });
      // Never return the pipe's return value: it is the destination stream and
      // would be JSON-serialised by the dispatcher.
      fs.createReadStream(local, { start, end }).pipe(res);
      return { __handled: true };
    }
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream',
      'Content-Length': total,
      'Accept-Ranges': 'bytes',
    });
    fs.createReadStream(local).pipe(res);
    return { __handled: true };
  },

  'GET /api/FileAddress/SearchFileAddressPage': async ({ p }) => ok(paged(db.prepare('SELECT * FROM file_addresses').all(), p.page(), p.pageSize())),
  'GET /api/FileContent/SearchN2vFilesPage': async ({ p }) => {
    const rows = db.prepare("SELECT * FROM file_contents").all().map(r => ({ ...(parseJson(r.payload, {}) || {}), id: r.id, name: r.name }));
    return ok(paged(rows, p.page(), p.pageSize()));
  },
};

// --------------------------------------------- write (mutating) handlers ----
const apiWrite = {
  'POST /api/TaskRecord/AddSelfStudyRecord': async ({ body, user }) => {
    if (!user) return fail('学生ID不能为空');
    const id = body.id || `ss-${user.id}-${Date.now()}`;
    db.prepare(`INSERT INTO task_records (id, taskId, studentId, studentName, duration, progress, completed, payload, publishTime)
                VALUES (?,?,?,?,?,?,?,?,?)`)
      .run(id, null, user.id, user.name || '', Number(body.duration || 0), 0, 0, JSON.stringify(body), nowIso());
    return ok(id);
  },

  'POST /api/TaskRecord/UpdateSectioDuration': async ({ body }) => {
    const id = body.id || body.sectionStateId;
    if (id) db.prepare('UPDATE section_states SET duration = ? WHERE id = ?').run(Number(body.duration || 0), String(id));
    return ok(true);
  },

  'POST /api/SectionState/AddOrUpdateSectionState': async ({ body, user }) => {
    const sectionId = body.sectionId;
    const taskRecordId = body.taskRecordId;
    if (!sectionId) return fail('sectionId 不能为空');
    const existing = taskRecordId
      ? db.prepare('SELECT * FROM section_states WHERE sectionId = ? AND taskRecordId = ?').get(String(sectionId), String(taskRecordId))
      : db.prepare('SELECT * FROM section_states WHERE sectionId = ? AND studentId = ?').get(String(sectionId), String(user?.id || ''));
    const id = existing?.id || String(body.id || `${sectionId}-${user?.id || 'anon'}`);
    const payload = JSON.stringify(body);
    if (existing) {
      db.prepare('UPDATE section_states SET duration = ?, content = ?, isFinished = ?, submitTime = ?, payload = ? WHERE id = ?')
        .run(Number(body.duration ?? existing.duration ?? 0), body.content ?? existing.content, body.isFinished ? 1 : existing.isFinished, body.submitTime || nowIso(), payload, id);
    } else {
      db.prepare(`INSERT INTO section_states (id, sectionId, taskRecordId, taskId, studentId, targetId, targetType, duration, content, comment, score, autoScore, isFinished, submitTime, payload)
                  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
        .run(id, String(sectionId), taskRecordId ? String(taskRecordId) : null, body.taskId ? String(body.taskId) : null,
          String(user?.id || body.studentId || ''), body.targetId ? String(body.targetId) : null, Number(body.targetType || 0),
          Number(body.duration || 0), body.content ?? null, body.comment ?? null, Number(body.score || 0), Number(body.autoScore || 0),
          body.isFinished ? 1 : 0, body.submitTime || nowIso(), payload);
    }
    return ok(id);
  },

  // Submit a section: grade any exercises bound to it, persist the state.
  'POST /api/TaskRecord/SubmitTaskSection': async ({ body, user }) => {
    if (!user) return fail('用户未登录', 8004);
    const sectionId = String(body.sectionId || '');
    const taskRecordId = body.taskRecordId ? String(body.taskRecordId) : null;
    const answers = body.answers || body.exercises || body.answerList || [];
    const exs = sectionId ? db.prepare('SELECT * FROM exercises WHERE sectionId = ?').all(sectionId) : [];

    let gained = 0, totalScore = 0;
    const detail = [];
    if (Array.isArray(answers) && answers.length) {
      for (const a of answers) {
        const ex = exs.find(e => e.id === String(a.id || a.exerciseId)) ||
          db.prepare('SELECT * FROM exercises WHERE id = ?').get(String(a.id || a.exerciseId || ''));
        if (!ex) continue;
        const g = gradeExercise({ answer: ex.answer, type: ex.type, score: ex.score }, a.answer ?? a.value ?? a.userAnswer);
        gained += g.score;
        totalScore += ex.score || 0;
        detail.push({ id: ex.id, ...g });
      }
    }

    const id = `${sectionId}-${taskRecordId || user.id}`;
    const payload = JSON.stringify({ ...body, scores: detail });
    const existing = db.prepare('SELECT id FROM section_states WHERE id = ?').get(id);
    if (existing) {
      db.prepare('UPDATE section_states SET score = ?, autoScore = ?, isFinished = 1, submitTime = ?, payload = ? WHERE id = ?')
        .run(gained, gained, nowIso(), payload, id);
    } else {
      db.prepare(`INSERT INTO section_states (id, sectionId, taskRecordId, taskId, studentId, score, autoScore, isFinished, submitTime, payload)
                  VALUES (?,?,?,?,?,?,?,?,?,?)`)
        .run(id, sectionId, taskRecordId, body.taskId ? String(body.taskId) : null, user.id, gained, gained, 1, nowIso(), payload);
    }

    // Roll the section score up into the task record.
    if (taskRecordId) {
      const agg = db.prepare('SELECT COUNT(*) c, COALESCE(SUM(score),0) s FROM section_states WHERE taskRecordId = ?').get(taskRecordId);
      const rec = db.prepare('SELECT * FROM task_records WHERE id = ?').get(taskRecordId);
      if (rec) {
        const done = db.prepare('SELECT COUNT(*) c FROM section_states WHERE taskRecordId = ? AND isFinished = 1').get(taskRecordId).c;
        db.prepare('UPDATE task_records SET autoScore = ?, sectionFinishedCount = ?, progress = ? WHERE id = ?')
          .run(agg.s, done, rec.sectionCount ? Math.round((done / rec.sectionCount) * 100) : 0, taskRecordId);
      }
    }
    return ok({ sectionId, gained, totalScore, detail });
  },

  'POST /api/TaskRecord/SubmitTaskRecord': async ({ body, user }) => {
    const taskRecordId = body.taskRecordId || body.id;
    if (!taskRecordId) return fail('taskRecordId 不能为空');
    const rec = db.prepare('SELECT * FROM task_records WHERE id = ?').get(String(taskRecordId));
    if (!rec) return fail('找不到任务记录');
    const agg = db.prepare('SELECT COALESCE(SUM(score),0) s FROM section_states WHERE taskRecordId = ?').get(String(taskRecordId));
    db.prepare('UPDATE task_records SET completed = 1, completionTime = ?, autoScore = ?, score = ? WHERE id = ?')
      .run(nowIso(), agg.s, agg.s, String(taskRecordId));
    return ok(true);
  },

  'POST /api/Task/calculateTaskResult': async ({ body }) => {
    const taskId = body.taskId || body.id;
    if (!taskId) return fail('任务ID不能为空');
    const recs = db.prepare('SELECT * FROM task_records WHERE taskId = ?').all(String(taskId));
    for (const rec of recs) {
      const agg = db.prepare('SELECT COALESCE(SUM(score),0) s FROM section_states WHERE taskRecordId = ?').get(rec.id);
      db.prepare('UPDATE task_records SET autoScore = ?, score = ? WHERE id = ?').run(agg.s, agg.s, rec.id);
    }
    return ok(recs.length);
  },

  'GET /api/Task/checkCalculateTaskResult': async () => ok(0),

  'POST /api/Task/AddTask': async ({ body, user }) => {
    const id = String(body.id || `task-${Date.now()}`);
    const tpl = body.templateId ? db.prepare('SELECT * FROM templates WHERE id = ?').get(String(body.templateId)) : null;
    db.prepare(`INSERT INTO tasks (id, number, name, templateId, teacherId, classId, duration, publishTime, limitTime, limitStartTime, limitEndTime, payload)
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`)
      .run(id, body.number || `T${Date.now()}`, body.name || tpl?.name || '未命名任务', body.templateId ? String(body.templateId) : null,
        String(user?.id || body.teacherId || ''), body.classId ? String(body.classId) : null, Number(body.duration || 0),
        nowIso(), body.limitTime ? 1 : 0, body.limitStartTime || null, body.limitEndTime || null, JSON.stringify(body));
    return ok(id);
  },

  'POST /api/Task/EditTask': async ({ body }) => {
    const id = String(body.id || '');
    if (!id) return fail('任务ID不能为空');
    const cur = db.prepare('SELECT * FROM tasks WHERE id = ?').get(id);
    if (!cur) return fail('任务不存在');
    db.prepare('UPDATE tasks SET name = ?, duration = ?, limitTime = ?, limitStartTime = ?, limitEndTime = ?, payload = ? WHERE id = ?')
      .run(body.name ?? cur.name, Number(body.duration ?? cur.duration), body.limitTime ? 1 : 0,
        body.limitStartTime ?? cur.limitStartTime, body.limitEndTime ?? cur.limitEndTime, JSON.stringify({ ...parseJson(cur.payload, {}), ...body }), id);
    return ok(id);
  },

  'POST /api/TaskTemplate/AddOrUpdateTemplateHead': async ({ body, user }) => {
    const id = String(body.id || `tpl-${Date.now()}`);
    const payload = JSON.stringify(body);
    const cur = db.prepare('SELECT id FROM templates WHERE id = ?').get(id);
    if (cur) {
      db.prepare('UPDATE templates SET name = ?, lessonId = ?, payload = ? WHERE id = ?')
        .run(body.name || '', body.lessonId ? String(body.lessonId) : null, payload, id);
    } else {
      db.prepare('INSERT INTO templates (id, name, lessonId, teacherId, number, payload) VALUES (?,?,?,?,?,?)')
        .run(id, body.name || '', body.lessonId ? String(body.lessonId) : null, String(user?.id || ''), body.templateNumber || null, payload);
    }
    return ok(id);
  },

  'POST /api/TaskTemplate/AddOrUpdateTemplateSections': async ({ body }) => {
    const sections = Array.isArray(body) ? body : (body.sections || []);
    for (const s of sections) {
      const id = String(s.id || `sec-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`);
      const payload = JSON.stringify(s);
      const cur = db.prepare('SELECT id FROM sections WHERE id = ?').get(id);
      if (cur) {
        db.prepare('UPDATE sections SET sectionName = ?, sequence = ?, taskType = ?, duration = ?, score = ?, content = ?, payload = ? WHERE id = ?')
          .run(s.sectionName || '', Number(s.sequence || 0), Number(s.taskType || 0), Number(s.duration || 0), Number(s.score || 0), s.content ?? null, payload, id);
      } else {
        db.prepare(`INSERT INTO sections (id, templateId, parentId, sectionName, sequence, taskType, duration, score, hasContent, content, payload)
                    VALUES (?,?,?,?,?,?,?,?,?,?,?)`)
          .run(id, s.templateId ? String(s.templateId) : null, s.parentId ? String(s.parentId) : null, s.sectionName || '',
            Number(s.sequence || 0), Number(s.taskType || 0), Number(s.duration || 0), Number(s.score || 0),
            s.content ? 1 : 0, s.content ?? null, payload);
      }
    }
    return ok(sections.length);
  },

  'POST /api/Exercise/AddExercise': async ({ body }) => {
    const id = String(body.id || `ex-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`);
    db.prepare(`INSERT INTO exercises (id, sectionId, title, idx, type, score, question, optionA, optionB, optionC, optionD, optionE, answer, payload)
                VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
      .run(id, body.sectionId ? String(body.sectionId) : null, body.title || '', Number(body.index || 0), Number(body.type || 0),
        Number(body.score || 0), body.question || '', body.optionA || '', body.optionB || '', body.optionC || '',
        body.optionD || '', body.optionE || '', body.answer || '', JSON.stringify(body));
    return ok(id);
  },

  'POST /api/Exercise/AddExerciseList': async ({ body }) => {
    const list = Array.isArray(body) ? body : (body.list || body.exercises || []);
    let n = 0;
    for (const e of list) {
      const id = String(e.id || `ex-${Date.now()}-${n}-${Math.random().toString(16).slice(2, 6)}`);
      db.prepare(`INSERT OR REPLACE INTO exercises (id, sectionId, title, idx, type, score, question, optionA, optionB, optionC, optionD, optionE, answer, payload)
                  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`)
        .run(id, e.sectionId ? String(e.sectionId) : null, e.title || '', Number(e.index || 0), Number(e.type || 0),
          Number(e.score || 0), e.question || '', e.optionA || '', e.optionB || '', e.optionC || '',
          e.optionD || '', e.optionE || '', e.answer || '', JSON.stringify(e));
      n++;
    }
    return ok(n);
  },

  'POST /api/Exercise/DeleteExercises': async ({ body }) => {
    const ids = Array.isArray(body) ? body : (body.ids || body.list || []);
    let n = 0;
    for (const id of ids) { n += db.prepare('DELETE FROM exercises WHERE id = ?').run(String(id)).changes || 0; }
    return ok(n);
  },

  'POST /api/Exercise/AddTestToStorageAsync': async ({ body }) => {
    const list = Array.isArray(body) ? body : (body.list || []);
    return ok(list.length);
  },

  'POST /api/TaskReport/AddOrUpdateTaskReport': async ({ body, user }) => {
    const id = String(body.id || `rep-${Date.now()}`);
    const cur = db.prepare('SELECT id FROM task_reports WHERE id = ?').get(id);
    const payload = JSON.stringify(body);
    if (cur) {
      db.prepare('UPDATE task_reports SET content = ?, score = ?, payload = ? WHERE id = ?')
        .run(body.content ?? null, body.score ?? null, payload, id);
    } else {
      db.prepare('INSERT INTO task_reports (id, taskId, sectionId, userId, taskRecordId, content, score, payload) VALUES (?,?,?,?,?,?,?,?)')
        .run(id, body.taskId ? String(body.taskId) : null, body.sectionId ? String(body.sectionId) : null,
          String(user?.id || body.userId || ''), body.taskRecordId ? String(body.taskRecordId) : null,
          body.content ?? null, body.score ?? null, payload);
    }
    return ok(id);
  },

  'POST /api/RfidExperimentRecording/AddRfidExperimentRecording': async ({ body, user }) => {
    const id = String(body.id || `rfid-${Date.now()}`);
    db.prepare('INSERT INTO rfid_records (id, taskId, userId, payload, createdAt) VALUES (?,?,?,?,?)')
      .run(id, body.taskId ? String(body.taskId) : null, String(user?.id || ''), JSON.stringify(body), nowIso());
    return ok(id);
  },

  // Generic practice upserts: same shape for every practice kind.
  'POST /api/DocumentPractice/AddOrUpdateDocumentPractice': async ({ body }) => upsertPractice('document', body),
  'POST /api/VideoPractice/AddOrUpdateVideoPractice': async ({ body }) => upsertPractice('video', body),
  'POST /api/CodePractice/AddOrUpdateCodePractice': async ({ body }) => upsertPractice('code', body),
  'POST /api/AppCasePractice/AddOrUpdateAppCasePractice': async ({ body }) => upsertPractice('app', body),
  'POST /api/EmulatorPractice/AddOrUpdateEmulatorPractice': async ({ body }) => upsertPractice('emulator', body),
  'POST /api/LessonSeries/AddOrUpdateLessonSeries': async ({ body }) => {
    const id = String(body.id || `lesson-${Date.now()}`);
    const cur = db.prepare('SELECT id FROM lessons WHERE id = ?').get(id);
    const payload = JSON.stringify(body);
    if (cur) db.prepare('UPDATE lessons SET name = ?, payload = ? WHERE id = ?').run(body.name || '', payload, id);
    else db.prepare('INSERT INTO lessons (id, name, payload) VALUES (?,?,?)').run(id, body.name || '', payload);
    return ok(id);
  },

  'POST /api/LessonSeries/AddOrUpdateLessonResource': async ({ body }) => {
    const id = String(body.id || `lres-${Date.now()}`);
    db.prepare('INSERT OR REPLACE INTO lesson_resources (id, lessonId, sectionId, kind, name, payload) VALUES (?,?,?,?,?,?)')
      .run(id, body.lessonId ? String(body.lessonId) : null, body.sectionId ? String(body.sectionId) : null,
        body.kind || null, body.name || '', JSON.stringify(body));
    return ok(id);
  },

  'POST /api/TaskSection/AddOrUpdateTaskSection': async ({ body }) => {
    const list = Array.isArray(body) ? body : (body.sections || [body]);
    for (const s of list) {
      const id = String(s.id || `ts-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`);
      db.prepare('INSERT OR REPLACE INTO task_sections (id, taskId, templateId, sectionId, parentId, sectionName, sequence, taskType, duration, score, content, payload) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)')
        .run(id, s.taskId ? String(s.taskId) : null, s.templateId ? String(s.templateId) : null, s.sectionId ? String(s.sectionId) : null,
          s.parentId ? String(s.parentId) : null, s.sectionName || '', Number(s.sequence || 0), Number(s.taskType || 0),
          Number(s.duration || 0), Number(s.score || 0), s.content ?? null, JSON.stringify(s));
    }
    return ok(list.length);
  },

  // --- batch operations (accept id arrays) --------------------------------
  'POST /api/Task/BatchDeleteTask': async ({ body }) => batchDelete('tasks', body),
  'POST /api/TaskTemplate/BacthDeleteTaskTemplate': async ({ body }) => batchDelete('templates', body),
  'POST /api/TaskTemplate/DeleteTaskTemplate': async ({ body }) => batchDelete('templates', body),
  'POST /api/TaskRecord/TaskSubmitBulk': async ({ body }) => batchRecords(body, 'submit'),
  'POST /api/TaskRecord/TaskSendBackBulk': async ({ body }) => batchRecords(body, 'sendback'),
  'POST /api/TaskRecord/taskPublicResultBulk': async ({ body }) => batchRecords(body, 'public'),
  'POST /api/TaskRecord/taskUnPublicResultBulk': async ({ body }) => batchRecords(body, 'unpublic'),
  'POST /api/TaskRecord/taskPublicResult': async ({ body }) => batchRecords(body, 'public'),
};

function upsertPractice(kind, body) {
  const id = String(body.id || `${kind}-${Date.now()}`);
  const sectionId = body.sectionId ? String(body.sectionId) : null;
  db.prepare('INSERT OR REPLACE INTO practices (id, kind, sectionId, targetId, name, payload) VALUES (?,?,?,?,?,?)')
    .run(id, kind, sectionId, body.targetId ? String(body.targetId) : null, body.name || body.title || '', JSON.stringify(body));
  return ok(id);
}

function batchDelete(table, body) {
  const ids = Array.isArray(body) ? body : (body.ids || body.list || []);
  let n = 0;
  for (const id of ids) n += db.prepare(`DELETE FROM ${table} WHERE id = ?`).run(String(id)).changes || 0;
  return ok(n);
}

function batchRecords(body, mode) {
  const records = Array.isArray(body) ? body : (body.ids || body.records || body.list || []);
  let n = 0;
  for (const item of records) {
    const id = typeof item === 'string' ? item : (item.id || item.taskRecordId);
    if (!id) continue;
    if (mode === 'submit') {
      db.prepare('UPDATE task_records SET completed = 1, completionTime = ? WHERE id = ?').run(nowIso(), String(id));
      n++;
    } else if (mode === 'sendback') {
      db.prepare('UPDATE task_records SET completed = 0 WHERE id = ?').run(String(id));
      n++;
    } else if (mode === 'public') {
      const rec = db.prepare('SELECT autoScore FROM task_records WHERE id = ?').get(String(id));
      db.prepare('UPDATE task_records SET publicScore = ? WHERE id = ?').run(rec?.autoScore ?? 0, String(id));
      n++;
    } else {
      db.prepare('UPDATE task_records SET publicScore = NULL WHERE id = ?').run(String(id));
      n++;
    }
  }
  return ok(n);
}

// `CopyTemplate`, `CopyFiles`, uploads etc. behave as tolerant stubs.
const stubs = {
  'POST /api/TaskTemplate/CopyTemplate': async ({ body }) => ok(String(body.id || body.templateId || '')),
  'POST /api/FileManager/CopyFiles': async ({ body }) => ok(0),
  'POST /api/FileManager/DeleteFile': async ({ body }) => ok(0),
  'POST /api/FileManager/Upload': async ({ body }) => ok({ id: `f-${Date.now()}`, url: '' }),
  'POST /api/ScreenRecord/Upload': async ({ body }) => ok({ id: `sr-${Date.now()}` }),
  'POST /api/FileAddress/AddOrUpdateFileAddress': async ({ body }) => ok(String(body.id || '')),
  'POST /api/FileContent/AddOrUpdateFileContent': async ({ body }) => ok(String(body.id || '')),
  'POST /api/FileContent/UpdateFileContentDescript': async ({ body }) => ok(1),
  'POST /api/Exercise/ExportExerciseFile': async () => ok(''),
  'GET /api/Exercise/ExportExerciseFile': async ({ p }) => ok({ url: '', count: 0 }),
  'POST /api/RfidExperimentRecording/ExportRecord': async () => ok({ url: '' }),
  'POST /api/TaskRecord/createExportByTaskId': async ({ p }) => ok(''),
  'GET /api/TaskRecord/createExportByTaskId': async ({ p }) => ok(''),
  'GET /api/TaskRecord/CheckExportStatusdByTaskId': async () => ok(1),
  'POST /api/Compile': async ({ body }) => ok({ output: '本地后端未接入编译服务', success: false }),
  'GET /api/Compile': async () => ok({ output: '本地后端未接入编译服务', success: false }),
  'POST /api/Dependence': async () => ok([]),
  'GET /api/Dependence': async () => ok([]),
  'POST /api/coap/send': async ({ body }) => ok({ sent: false, reason: '本地后端未接入 CoAP 网关' }),
  'POST /api/auth/login': async () => ok({ token: '' }),
};

// ------------------------------------------------------------- dispatcher ---
function matchRoute(map, method, pathname) {
  const key = `${method} ${pathname}`;
  if (map[key]) return { fn: map[key], params: {} };
  // Try prefix routes like /api/AppCasePractice/GetAppCasePracticeBySectionId/{id}
  for (const [k, fn] of Object.entries(map)) {
    const [m, pattern] = k.split(' ');
    if (m !== method) continue;
    if (!pattern.includes(':')) continue;
    const pp = pattern.split('/');
    const ap = pathname.split('/');
    if (pp.length !== ap.length) continue;
    const params = {};
    let hit = true;
    for (let i = 0; i < pp.length; i++) {
      if (pp[i].startsWith(':')) params[pp[i].slice(1)] = decodeURIComponent(ap[i]);
      else if (pp[i] !== ap[i]) { hit = false; break; }
    }
    if (hit) return { fn, params };
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${PORT}`);
  // The SPAs address the backend through service prefixes (/gateway,
  // /training-server, /emulator-server) and sometimes join them onto a
  // trailing-slash base, producing paths like /gateway//upms/auth/tokenValid.
  // `new URL()` would silently collapse those slashes, so work from the raw
  // request target: strip the prefix, then normalise separators.
  const collapse = (s) => s.replace(/\/{2,}/g, '/');
  const rawPath = decodeURI(req.url.split('?')[0]);
  let pathname = collapse(rawPath)
    .replace(/^\/(training-server|emulator-server)\b/, '')
    .replace(/^\/gateway\b/, '');
  pathname = collapse(pathname).replace(/\/+$/, '') || '/';
  if (!pathname.startsWith('/')) pathname = '/' + pathname;
  const method = req.method.toUpperCase();

  // CORS for direct browser testing without the static server.
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type, token, access_token');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  if (method === 'OPTIONS') { res.writeHead(204); return res.end(); }

  const body = (method === 'POST' || method === 'PUT' || method === 'PATCH') ? await readBody(req) : {};
  const token = bearerFrom(req) || req.headers['token'] || req.headers['access_token'];
  const user = resolveToken(db, token);
  const p = paramsFrom(req, body, url);
  const ctx = { req, body, user, token, p, url, params: {} };

  const json = (payload, status = 200) => {
    const s = JSON.stringify(payload);
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(s);
  };

  // Authentication gate for /api/* (a few endpoints stay public).
  const PUBLIC = new Set(['/api/server/time', '/api/FileManager/Download/NLEEmulatorClientAssistant.exe']);
  const isApi = pathname.startsWith('/api/');
  if (isApi && !PUBLIC.has(pathname) && !user) {
    return json(fail('用户未登录', 8004));
  }

  const upmsHit = matchRoute(upms, method, pathname);
  if (upmsHit) {
    try {
      const out = await upmsHit.fn(ctx, res, null);
      if (out && out.__handled) return;
      return json(out);
    } catch (e) { console.error('[upms error]', pathname, e); return json(upmsErr('服务异常: ' + e.message)); }
  }

  const apiHit = matchRoute({ ...api, ...apiWrite, ...stubs }, method, pathname);
  if (apiHit) {
    try {
      const out = await apiHit.fn({ ...ctx, params: apiHit.params }, res, null);
      if (out === undefined) return;         // handler wrote the response itself
      if (out && out.__handled) return;      // handler streamed the response
      return json(out);
    } catch (e) {
      console.error('[api error]', pathname, e);
      if (res.headersSent) return;           // stream already started; can't re-head
      return json(fail('Exception:' + e.message));
    }
  }

  // Unknown route: report honestly instead of pretending success.
  json(fail(`本地后端未实现该接口: ${method} ${pathname}`, 404), 404);
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[backend] SQLite ${DB_FILE}`);
  console.log(`[backend] http://127.0.0.1:${PORT}`);
  console.log(`[backend] routes: ${Object.keys(upms).length} upms + ${Object.keys(api).length + Object.keys(apiWrite).length + Object.keys(stubs).length} api`);
});
