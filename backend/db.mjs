// Schema for the standalone training-platform backend.
// Design rule: keep upstream JSON payload shapes verbatim in JSON columns so the
// existing SPA renders unchanged, and promote only the columns we must query.
import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';

export function openDb(file) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  const db = new DatabaseSync(file);
  db.exec('PRAGMA journal_mode = WAL');
  db.exec('PRAGMA foreign_keys = ON');
  migrate(db);
  return db;
}

function migrate(db) {
  db.exec(`
    -- 用户 / 班级 / 院校 -------------------------------------------------
    CREATE TABLE IF NOT EXISTS users (
      id            TEXT PRIMARY KEY,
      phone         TEXT UNIQUE,
      password      TEXT NOT NULL,
      name          TEXT,
      userName      TEXT,
      avatar        TEXT,
      kind          INTEGER DEFAULT 2,      -- 2=学生 1=老师
      roleName      TEXT DEFAULT '学生',
      roleId        INTEGER DEFAULT 34,
      classId       TEXT,
      className     TEXT,
      collegeId     TEXT,
      collegeName   TEXT,
      studentNumber TEXT,
      email         TEXT,
      sex           INTEGER,
      birthday      TEXT,
      city          TEXT,
      address       TEXT,
      contactName   TEXT,
      contactPhone  TEXT,
      extra         TEXT,
      createdAt     TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS classes (
      id        TEXT PRIMARY KEY,
      name      TEXT,
      collegeId TEXT,
      extra     TEXT
    );

    -- 会话（自建 token，替代原网关注册） --------------------------------
    CREATE TABLE IF NOT EXISTS sessions (
      token      TEXT PRIMARY KEY,
      userId     TEXT NOT NULL,
      createdAt  TEXT DEFAULT (datetime('now')),
      expiresAt  TEXT,
      revoked    INTEGER DEFAULT 0
    );

    -- 课程 / 课件 ---------------------------------------------------------
    CREATE TABLE IF NOT EXISTS lessons (
      id       TEXT PRIMARY KEY,
      name     TEXT,
      payload  TEXT NOT NULL,               -- 原样 JSON
      sequence INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS lesson_resources (
      id        TEXT PRIMARY KEY,
      lessonId  TEXT,
      sectionId TEXT,
      kind      TEXT,                        -- doc|video|code|app|emulator|exercise
      name      TEXT,
      payload   TEXT
    );

    -- 任务模板 / 章节 -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS templates (
      id        TEXT PRIMARY KEY,
      name      TEXT,
      lessonId  TEXT,
      sourceId  TEXT,
      collegeId TEXT,
      teacherId TEXT,
      number    TEXT,
      payload   TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sections (
      id          TEXT PRIMARY KEY,
      templateId  TEXT,
      parentId    TEXT,
      sectionName TEXT,
      sequence    INTEGER DEFAULT 0,
      taskType    INTEGER DEFAULT 0,         -- 0教程 1知识巩固 2实操视频 3仿真实训 4编码练习 5项目案例
      duration    INTEGER DEFAULT 0,
      score       REAL DEFAULT 0,
      hasContent  INTEGER DEFAULT 0,
      content     TEXT,
      payload     TEXT
    );

    -- 任务 / 任务记录 -----------------------------------------------------
    CREATE TABLE IF NOT EXISTS tasks (
      id              TEXT PRIMARY KEY,
      number          TEXT,
      name            TEXT,
      templateId      TEXT,
      teacherId       TEXT,
      classId         TEXT,
      duration        INTEGER DEFAULT 0,
      publishTime     TEXT,
      limitTime       INTEGER DEFAULT 0,
      limitStartTime  TEXT,
      limitEndTime    TEXT,
      autoSubmit      INTEGER DEFAULT 0,
      exOrderRand     INTEGER DEFAULT 0,
      exOptionsOrderRand INTEGER DEFAULT 0,
      scoreDisplay    INTEGER DEFAULT 1,
      mode            INTEGER DEFAULT 0,
      hideReport      INTEGER DEFAULT 0,
      payload         TEXT
    );

    CREATE TABLE IF NOT EXISTS task_records (
      id                  TEXT PRIMARY KEY,
      taskId              TEXT,
      studentId           TEXT,
      templateId          TEXT,
      studentName         TEXT,
      studentNumber       TEXT,
      classId             TEXT,
      teacherId           TEXT,
      sectionCount        INTEGER DEFAULT 0,
      sectionFinishedCount INTEGER DEFAULT 0,
      score               REAL DEFAULT 0,
      publicScore         REAL,
      autoScore           REAL DEFAULT 0,
      duration            INTEGER DEFAULT 0,
      progress            INTEGER DEFAULT 0,
      completed           INTEGER DEFAULT 0,
      teacherComment      INTEGER DEFAULT 0,
      publishTime         TEXT,
      completionTime      TEXT,
      beginTime           TEXT,
      payload             TEXT,
      UNIQUE(taskId, studentId)
    );

    CREATE TABLE IF NOT EXISTS task_sections (
      id            TEXT PRIMARY KEY,
      taskId        TEXT,
      templateId    TEXT,
      sectionId     TEXT,
      parentId      TEXT,
      sectionName   TEXT,
      sequence      INTEGER DEFAULT 0,
      taskType      INTEGER DEFAULT 0,
      duration      INTEGER DEFAULT 0,
      score         REAL DEFAULT 0,
      content       TEXT,
      payload       TEXT
    );

    -- 章节状态（学生作答进度） -------------------------------------------
    CREATE TABLE IF NOT EXISTS section_states (
      id                TEXT PRIMARY KEY,
      sectionId         TEXT,
      taskRecordId      TEXT,
      taskId            TEXT,
      studentId         TEXT,
      targetId          TEXT,
      targetType        INTEGER DEFAULT 0,
      duration          INTEGER DEFAULT 0,
      content           TEXT,
      comment           TEXT,
      score             REAL DEFAULT 0,
      autoScore         REAL DEFAULT 0,
      isFinished        INTEGER DEFAULT 0,
      submitTime        TEXT,
      payload           TEXT
    );

    -- 习题 ---------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS exercises (
      id            TEXT PRIMARY KEY,
      sectionId     TEXT,
      title         TEXT,
      idx           INTEGER DEFAULT 0,
      type          INTEGER DEFAULT 0,       -- 0填空 1多选 2判断 3单选 4其他
      score         REAL DEFAULT 0,
      question      TEXT,
      optionA       TEXT, optionB TEXT, optionC TEXT, optionD TEXT, optionE TEXT,
      answer        TEXT,
      addingMode    INTEGER DEFAULT 0,
      author        TEXT,
      modifyTime    TEXT,
      importBatchId TEXT,
      tag           TEXT,
      payload       TEXT
    );
    CREATE INDEX IF NOT EXISTS ix_exercises_section ON exercises(sectionId);

    -- 实训内容（各 taskType 的载体） -------------------------------------
    CREATE TABLE IF NOT EXISTS practices (
      id        TEXT PRIMARY KEY,
      kind      TEXT NOT NULL,               -- document|video|code|app|emulator
      sectionId TEXT,
      targetId  TEXT,
      name      TEXT,
      payload   TEXT
    );
    CREATE INDEX IF NOT EXISTS ix_practices_section ON practices(sectionId, kind);

    -- 实验报告 / RFID 记录 ------------------------------------------------
    CREATE TABLE IF NOT EXISTS task_reports (
      id           TEXT PRIMARY KEY,
      taskId       TEXT,
      sectionId    TEXT,
      userId       TEXT,
      taskRecordId TEXT,
      content      TEXT,
      score        REAL,
      payload      TEXT
    );

    CREATE TABLE IF NOT EXISTS rfid_records (
      id        TEXT PRIMARY KEY,
      taskId    TEXT,
      userId    TEXT,
      payload   TEXT,
      createdAt TEXT
    );

    -- 文件层 -------------------------------------------------------------
    CREATE TABLE IF NOT EXISTS files (
      id        TEXT PRIMARY KEY,
      name      TEXT,
      path      TEXT,
      size      INTEGER DEFAULT 0,
      mime      TEXT,
      kind      TEXT,
      ownerId   TEXT,
      createdAt TEXT DEFAULT (datetime('now'))
    );

    CREATE TABLE IF NOT EXISTS file_contents (
      id        TEXT PRIMARY KEY,
      fileId    TEXT,
      sectionId TEXT,
      name      TEXT,
      content   TEXT,
      payload   TEXT
    );

    CREATE TABLE IF NOT EXISTS file_addresses (
      id      TEXT PRIMARY KEY,
      fileId  TEXT,
      address TEXT,
      payload TEXT
    );

    -- 学习统计 -----------------------------------------------------------
    CREATE TABLE IF NOT EXISTS activity_log (
      id        INTEGER PRIMARY KEY AUTOINCREMENT,
      userId    TEXT,
      kind      TEXT,                        -- doc|video|exer|code|app|emul
      duration  INTEGER DEFAULT 0,
      refId     TEXT,
      createdAt TEXT DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS ix_activity_user ON activity_log(userId, kind);
  `);
}

// Convenience: SQLite has no native boolean/JSON, so normalise on the way out.
export const toBool = (v) => v === 1 || v === true;
export const fromBool = (v) => (v ? 1 : 0);
