# MCPKIT v2.0 PRD — AI Agent 工具箱

## 1. 文档信息

- 版本：v2.0
- 日期：2026-05-11
- 状态：**待老板确认**
- 调研来源：GitHub 86k stars awesome-mcp-servers、Taskade、AIDesigner、Developers Digest、Reddit、YouTube(MCP Creator 2026 Roadmap)

---

## 2. 背景与目标

### 2.1 MVP v1.0 问题

- 纯目录型，堆砌工具列表，没有解决"我不知道怎么组合"的问题
- 用户目的不明确：进来只知道"有哪些工具"，不知道"用哪些工具完成一件事"
- 无质量信号，用户信任成本高

### 2.2 升级目标

**MCPKIT = AI Agent 工具箱**

不是列工具，是告诉用户：**"你要做什么事？我给你一套工具组合，配好教程，评测认证，闭眼用。"**

核心壁垒：
- **评测体系** = 核心，用户知道哪个 Kit 真正好用
- **Kit 认证** = 质量信号，🏅 MCPKIT Certified
- **场景导航** = 目的导向，不是技术分类

---

## 3. 真实市场调研（2026年现状）

### 3.1 MCP 生态数据

来源：awesome-mcp-servers（86k stars）、Taskade、Developers Digest

**最受欢迎的 MCP 服务器（按实际使用率）：**

| MCP 服务器 | 用途 | 热度 |
|-----------|------|------|
| GitHub MCP | 代码管理、PR、Issue | ⭐⭐⭐⭐⭐ |
| Supabase MCP | 数据库、RAG、Auth | ⭐⭐⭐⭐⭐ |
| Firecrawl MCP | 网页爬取、RAG 数据采集 | ⭐⭐⭐⭐⭐ |
| Figma MCP | 设计稿转代码 | ⭐⭐⭐⭐ |
| Brave Search MCP | AI 搜索、研究 | ⭐⭐⭐⭐ |
| Slack MCP | 团队通知、协作 | ⭐⭐⭐⭐ |
| Linear MCP | 项目管理、Issue | ⭐⭐⭐ |
| Notion MCP | 文档、知识库 | ⭐⭐⭐ |
| Playwright MCP | 浏览器自动化、测试 | ⭐⭐⭐ |
| Filesystem MCP | 本地文件操作 | ⭐⭐⭐ |
| PostgreSQL MCP | 生产级数据库 | ⭐⭐⭐ |
| Docker MCP | 容器管理 | ⭐⭐⭐ |
| AWS S3 MCP | 云存储 | ⭐⭐ |

**市场信号：**
- 87% 新企业 AI 项目采用 MCP（AI Infrastructure Alliance）
- Claude Code 占 GitHub 公开 commit 的 4%，预计 2026 年底达 20%
- MCP 是 AI Agent 连接工具和数据的标准协议（USB-C 比喻）

---

## 4. 5个真实 Kit 设计（基于真实工作流）

> 所有 Kit 基于 GitHub、Reddit、YouTube 上的**真实工作流**，不是拍脑袋想象。

### 4.1 Kit 1：🚀 Ship a SaaS（最快落地）

**来源：** YouTube MCP Creator Roadmap + Reddit "Claude Code + Supabase 5分钟上线生产级 Next.js"

**用户目的：** 用 AI Agent 从零开始构建并部署一个 SaaS 产品

**真实工作流：**
```
想法 → 代码（Claude/Cursor） → 数据库（Supabase） → 部署（Cloudflare/Vercel） → 监控
```

**Starter Kit（30分钟跑通）：**
| 工具 | 作用 | 认证状态 |
|------|------|---------|
| Claude Code / Cursor | AI 编码助手 | 内置 |
| GitHub MCP | 代码存储 + CI/CD | 🏅 Certified |
| Supabase MCP | 数据库 + Auth + RAG | 🏅 Certified |
| Cloudflare Pages MCP | 一键部署 | ✅ Kit Rec. |

**Pro Kit（完整 SaaS）：**
| 工具 | 作用 |
|------|------|
| GitHub MCP | PR review + 自动合并 |
| Supabase MCP | Postgres + Edge Functions |
| Cloudflare R2 MCP | 文件存储 |
| Slack MCP | 部署/异常通知 |
| Sentry MCP | 错误监控 |

