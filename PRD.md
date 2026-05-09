# PRD：mcpkit.run - AI Agent 开发者工具目录

## 1. 项目定位

**域名：** https://mcpkit.run

**Slogan：** 独立开发者的 AI Agent 工具箱

**一句话定位：**
面向独立开发者/小团队，精选 AI Agent 开发所需的 MCP Servers、AI 工具、工作流组件，按场景分类，提供编辑推荐和使用指南。

**目标用户：**
- 独立开发者 / Solo Founder
- AI 应用开发者
- 2-5 人小团队

**核心价值：**
帮独立开发者快速找到"这个场景用什么 MCP/工具"，而不是在海量选项里大海捞针。

---

## 2. 三大核心分类

### A. MCP Servers（按用途）

| 分类 | 示例工具 |
|------|---------|
| **数据库** | mcp-sqlite, mcp-postgres, mcp-mongodb |
| **GitHub / 代码** | mcp-github, mcp-gitlab |
| **Slack / 通讯** | mcp-slack, mcp-discord |
| **Stripe / 支付** | mcp-stripe |
| **数据获取** | mcp-fetch, mcp-read, mcp-search |
| **文件存储** | mcp-aws-s3, mcp-gdrive |
| **AI / LLM** | mcp-anthropic, mcp-openai |
| **开发工具** | mcp-npm, mcp-docker |

### B. AI Coding Tools

| 分类 | 示例工具 |
|------|---------|
| **AI 代码编辑器** | Cursor, Claude Code, Copilot |
| **Cursor Rules** | 各场景的 Cursor rules 配置 |
| **AI CLI 工具** | Aider, Claude CLI |
| **本地开发环境** | Bolt.new, Lovable |

### C. 工作流 & 部署

| 分类 | 示例工具 |
|------|---------|
| **工作流编排** | n8n, CrewAI, AutoGen, LangChain |
| **部署平台** | Vercel, Railway, Render, Cloudflare |
| **数据库** | Supabase, PlanetScale, Neon |
| **支付** | Stripe, LemonSqueezy, Paddle |
| **邮件** | Resend, Mailgun, Postmark |

---

## 3. 页面结构

### 3.1 首页
- Hero：Slogan + 搜索入口
- 三大分类入口（MCP / AI 工具 / 部署）
- 编辑精选（3-5 个推荐工具，配简短说明）
- 最新收录工具列表

### 3.2 工具详情页
每个工具独立页面，包含：
- 名称 + Logo
- 官网链接
- 分类标签
- 简短描述（1-2 句话）
- 使用场景
- 价格（免费 / Freemium / 付费）
- MCP 配置（如果是 MCP Server，给出安装命令 + 配置示例）
- 相关工具
- 用户评价

### 3.3 分类页
- 左侧：分类筛选（分类 + 价格 + 标签）
- 右侧：工具列表（名称 + 描述 + 评分）

### 3.4 场景推荐页（可选）
> "我要做一个 SaaS 产品，需要哪些工具？"

---

## 4. MVP 功能优先级

### P0（必须上线）
1. 首页 + 搜索
2. MCP Servers 分类列表（50+ 工具）
3. 工具详情页
4. 基础筛选（分类 + 价格区间）
5. 提交工具入口（用户可提交新工具）

### P1（第一版之后加）
1. 编辑推荐功能
2. 用户评论/评分
3. Affiliate 链接
4. 场景推荐页

### P2（后续版本）
1. MCP Server API（供 AI Agent 调用）
2. RSS / 更新订阅
3. 订阅收入（付费展示位）

---

## 5. 内容填充计划

### 第一批：MCP Servers（最重要）
手动整理 **50 个**高质量 MCP Server，覆盖 8 个核心分类。

来源：
- mcp.directory
- mcpmarket.com
- GitHub Trending（MCP 相关项目）
- 各框架官方文档（n8n, LangChain, CrewAI）

### 第二批：AI Coding Tools
整理 **30 个**工具，覆盖：
- AI 代码编辑器
- Cursor Rules 生态
- AI CLI 工具

### 第三批：工作流 & 部署工具
整理 **30 个**工具，覆盖：
- 部署平台
- 数据库
- 支付/邮件

**总计 MVP：100+ 工具**

---

## 6. 技术栈

- **框架：** Astro
- **代码托管：** GitHub
- **部署：** Cloudflare Pages
- **搜索：** Pagefind（Astro 内置）

---

## 7. 关键成功指标

| 指标 | 第一阶段 | 第二阶段 |
|------|---------|---------|
| 收录工具数 | 80+ | 150+ |
| 月独立访问 | 500+ | 2000+ |
| 用户提交工具 | 5+ | 20+ |
| 月收入 | $0 | $200+ |

---

## 8. 风险 & 应对

| 风险 | 应对 |
|------|------|
| 官方 MCP Registry 统一生态 | 差异化在"精选 + 场景化"，不做大而全 |
| SEO 周期长（6 个月） | 先做社群推广（HN, X, IndieHackers） |
| 用户不愿付费 | 先做免费，验证需求后再加收费功能 |
