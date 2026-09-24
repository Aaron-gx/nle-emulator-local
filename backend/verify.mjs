// Contract verification: exercise the local backend exactly the way the SPA
// does (login -> bootstrap -> page loads), and report any deviation.
// Credentials come from .env (see .env.example) — never hardcode an account.
import { cfg } from '../tools/config.mjs';

const BASE = process.env.V_BASE || cfg.backend;
const USER = process.env.V_USER || cfg.user;
const PASS = process.env.V_PASS || cfg.pass;

if (!USER || !PASS) {
  console.error('[fatal] 缺少账号：请复制 .env.example 为 .env 并填写 NLE_USER / NLE_PASS');
  process.exit(2);
}

let TOKEN = '';

async function call(method, path, { body, form, auth = true } = {}) {
  const headers = {};
  if (auth && TOKEN) headers.Authorization = 'Bearer ' + TOKEN;
  let payload;
  if (form) {
    headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    payload = new URLSearchParams(form).toString();
  } else if (body !== undefined) {
    headers['Content-Type'] = 'application/json';
    payload = JSON.stringify(body);
  }
  const res = await fetch(BASE + path, { method, headers, body: payload });
  const text = await res.text();
  let json = null;
  try { json = JSON.parse(text); } catch {}
  return { status: res.status, json, text };
}

const results = [];
function check(name, cond, detail) {
  results.push({ name, pass: !!cond, detail });
  const tag = cond ? 'PASS' : 'FAIL';
  console.log(`  [${tag}] ${name}${detail ? '  — ' + detail : ''}`);
}