**Enterprise Kit：**
+ PostgreSQL MCP（更大规模）+ PagerDuty MCP（告警）+ AWS MCP（基础设施）

---

### 4.2 Kit 2：🤖 AI Coding Agent（开发者最多用）

**来源：** Developers Digest #1 MCP Servers 2026 + AIDesigner + Cursor vs Claude Code 2026

**用户目的：** 让 AI Agent 自动处理编码全流程——不只是写代码，是真正能干活的 Agent

**真实工作流：**
```
GitHub → Claude/Cursor → 代码 → PR → 自动测试 → 通知
```

**Starter Kit（5分钟配置）：**
| 工具 | 作用 |
|------|------|
| Claude Code | AI 编码（自主 CLI） |
| GitHub MCP | Repo 管理 + PR |
| Filesystem MCP | 读取/编辑本地文件 |
| Notion MCP | 记录技术文档 |

**Pro Kit（全流程）：**
| 工具 | 作用 |
|------|------|
| Claude Code / Cursor | 主编码 Agent |
| GitHub MCP | 代码 + PR + Issue |
| Playwright MCP | 自动化测试 |
| Notion MCP | 技术文档 |
| Slack MCP | 代码审查通知 |

**Enterprise Kit（团队协作）：**
+ Linear MCP（任务管理）+ Docker MCP（容器化）+ Environment MCP（配置管理）

---

### 4.3 Kit 3：📊 RAG & Research（差异化，最大价值）

**来源：** Multiple sources - 最被低估的 Kit，实际价值极高

**用户目的：** 让 AI Agent 做深度研究——爬取网页 → 提取内容 → 存入向量数据库 → 合成报告

**真实工作流：**
```
搜索（多源）→ 爬取（深度内容）→ 向量存储 → AI 分析 → 报告
```

**Starter Kit（20分钟跑通）：**
| 工具 | 作用 |
|------|------|
| Brave Search MCP | 多源 AI 搜索 |
| Firecrawl MCP | 爬取完整页面内容 |
| Claude / GPT | AI 分析 + 合成 |
| Supabase（vector） | 向量存储 |

**Pro Kit（完整 RAG）：**
| 工具 | 作用 |
|------|------|
| Brave Search MCP | 搜索 |
| Firecrawl MCP | 深度抓取 |
| Jina Reader MCP | 解析任意 URL |
| Supabase PGVector | 向量存储 + RAG |
| Claude / GPT-4o | 分析 + 生成报告 |
| Notion MCP | 存储研究报告 |

**Enterprise Kit（多语言 + 规模化）：**
+ 多语言爬取 + 更大向量库 + API 报告输出 + Slack 通知

---

### 4.4 Kit 4：⚡ Browser Automation（自动执行一切）

**来源：** Taskade + GrowwStacks "12 MCP Frameworks"

**用户目的：** 让 AI Agent 操作浏览器完成重复性 web 任务——填表、抓数据、自动化测试

**真实工作流：**
```
AI Agent → Playwright MCP → 操作浏览器 → 数据存储 → 通知
```

**Starter Kit（爬虫+填表）：**
| 工具 | 作用 |
|------|------|
| Playwright MCP | 浏览器操作 |
| Claude Code | AI 决策 |
| Filesystem MCP | 存储结果 |

**Pro Kit（完整自动化）：**
| 工具 | 作用 |
|------|------|
| Playwright MCP | 浏览器自动化 |
| Claude / Cursor | AI 决策 |
| Slack MCP | 任务完成通知 |
| Supabase | 存储结构化数据 |
| Brave Search MCP | 前置搜索找目标 |

**Enterprise Kit：**
+ 多浏览器并行 + 验证码处理 + 分布式爬取 + Cron 调度

---

### 4.5 Kit 5：🔔 DevOps & Monitoring（企业刚需）

**来源：** StackGen + DevOps Digest

**用户目的：** 让 AI Agent 自动监控 + 告警 + 修复，GitHub → CI → 监控 → PagerDuty

**真实工作流：**
```
代码 push → CI 构建 → 测试 → 部署 → 监控 → 异常告警 → 自动修复
```

