# UI/UX 设计文档 — MCPKIT v2.0

## 1. 文档信息

- 版本：v2.0
- 作者：UID
- 对应 PRD 版本：v2.0（5 个 Kit + 评测体系）
- 日期：2026-05-11

---

## 2. 设计理念

**从目录到工具箱：** 不再堆砌工具列表，而是以真实工作流为导向，让用户找到"完成一件事所需的整套工具 Kit"。

视觉语言延续 v1.0 深色主题（Linear/Vercel 风格），新增：
- Kit 入口大卡片（横向，hover 有整体联动感）
- 评测雷达图（清晰、可比较）
- 认证标签体系（质量信号，视觉权重高）

---

## 3. 视觉方向

### 3.1 色彩系统（延续 v1.0，新增 Kit 专用色）

| Token | Hex | 用途 |
|-------|-----|------|
| `--bg-primary` | `#0a0a0f` | 页面背景 |
| `--bg-secondary` | `#12121a` | 卡片背景 |
| `--bg-tertiary` | `#1a1a25` | Hover / 选中态 |
| `--border` | `#2a2a3a` | 边框 |
| `--text-primary` | `#f0f0f5` | 主标题 |
| `--text-secondary` | `#9090a0` | 描述文字 |
| `--text-muted` | `#505060` | 辅助文字 |
| `--accent` | `#6366f1` | 主按钮 / 强调 |
| `--accent-hover` | `#818cf8` | 按钮 Hover |
| `--tag-bg` | `#1e1e2e` | 标签背景 |
| `--free` | `#22c55e` | 免费 / 基础 |
| `--paid` | `#f59e0b` | 付费 / Pro |
| **Kit 色系** | | |
| `--kit-ship` | `#f97316` | 🚀 Ship a SaaS |
| `--kit-coding` | `#06b6d4` | 🤖 AI Coding Agent |
| `--kit-rag` | `#8b5cf6` | 📊 RAG & Research |
| `--kit-browser` | `#eab308` | ⚡ Browser Automation |
| `--kit-devops` | `#ef4444` | 🔔 DevOps & Monitoring |

### 3.2 字体

- 主字体：**Inter**（Google Fonts），fallback: `system-ui, sans-serif`
- 代码：**JetBrains Mono**，fallback: `monospace`
- 字号梯度：12 / 14 / 16 / 20 / 24 / 28 / 32 / 48px

### 3.3 间距系统

基于 4px 网格：4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px

### 3.4 圆角

- 卡片：`16px`（Kit 卡片 `20px`）
- 按钮：`8px`
- 标签：`6px`
- 输入框：`8px`

### 3.5 动效

- Kit 卡片 Hover：整体上浮 4px + 左侧彩条放大 + 背景微亮，`250ms ease`
- 雷达图：绘制时从中心点向外扩展动画，`600ms ease-out`
- 认证标签：脉冲光晕（🏅 Certified），`2s ease infinite`
- 难度切换：淡入淡出，`200ms ease`

### 3.6 图标

使用 **Lucide Icons**。

---

## 4. 布局框架

### 4.1 通用页面结构

```
┌─────────────────────────────────┐
│  Header（固定，60px）            │
├─────────────────────────────────┤
│  Page Content（自适应）           │
│  （首页 100vh，列表页 自适应）      │
└─────────────────────────────────┘
```

**Header（v2.0 改版）：**
- 左：Logo（MCPKIT） + 场景导航（Kit 入口按钮）
- 中：主导航（[Kit 入口] / 所有工具 / 搜索）
- 右：语言切换 + Submit Tool

### 4.2 响应式断点

| 断点 | 宽度 | 布局变化 |
|------|------|---------|
| Mobile | `< 640px` | 单列，Kit 卡片堆叠 |
| Tablet | `640px - 1024px` | 双列 Kit 卡片（2+3 或 3+2） |
| Desktop | `> 1024px` | 5 列 Kit 卡片一行，或 3+2 两行 |

---

## 5. 首页重构（`/`）