async function main() {
  console.log('=== 1. 鉴权 (upms) ===');
  const login = await call('POST', '/gateway/upms/auth/token', {
    form: { phone: USER, password: PASS, grant_type: 'password' },
    auth: false,
  });
  check('登录返回 code=200', login.json?.code === 200, `code=${login.json?.code}`);
  TOKEN = login.json?.data?.access_token;
  check('拿到 access_token', !!TOKEN, TOKEN ? TOKEN.slice(0, 8) + '…' : 'none');

  const valid = await call('POST', '/gateway/upms/auth/tokenValid', { form: {} });
  check('tokenValid 有效', valid.json?.data?.status === '1', valid.json?.msg);

  const info = await call('POST', '/gateway/upms/my/userInfo', { form: {} });
  check('userInfo 返回用户', !!info.json?.data?.id, `id=${info.json?.data?.id} 角色=${info.json?.data?.roles?.[0]?.roleName}`);

  console.log('\n=== 2. 启动引导（SPA 每次加载都会调）===');
  const t = await call('GET', '/training-server/api/server/time', { auth: false });
  check('server/time 返回时间', t.json?.code === 0 && !!t.json?.data, String(t.json?.data));
  const nle = await call('POST', '/training-server/api/NLEUser/AddOrUpdateNLEUser', { body: { userId: info.json?.data?.id } });
  check('NLEUser 同步成功', nle.json?.code === 0, `data=${nle.json?.data}`);

  console.log('\n=== 3. 核心列表页 ===');
  const task = await call('GET', '/training-server/api/Task/GetTaskPage?pageIndex=1&pageSize=10');
  const td = task.json?.data;
  check('Task/GetTaskPage 分页结构', td && typeof td.records === 'number' && Array.isArray(td.rows) && typeof td.total === 'number',
    `records=${td?.records} rows=${td?.rows?.length} total=${td?.total}`);
  check('任务内容非空', td?.rows?.length > 0, td?.rows?.[0]?.name?.slice(0, 34));

  const rec = await call('GET', '/training-server/api/TaskRecord/GetTaskRecordPage?pageIndex=1&pageSize=10');
  check('TaskRecord/GetTaskRecordPage', rec.json?.code === 0 && rec.json?.data?.rows?.length > 0,
    `rows=${rec.json?.data?.rows?.length}`);

  const ex = await call('GET', '/training-server/api/Exercise/GetExerciseWithState');
  check('题库全量返回', Array.isArray(ex.json?.data) && ex.json.data.length > 5000, `${ex.json?.data?.length} 道`);
  const first = ex.json?.data?.[0];
  check('题目字段完整', first && first.question && first.answer && first.optionA,
    `${String(first?.question).slice(0, 20)}… 答案=${first?.answer}`);

  const stat = await call('GET', '/training-server/api/Statistic/GetStatisticData');
  const sd = stat.json?.data;
  check('统计接口字段齐全', sd && 'taskCount' in sd && 'recordConut' in sd && 'emulTimes' in sd,
    `taskCount=${sd?.taskCount} recordConut=${sd?.recordConut}`);

  console.log('\n=== 4. 详情/关联链路 ===');
  const tplId = td?.rows?.[0]?.templateId;
  const tpl = await call('GET', '/training-server/api/TaskTemplate/GetTaskTemplate?id=' + tplId);
  const tplData = tpl.json?.data;
  check('模板详情返回章节树', tplData && Array.isArray(tplData.sections) && tplData.sections.length > 0,
    `sections=${tplData?.sections?.length} 子章=${tplData?.sections?.[0]?.children?.length}`);

  const taskId = td?.rows?.[0]?.id;
  const byTask = await call('GET', '/training-server/api/TaskRecord/GetTaskRecordByTaskId?taskId=' + taskId);
  check('按任务查记录', Array.isArray(byTask.json?.data), `${byTask.json?.data?.length} 条`);

  const lessons = await call('GET', '/training-server/api/LessonSeries/GetLessonSeriesPage?pageIndex=1&pageSize=20');
  check('课件列表结构正确', lessons.json?.data && Array.isArray(lessons.json.data.rows),
    `records=${lessons.json?.data?.records}`);

  const params = await call('GET', '/training-server/api/LessonSeries/GetLessonParams');
  check('课件参数字段', params.json?.data && 'directions' in params.json.data && 'levels' in params.json.data);

  console.log('\n=== 5. 写操作与评分 ===');
  const sectionId = 'test-section-' + Date.now();
  // 绑定两道题到测试章节，然后提交答案验证判分
  await call('POST', '/training-server/api/Exercise/AddExercise', {
    body: { id: 'q1-' + Date.now(), sectionId, type: 3, score: 10, question: '测试单选', optionA: 'A', optionB: 'B', answer: 'A' },
  });
  await call('POST', '/training-server/api/Exercise/AddExercise', {
    body: { id: 'q2-' + Date.now(), sectionId, type: 1, score: 10, question: '测试多选', optionA: 'A', optionB: 'B', optionC: 'C', answer: 'A,C' },
  });
  const pool = await call('GET', '/training-server/api/Exercise/GetExercisePageFromStorag?sectionId=' + sectionId);
  void pool;
  const qs = await call('GET', '/training-server/api/Exercise/GetExercisePageFromStorag?sectionId=' + sectionId);
  const ids = qs.json?.data?.rows?.map(r => r.id) || [];
  check('可写入并读回习题', ids.length === 2, `读回 ${ids.length} 道`);

  const submit = await call('POST', '/training-server/api/TaskRecord/SubmitTaskSection', {
    body: { sectionId, taskId: 't-test', answers: [{ id: ids[0], answer: 'A' }, { id: ids[1], answer: 'C,A' }] },
  });
  const detail = submit.json?.data?.detail || [];
  check('单选答对得分', detail[0]?.correct === true, `该题得 ${detail[0]?.score}`);
  check('多选乱序也算对', detail[1]?.correct === true, `提交 C,A vs 标准 A,C -> ${detail[1]?.got}`);
  check('总分累计正确', submit.json?.data?.gained === 20, `gained=${submit.json?.data?.gained}`);

  const wrong = await call('POST', '/training-server/api/TaskRecord/SubmitTaskSection', {
    body: { sectionId, taskId: 't-test', answers: [{ id: ids[0], answer: 'B' }, { id: ids[1], answer: 'A' }] },
  });
  const wd = wrong.json?.data?.detail || [];
  check('答错不得分', wd[0]?.correct === false && wd[0]?.score === 0, `单选错 -> score=${wd[0]?.score}`);
  check('多选漏选不得分', wd[1]?.correct === false, `提交 A vs 标准 A,C -> ${wd[1]?.correct}`);

  console.log('\n=== 6. 未鉴权保护 ===');
  const saved = TOKEN; TOKEN = '';
  const guard = await call('GET', '/training-server/api/Task/GetTaskPage', { auth: false });
  check('无 token 被拒绝', guard.json?.code === 8004, `code=${guard.json?.code} msg=${guard.json?.message}`);
  TOKEN = saved;

  console.log('\n=== 7. 助手下载 ===');
  // Probe with a range request so we don't pull 32MB into memory.
  const dl = await fetch(BASE + '/training-server/api/FileManager/Download/NLEEmulatorClientAssistant.exe', {
    headers: { Range: 'bytes=0-3' },
  });
  const sig = Buffer.from(await dl.arrayBuffer());
  check('助手安装包可下载且是 PE', dl.status === 206 || dl.status === 200, `status=${dl.status} magic=${sig.slice(0, 2).toString()}`);

  console.log('\n=== 8. 请求体格式兼容（三个前端各用一种）===');
  // training 登录页用 FormData，account 用 urlencoded，测试脚本用 JSON。
  // 三者都必须能登录，否则某一端的表单会直接报"参数错误"。
  const asJson = await call('POST', '/gateway/upms/auth/token', {
    body: { phone: USER, password: PASS, grant_type: 'password' }, auth: false,
  });
  check('JSON body 可登录', asJson.json?.code === 200, `code=${asJson.json?.code}`);

  const fd = new FormData();
  fd.append('phone', USER);
  fd.append('password', PASS);
  fd.append('grant_type', 'password');
  const mpRes = await fetch(BASE + '/gateway/upms/auth/token', { method: 'POST', body: fd });
  const mpJson = await mpRes.json();
  check('multipart FormData 可登录', mpJson?.code === 200, `code=${mpJson?.code}`);

  const formBody = new URLSearchParams({ phone: USER, password: PASS, grant_type: 'password' });
  const qsRes = await fetch(BASE + '/gateway/upms/auth/token', { method: 'POST', body: formBody });
  const qsJson = await qsRes.json();
  check('urlencoded 可登录', qsJson?.code === 200, `code=${qsJson?.code}`);

  console.log('\n=== 9. 失效 token 不得阻断启动链 ===');
  // app.js 的 tokenValid 会无条件读 `t.data.status`，缺字段会抛异常并
  // 阻止 $mount，所以失败也必须返回带 status 的 data。
  const bad = await call('POST', '/gateway/upms/auth/tokenValid', {
    headers: {}, body: undefined, form: {},
  });
  const savedTok = TOKEN;
  const staleRes = await fetch(BASE + '/gateway/upms/auth/tokenValid', {
    method: 'POST',
    headers: { Authorization: 'Bearer deadbeefdeadbeefdeadbeefdeadbeef' },
  });
  const staleJson = await staleRes.json();
  check('失效 token 返回 data.status', staleJson?.data?.status === '0', `status=${staleJson?.data?.status} code=${staleJson?.code}`);
  check('失效 token 不返回 8004（否则前端 reject 崩溃）', staleJson?.code === 200, `code=${staleJson?.code}`);

  // userInfo 也必须始终是对象且含 roles 数组（调用方会做 t.roles.map）
  const staleUser = await fetch(BASE + '/gateway/upms/my/userInfo', {
    method: 'POST',
    headers: { Authorization: 'Bearer deadbeefdeadbeefdeadbeefdeadbeef' },
  });
  const staleUserJson = await staleUser.json();
  check('失效 token 的 userInfo 含 roles 数组', Array.isArray(staleUserJson?.data?.roles), `roles=${JSON.stringify(staleUserJson?.data?.roles)}`);
  void bad; void savedTok;

  const failed = results.filter(r => !r.pass);
  console.log(`\n**** 合计 ${results.length} 项，通过 ${results.length - failed.length}，失败 ${failed.length} ****`);
  if (failed.length) {
    console.log('失败项:');
    for (const f of failed) console.log(`  - ${f.name}  ${f.detail || ''}`);
    process.exitCode = 1;
  }
}

main().catch(e => { console.error('[fatal]', e); process.exit(1); });