**Starter Kit（GitHub + CI）：**
| 工具 | 作用 |
|------|------|
| GitHub MCP | 代码 + PR |
| npm/yarn MCP | 包管理 |
| Slack MCP | 构建通知 |

**Pro Kit（完整监控链）：**
| 工具 | 作用 |
|------|------|
| GitHub MCP | 代码管理 |
| Docker MCP | 容器构建 |
| Cloudflare MCP | 部署 |
| Slack MCP | 通知 |
| Filesystem MCP | 配置管理 |

**Enterprise Kit：**
+ AWS/GCP MCP（云资源）+ PagerDuty MCP（告警）+ Sentry MCP（错误追踪）+ Datadog MCP（监控）

---

## 5. 评测体系（核心壁垒）

### 5.1 评测维度

| 维度 | 权重 | 数据来源 |
|------|------|---------|
| **易用性** | 30% | 配置时间（文档完整性）|
| **安全性** | 25% | OAuth 权限范围（最小权限原则）|
| **活跃度** | 20% | GitHub 最后更新、stars |
| **场景匹配** | 25% | 与 Kit 的匹配程度 |

### 5.2 自动评测（机器）

```python
# 活跃度：GitHub API
last_commit = get_github_api("/repos/{owner}/{repo}").pushed_at
stars = get_github_api("/repos/{owner}/{repo}").stargazers_count

# 安全性：OAuth scopes
oauth_scopes = parse_github_oauth("/repos/{owner}/{repo}/contents")

# 易用性：文档质量评分
doc_completeness = count_install_steps / ideal_steps
```

### 5.3 认证级别

| 级别 | 要求 | 标签 |
|------|------|------|
| 🏅 **MCPKIT Certified** | 综合≥4.0 + 人工安全审核 + 实际跑通 | 🏅 Certified |
| ✅ **Kit Recommended** | 综合≥3.5，被收录进 Kit | ✅ Kit Rec. |
| ✓ **Reviewed** | 人工审核通过 | ✓ Reviewed |
| ⏳ **Pending** | 提交待审核 | ⏳ Pending |

### 5.4 认证流程

```
提交 → 机器自动评分 → Kit 团队人工复核（配置跑通+安全审核）→ 认证标签
```

---

## 6. 目录处理

**现有 MVP v1.0 的 111 条数据：**
- **直接废弃，不继承**
- v2.0 从零开始，按上述 5 个 Kit 重新填充工具数据
- 每个 Kit 配套工具独立 Markdown 文件

---

## 7. 界面结构

### 7.1 首页

```
┌──────────────────────────────────────┐
│  MCPKIT    [场景选 Kit] [所有工具]    │
├──────────────────────────────────────┤
│  Hero: 找到你的 AI Agent 工具箱       │
│  副标题: Kit 化工具组合 · 评测认证    │
├──────────────────────────────────────┤
│  KIT 入口（横排大卡片）：             │
│  🚀 Ship a SaaS — 30分钟上线         │
│  🤖 AI Coding Agent — 自动编码       │
│  📊 RAG & Research — 深度研究        │
│  ⚡ Browser Automation — 自动化一切  │
│  🔔 DevOps & Monitoring — 智能运维   │
├──────────────────────────────────────┤
│  [所有工具 →]（次要入口）             │
└──────────────────────────────────────┘
```

### 7.2 Kit 落地页

```
┌──────────────────────────────────────┐
│  [← 返回]  🚀 Ship a SaaS Kit        │
├──────────────────────────────────────┤
│  难度：[Starter] [Pro] [Enterprise]   │
├──────────────────────────────────────┤
│  推荐工具（认证状态）：                │
│  1. GitHub MCP ⭐4.5 🏅 Certified   │
│  2. Supabase MCP ⭐4.3 🏅 Certified  │
│  3. Cloudflare Pages ⭐4.0 ✅ Kit Rec│
├──────────────────────────────────────┤
│  评测雷达图 | 综合评分               │
├──────────────────────────────────────┤
│  配置示例（可复制 .env 片段）        │
├──────────────────────────────────────┤
│  教程：Step by Step                  │
├──────────────────────────────────────┤
│  认证标签：🏅 MCPKIT Certified       │
└──────────────────────────────────────┘
```