```
┌──────────────────────────────────────────────────────────┐
│  Header                                                  │
├──────────────────────────────────────────────────────────┤
│  Hero（居中）                                            │
│  ┌──────────────────────────────────────────────────┐   │
│  │  标题："Your AI Agent Toolkit"                   │   │
│  │  副标题：Kit-based tool combos · Verified         │   │
│  └──────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────┤
│  Kit 入口区（横向，5个大卡片）                           │
│  ┌────────────────────────────────────────────────┐     │
│  │ 🚀 Ship a SaaS    🤖 AI Coding    📊 RAG       │     │
│  │    30min           Agent           Research     │     │
│  ├────────────────────────────────────────────────┤     │
│  │ ⚡ Browser      🔔 DevOps                        │     │
│  │    Automation   & Monitoring                    │     │
│  └────────────────────────────────────────────────┘     │
├──────────────────────────────────────────────────────────┤
│  [View all tools →]（次要入口，小字）                   │
├──────────────────────────────────────────────────────────┤
│  Footer                                                  │
└──────────────────────────────────────────────────────────┘
```

**Kit 入口卡片规格：**

```
┌─────────────────────────────────────────────────────┐
│  🚀  [图标 48px，Kit 对应颜色]                        │
│                                                     │
│  Ship a SaaS          [Starter] [Pro] [Enterprise] │  ← 难度选择标签
│  Deploy a SaaS in 30 minutes                       │
│                                                     │
│  GitHub MCP · Supabase MCP · Cloudflare · Slack    │  ← 核心工具标签（最多4个）
│                                                     │
│  ⭐ 4.4  ·  🏅 Certified ·  12 tools               │  ← 评分 + 认证 + 工具数
└─────────────────────────────────────────────────────┘
```

**卡片详细规格：**

| 属性 | 规格 |
|------|------|
| 尺寸 | 最小 280px 宽，auto 高度（约 200px） |
| 容器 | `bg-[--bg-secondary]` border，`rounded-2xl`（20px） |
| 图标 | 48×48px，圆角 12px，背景为 Kit 主色的 15% opacity |
| 标题 | 22px，字重 700，`--text-primary` |
| 副标题 | 14px，`--text-secondary` |
| 难度标签 | Starter=绿 / Pro=橙 / Enterprise=红，边框 pill 样式 |
| 工具标签 | 12px，`bg-[--tag-bg]`，逗号分隔，最多 4 个 |
| 评分区 | 14px，带 ⭐ 评分 + 认证标签 + 工具数量 |
| Hover 效果 | `translateY(-4px)` + `box-shadow` + 左侧彩条（4px 宽 Kit 色）|

**首页布局建议：**
- 桌面：5 个 Kit 横排一行（每列 `minmax(240px, 1fr)`）
- 或 3+2 两行布局（第一行 3 个，第二行 2 个居中）
- 每个卡片对应一个 Kit 难度默认值（Starter）

---

## 6. Kit 落地页（`/kits/[kit-slug]`）

### 6.1 页面结构

```
┌──────────────────────────────────────────────────────────┐
│  Header                                                  │
├──────────────────────────────────────────────────────────┤
│  Breadcrumb: Home > Kits > 🚀 Ship a SaaS                │
├──────────────────────────────────────────────────────────┤
│  Kit Hero（带背景色和图标）                               │
│  ┌──────────────────────────────────────────────────┐   │
│  │ 🚀 Ship a SaaS — Deploy a SaaS in 30 min         │   │
│  │ [Starter] [Pro] [Enterprise]  ← 难度切换 Tab     │   │
│  └──────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────┤
│  左侧（65%）：工具列表    │  右侧（35%）：评测 + 配置    │
│  ┌─────────────────────  │  ┌──────────────────────┐   │
│  │ 1. GitHub MCP ⭐4.5   │  │  评测雷达图           │   │
│  │    🏅 Certified       │  │  四维轴：易用/安全/   │   │
│  │    描述...            │  │  活跃/场景匹配        │   │
│  │    [Install] [Config] │  │                       │   │
│  ├─────────────────────  │  │  综合评分：⭐ 4.3    │   │
│  │ 2. Supabase MCP ⭐4.3│  │                       │   │
│  │    🏅 Certified       │  ├──────────────────────┤   │
│  │    描述...            │  │  配置示例（.env 代码） │   │
│  │    [Install] [Config] │  │                       │   │
│  └─────────────────────  │  └──────────────────────┘   │
├──────────────────────────────────────────────────────────┤
│  教程区（Step by Step，可折叠）                          │
├──────────────────────────────────────────────────────────┤
│  认证标签展示区                                          │
│  🏅 MCPKIT Certified / ✅ Kit Recommended                │
├──────────────────────────────────────────────────────────┤
│  Footer                                                  │
└──────────────────────────────────────────────────────────┘
```

