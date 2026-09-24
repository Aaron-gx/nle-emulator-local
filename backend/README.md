# 后端服务

本地后端，提供教学平台的业务接口与数据存储。
**Node.js 22 + 内置 SQLite，无第三方依赖。**

---

## 组成

| 文件 | 作用 |
|---|---|
| `server.mjs` | HTTP 服务，接口路由 |
| `db.mjs` | 数据库结构（建表与迁移） |
| `auth.mjs` | 账号签发与校验 |
| `import.mjs` | 把 `data/` 导入数据库 |
| `cleanup.mjs` | 清理自检产生的测试数据 |
| `verify.mjs` | 接口契约自检（30 项） |
| `offline-test.mjs` | 断网自检（17 项） |

启动：

```powershell
node server.mjs          # 默认 8091，可用 B_PORT 覆盖
```

首次启动前需先导入数据（`start.ps1` 会自动处理）：

```powershell
node import.mjs
```

---

## 数据来源

`import.mjs` 从项目根目录的 `data/` 读取，导入以下内容：

```
exercises      5332    题库
tasks             5    任务
templates         3    任务模板（含章节树）
task_records     10    任务记录
rfid_records      2    RFID 记录
```

导入是幂等的，重复执行不会产生重复数据。

账号从 `.env` 的 `NLE_USER` / `NLE_PASS` 创建；未配置时使用本地占位账号。

---

## 自检

```powershell
node verify.mjs          # 需要后端已启动
node offline-test.mjs    # 自行拉起后端与前端，用 8095/8096 端口
```

`verify.mjs` 覆盖：登录链路、分页结构、详情关联、写操作、
评分逻辑、鉴权保护、请求体格式兼容。

评分规则：单选与判断按精确匹配，多选按选项集合匹配（顺序无关）。

---

## 扩展

**加接口**：在 `server.mjs` 的 `api` 对象中增加一项：

```js
'GET /api/Your/Endpoint': async ({ p, user, body }) => ok(data),
```

`p` 是参数解析器（`p.str('id')`、`p.page()`、`p.pageSize()`），
`ok()` / `fail()` 是响应包装。

**加数据表**：在 `db.mjs` 的 `migrate()` 中追加 `CREATE TABLE IF NOT EXISTS`。

**改题库**：直接改数据库文件，或修改 `data/exercise.json` 后重跑 `import.mjs`。

---

## 数据库

单文件 SQLite，位于 `backend/data/platform.db`，可直接备份或迁移。

该目录下的 `.db` / `.db-wal` / `.db-shm` 与 `n2v/` 均已排除出仓库，
不随源码分发。
