// Authentication and the /upms gateway surface.
// The SPA stores the token in localStorage('cloud-token') and sends it as
// `Authorization: Bearer <token>`, so we issue our own opaque tokens and keep
// them in the sessions table — no upstream dependency.
import crypto from 'node:crypto';

const SECRET = process.env.B_TOKEN_SECRET || 'nle-local-secret';

export function issueToken(db, userId, ttlHours = 24 * 30) {
  const token = crypto.randomBytes(16).toString('hex');
  const expires = new Date(Date.now() + ttlHours * 3600 * 1000).toISOString();
  db.prepare('INSERT INTO sessions (token, userId, expiresAt) VALUES (?, ?, ?)').run(token, String(userId), expires);
  return token;
}

export function resolveToken(db, token) {
  if (!token) return null;
  const clean = String(token).replace(/[^0-9a-zA-Z]/g, '');
  const row = db.prepare('SELECT * FROM sessions WHERE token = ? AND revoked = 0').get(clean);
  if (!row) return null;
  if (row.expiresAt && new Date(row.expiresAt) < new Date()) return null;
  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(row.userId);
  return user || null;
}

export function revokeToken(db, token) {
  const clean = String(token || '').replace(/[^0-9a-zA-Z]/g, '');
  db.prepare('UPDATE sessions SET revoked = 1 WHERE token = ?').run(clean);
}

// Pull a bearer token out of the request headers (case-insensitive).
export function bearerFrom(req) {
  const h = req.headers['authorization'] || req.headers['Authorization'];
  if (!h) return null;
  const m = /^Bearer\s+(.+)$/i.exec(String(h));
  return m ? m[1] : null;
}

// The SPA dereferences these fields directly during bootstrap
// (`t.name`, `t.roles.map(...)`), so always hand back a complete shape —
// including a `roles` array — rather than null.
// The account portal reads `data.rights` unconditionally right after login
// (`if (t.data.rights.length > 0) ...`), and that call sits between the token
// being saved and the redirect back to `?backUrl`. Without the field the
// exception aborts the redirect, stranding the user on the login page.
export function shapeUser(u, rights = []) {
  if (!u) {
    return {
      id: null, userId: null, name: '', userName: '', userNname: '',
      phone: null, avatar: null, kind: null,
      birthday: null, city: null, address: null, sex: null,
      email: null, contactName: null, contactPhone: null,
      classId: null, className: null, collegeId: null, collegeName: null,
      collegeKind: null, studentNumber: null, stuNo: null,
      roles: [],
      rights: [],
    };
  }
  return {
    id: u.id,
    userId: u.id,
    name: u.name,
    userName: u.userName,
    userNname: u.userName,
    phone: u.phone,
    avatar: u.avatar,
    kind: u.kind,
    birthday: u.birthday,
    city: u.city,
    address: u.address,
    sex: u.sex,
    email: u.email,
    contactName: u.contactName,
    contactPhone: u.contactPhone,
    classId: u.classId,
    className: u.className,
    collegeId: u.collegeId,
    collegeName: u.collegeName,
    collegeKind: u.collegeId ? 1 : null,
    studentNumber: u.studentNumber,
    stuNo: u.studentNumber,
    roles: [{ id: u.roleId, roleName: u.roleName }],
    rights,
  };
}

// upms responses use code=200 (string-or-number); the training backend uses 0.
export const upmsOk = (data) => ({ code: 200, msg: '操作成功', data });
export const upmsErr = (msg, code = 9999) => ({ code, msg });