### 6.2 难度切换 Tab

- 三个 Tab：Starter / Pro / Enterprise
- 切换时工具列表内容更新（不同难度对应不同工具组合）
- 当前选中 Tab：`border-bottom: 2px --accent`，文字变白
- 非选中：`--text-muted`，hover 时变 `--text-secondary`

### 6.3 工具列表项

每个工具卡（内嵌在 Kit 落地页中）：

```
┌─────────────────────────────────────────┐
│  1. GitHub MCP          ⭐ 4.5  🏅      │
│  AI Agent 连接 GitHub 的官方 MCP 服务器  │
│                                         │
│  [Starter] [Pro]  ← 适用难度标签        │
│                                         │
│  安装命令: npx @anthropic-ai/mcp-server │
│  [复制]                                 │
│                                         │
│  认证: 🏅 MCPKIT Certified              │
│  [查看详情 →]  [官方链接 →]            │
└─────────────────────────────────────────┘
```

### 6.4 评测雷达图（核心新组件）

**规格：**
- 画布大小：300×300px
- 四轴：易用性（顶）、安全性（右下）、活跃度（左下）、场景匹配（右侧）
- 权重（轴标签旁注明）：易用性 30%、安全性 25%、活跃度 20%、场景匹配 25%
- 填充色：Kit 主色，opacity 0.3
- 边框线：Kit 主色，2px
- 中心点：空心圆，8px
- 刻度：0-5，环状辅助线（`--border` 色，1px）
- 轴标签：14px，`--text-secondary`，外围

**动画：** 页面加载时从 0 向外扩展至实际数值，`600ms ease-out`

**变体（工具详情页单工具）：** 同样四轴，但显示该工具自己的评分

---

## 7. 工具详情页（`/tools/[slug]`）

### 7.1 页面结构

```
┌──────────────────────────────────────────────────────────┐
│  Header                                                  │
├──────────────────────────────────────────────────────────┤
│  Breadcrumb: Home > Kits > 🚀 Ship a SaaS > GitHub MCP   │
├──────────────────────────────────────────────────────────┤
│  工具头部                                                │
│  ┌────────────────────────────────────────────────────┐ │
│  │  Logo  工具名称              [🏅 Certified]       │ │
│  │       @github-mcp · 🚀 Ship a SaaS Kit            │ │
│  │       描述文本...                                  │ │
│  └────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────┤
│  四维雷达图（居中，单独展示）                            │
│  ┌──────────────────────┐                             │
│  │    易用性 4.8         │                             │
│  │   ↗        ↖          │                             │
│  │  场景    雷达图    安全   │                             │
│  │  匹配 4.6       4.3   │                             │
│  │   ↙        ↘          │                             │
│  │    活跃度 4.9         │                             │
│  │                       │                             │
│  │  综合: ⭐ 4.55        │                             │
│  └──────────────────────┘                             │
├──────────────────────────────────────────────────────────┤
│  认证标签 │ 所属 Kit 标签（可点击跳转 Kit 落地页）       │
│  🏅 MCPKIT Certified  │  🚀 Ship a SaaS  │  🤖 AI Coding│
├──────────────────────────────────────────────────────────┤
│  配置示例（可复制 .env）│  安装命令                     │
├──────────────────────────────────────────────────────────┤
│  相关工具（同 Kit 内的其他工具，2-3 个卡片）             │
└──────────────────────────────────────────────────────────┘
```

### 7.2 雷达图规格（同上）

### 7.3 Kit 标签

- 显示工具所属的 Kit（最多 3 个）
- 每个标签：Kit 图标 + Kit 名称，pill 样式，`bg-[--kit-xxx]/10`，文字为对应 Kit 颜色
- 可点击跳转到对应 Kit 落地页

### 7.4 认证标签（质量信号视觉层级最高）

| 状态 | 样式 |
|------|------|
| 🏅 MCPKIT Certified | 金色背景渐变 `linear-gradient(135deg, #f59e0b, #fbbf24)`，白色文字，pulse 光晕动画 |
| ✅ Kit Recommended | 绿色背景 `#22c55e20`，绿色文字 `#22c55e` |
| ✓ Reviewed | 灰色边框，灰色文字 |
| ⏳ Pending | 灰字，无边框 |

---

## 8. 评测体系设计

### 8.1 四维雷达图轴定义