---

## 8. 技术架构

### 8.1 技术决策（不变）

- Astro（静态）
- Cloudflare Pages
- Git + Markdown
- Pagefind

### 8.2 新增组件

| 组件 | 实现 |
|------|------|
| Kit 落地页 | 每个 Kit 一个 Astro 页面 |
| 评测雷达图 | Chart.js / CSS SVG |
| 自动评测 | GitHub API（机器评分） |
| 认证标签 | frontmatter 字段 |

### 8.3 数据模型（每个工具）

```yaml
name: github-mcp
title: GitHub MCP
description: AI Agent 连接 GitHub 的官方 MCP 服务器
category: coding-agent
tags: [github, pr, issues, ci, code-review]
kit: ["ai-coding-starter", "devops-starter"]
kitRole: "代码管理 + PR review"
evaluation:
  easeOfUse: 4      # 1-5
  security: 4        # 1-5
  activity: 5        # 1-5
  scenarioFit: 5    # 1-5
  overall: 4.4      # 加权计算
certificationStatus: "certified"  # pending / reviewed / certified
installCommand: "npx @anthropic-ai/mcp-server-github"
envVars:
  - GITHUB_TOKEN
configExample: |
  {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/mcp-server-github"],
      "env": {"GITHUB_TOKEN": "ghp_xxx"}
    }
  }
```

---

## 9. 开发计划

### Phase 1（Kit 页面 + 评测，不含人工认证）

1. **首页重构** — 5个 Kit 入口卡片
2. **Kit 落地页 x5** — 工具列表 + 配置 + 教程 + 雷达图
3. **评测数据录入** — 每个 Kit 配套工具写 frontmatter（含评分）
4. **认证标签** — Certified / Kit Rec. / Reviewed / Pending
5. **GitHub API 自动评分** — 机器评测

### Phase 2（认证体系）

6. **人工审核流程**（文档化）
7. **Kit Recommended** 上线
8. **MCPKIT Certified** 标准 + 标签

---

## 10. 工具数据来源（第一期）

| Kit | 工具（官方/热门）| 来源 |
|-----|----------------|------|
| Ship a SaaS | GitHub MCP, Supabase MCP, Cloudflare Pages/R2 MCP, Slack MCP | 官方 + 热门 |
| AI Coding Agent | Claude Code, GitHub MCP, Filesystem MCP, Notion MCP, Playwright MCP, Linear MCP | 官方 + 热门 |
| RAG & Research | Brave Search MCP, Firecrawl MCP, Jina Reader MCP, Supabase PGVector, Claude/GPT | 官方 + 热门 |
| Browser Automation | Playwright MCP, Claude/Cursor, Slack MCP, Supabase | 官方 + 热门 |
| DevOps & Monitoring | GitHub MCP, Docker MCP, npm MCP, Slack MCP, Filesystem MCP, AWS MCP | 官方 + 热门 |

---

## 11. 待老板确认

1. **5个 Kit 方向是否都接受？**（可以调整顺序或删减）
2. **第一期优先做哪个 Kit？**（推荐：Ship a SaaS 或 AI Coding Agent）
3. **现有 MVP v1.0 数据是否完全废弃？**
4. **Phase 1 开发优先级是否正确？**

---

## 附录：真实来源链接

- [awesome-mcp-servers - 86k stars](https://github.com/punkpeye/awesome-mcp-servers)
- [Taskade: 15 Best MCP Servers 2026](https://www.taskade.com/blog/mcp-servers)
- [Developers Digest: Best MCP Servers 2026](https://www.developersdigest.tech/blog/best-mcp-servers-2026)
- [AIDesigner: Best MCP Servers for Claude/Cursor](https://www.aidesigner.ai/blog/best-mcp-servers)
- [YouTube: MCP Creator 2026 Roadmap](https://www.youtube.com/watch?v=kAVRFYgCPg0)
- [Claude Code + Supabase Tutorial](https://www.totalum.app/blog/claude-code-mcp-tutorial)
- [StarterPick: AI Agent SaaS Boilerplate 2026](https://starterpick.com/guides/ai-agent-saas-boilerplate-checklist-2026)