| 轴 | 标签 | 权重 | 说明 |
|----|------|------|------|
| 上 | 易用性 (Ease of Use) | 30% | 配置时间、文档完整性、安装复杂度 |
| 右下 | 安全性 (Security) | 25% | OAuth 权限范围、最小权限原则 |
| 左下 | 活跃度 (Activity) | 20% | GitHub stars、最近更新频率 |
| 右 | 场景匹配 (Scenario Fit) | 25% | 与 Kit 目的的匹配程度 |

### 8.2 综合评分计算

```
综合评分 = (易用性×0.30) + (安全性×0.25) + (活跃度×0.20) + (场景匹配×0.25)
```

显示时四舍五入到小数点后一位，如 `⭐ 4.3`

### 8.3 技术实现

**推荐方案：CSS + SVG（零依赖）**

```html
<!-- 雷达图 SVG 结构 -->
<svg viewBox="0 0 300 300" width="300" height="300">
  <!-- 背景网格（5环） -->
  <!-- 四轴线（中心点 → 4个顶点） -->
  <!-- 评分区域（polygon） -->
  <!-- 数据点 + 分数标签 -->
  <!-- 轴标签（易用性/安全性/活跃度/场景匹配） -->
</svg>
```

备选方案：Chart.js（通过 `chart.js` + `vue-chartjs` 或 React wrapper），适合需要高度定制动画时。

---

## 9. 认证标签设计

### 9.1 标签视觉规范

| 认证 | 视觉 |
|------|------|
| 🏅 MCPKIT Certified | `bg-gradient-to-r from-amber-500 to-yellow-400` text-white，`rounded-full`，padding `4px 12px`，带脉冲光晕 |
| ✅ Kit Recommended | `bg-green-500/10` text-green-400，`rounded-full`，padding `4px 12px` |
| ✓ Reviewed | `border border-[--border]` text-[--text-muted]，`rounded-full`，padding `4px 12px` |
| ⏳ Pending | text-[--text-muted]，`rounded-full`，padding `4px 12px` |

### 9.2 认证标签展示位置

- 工具卡片（列表）：右上角，紧跟工具名称
- 工具详情页：工具头部区，紧跟价格 Badge
- Kit 落地页工具列表：工具名称右侧

---

## 10. 组件清单（v2.0 新增/更新）

| 组件 | 文件 | 说明 |
|------|------|------|
| `BaseLayout.astro` | `src/layouts/` | 全局布局（含 Header / Footer） |
| `Header.astro` | `src/components/` | v2.0 Header（Kit 入口 + Nav） |
| `KitCard.astro` | `src/components/` | **新增** — 首页 Kit 入口大卡片 |
| `DifficultyTab.astro` | `src/components/` | **新增** — Starter/Pro/Enterprise 切换 |
| `KitToolList.astro` | `src/components/` | **新增** — Kit 落地页工具列表 |
| `RadarChart.astro` | `src/components/` | **新增** — 四维评测雷达图（CSS SVG） |
| `CertificationBadge.astro` | `src/components/` | **新增** — 认证标签（Certified/Recommended等） |
| `KitTag.astro` | `src/components/` | **新增** — Kit 归属标签（可点击） |
| `ToolCard.astro` | `src/components/` | 更新 — 新增认证标签和 Kit 标签 |
| `ToolDetailHero.astro` | `src/components/` | **新增** — 工具详情页头部 |
| `KitConfigExample.astro` | `src/components/` | **新增** — 配置示例代码块 |
| `KitTutorial.astro` | `src/components/` | **新增** — Step by Step 教程区 |
| `Footer.astro` | `src/components/` | 无变化 |
| `SearchBox.astro` | `src/components/` | 无变化 |
| `LanguageSwitcher.astro` | `src/components/` | 无变化 |

---

## 11. Tailwind 配置扩展

```js
// tailwind.config.mjs
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0f',
          secondary: '#12121a',
          tertiary: '#1a1a25',
        },
        border: '#2a2a3a',
        text: {
          primary: '#f0f0f5',
          secondary: '#9090a0',
          muted: '#505060',
        },
        accent: {
          DEFAULT: '#6366f1',
          hover: '#818cf8',
        },
        kit: {
          ship: '#f97316',
          coding: '#06b6d4',
          rag: '#8b5cf6',
          browser: '#eab308',
          devops: '#ef4444',
        },
        cert: {
          certified: '#f59e0b',
          recommended: '#22c55e',
          reviewed: '#9090a0',
          pending: '#505060',
        },
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '20px',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'radar-expand': 'radar-expand 600ms ease-out forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(245, 158, 11, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(245, 158, 11, 0)' },
        },
        'radar-expand': {
          from: { transform: 'scale(0)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  },
}
```

---

## 12. 页面路由规划

| 页面 | 路由 | 说明 |
|------|------|------|
| 首页 | `/` | 5 Kit 入口 + 评测展示 |
| Kit 落地页 | `/kits/ship-a-saas/` | 🚀 Ship a SaaS |
| Kit 落地页 | `/kits/ai-coding-agent/` | 🤖 AI Coding Agent |
| Kit 落地页 | `/kits/rag-research/` | 📊 RAG & Research |
| Kit 落地页 | `/kits/browser-automation/` | ⚡ Browser Automation |
| Kit 落地页 | `/kits/devops-monitoring/` | 🔔 DevOps & Monitoring |
| 工具详情 | `/tools/[slug]/` | 四维雷达图 + Kit 标签 |
| 搜索 | `/search/` | 搜索所有工具 |
| 提交 | `/submit/` | 提交工具（已有） |

---

## 13. 实现注意事项

1. **雷达图实现**：优先使用 CSS + SVG（零依赖），每个轴从中心点出发，polygon 动态绑定评分数据。备选 Chart.js。
2. **Kit 卡片布局**：首页桌面端使用 CSS Grid `grid-template-columns: repeat(5, 1fr)` 或 `repeat(3, 1fr)` + `repeat(2, 1fr)` 两行布局。
3. **难度切换**：Tab 切换时通过 URL 参数或状态管理更新工具列表（如 `?level=starter`），保证分享链接有效。
4. **认证标签动画**：`🏅 Certified` 的 pulse-glow 使用 CSS `@keyframes`，不要用 JS。
5. **Kit 色系**：每个 Kit 的主色对应 `--kit-*` token，雷达图填充色、卡片左侧彩条、Kit 标签背景均使用该颜色。
6. **i18n**：v1.0 的 i18n 架构（en.ts / zh.ts + `?lang=`）完全保留，新增 Kit 相关文本追加到翻译文件。
7. **移动端**：Kit 卡片在移动端变为纵向堆叠（每个卡片 100% 宽），雷达图缩小至 200×200px。
8. **SEO**：Kit 落地页有独立 title/description，工具详情页 JSON-LD 含评测分数字段。

---

## 14. 数据模型（对应 PRD v2.0 frontmatter）

```yaml
# 工具 frontmatter（每个工具）
name: github-mcp
title: GitHub MCP
description: AI Agent 连接 GitHub 的官方 MCP 服务器
category: coding-agent
tags: [github, pr, issues, ci, code-review]
kit: ["ai-coding-agent", "ship-a-saas", "devops-monitoring"]
kitRole: "代码管理 + PR review"
evaluation:
  easeOfUse: 4.2    # 1-5
  security: 4.5      # 1-5
  activity: 5.0      # 1-5
  scenarioFit: 4.8  # 1-5
  overall: 4.5      # 加权计算结果
certificationStatus: "certified"  # pending / reviewed / recommended / certified
installCommand: "npx @anthropic-ai/mcp-server-github"
envVars:
  - GITHUB_TOKEN
configExample: |
  {
    "mcpServers": {
      "github": {
        "command": "npx",
        "args": ["-y", "@anthropic-ai/mcp-server-github"]
      }
    }
  }

# Kit frontmatter（每个 Kit）
name: ship-a-saas
title: 🚀 Ship a SaaS
description: 从零开始构建并部署一个 SaaS 产品，30分钟跑通
icon: rocket
color: "#f97316"
levels:
  starter:
    description: "30分钟跑通基础 SaaS"
    tools: [github-mcp, supabase-mcp, cloudflare-pages-mcp]
  pro:
    description: "完整生产级 SaaS"
    tools: [github-mcp, supabase-mcp, cloudflare-r2-mcp, slack-mcp, sentry-mcp]
  enterprise:
    description: "企业级大规模部署"
    tools: [github-mcp, supabase-mcp, cloudflare-r2-mcp, slack-mcp, sentry-mcp, aws-mcp]
```

---

*文档版本：v2.0 | 对应 PRD v2.0 | 下一步：PM/Arch 审核 → Dev 实现*