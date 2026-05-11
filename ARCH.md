# MCPKIT v2.0 技术设计文档

## 1. 文档信息

- 版本：v2.0
- 日期：2026-05-11
- 对应 PRD 版本：v2.0
- 状态：**待 DEV 确认后开发**

---

## 2. 总体架构

### 2.1 架构定位

本项目为**内容型静态网站**，以 Astro 为核心框架，数据以结构化 Markdown/JSON 存储于 GitHub 仓库，部署至 Cloudflare Pages。无自建后端服务。

**v2.0 核心变化：** 从工具目录升级为 Kit 工具箱，新增评测体系（机器自动评分）和认证体系。

### 2.2 架构图

```mermaid
graph TD
    用户 --> Cloudflare Pages --> Astro静态站点
    Astro站点 --> Pagefind索引 --> 搜索结果
    Astro站点 --> Kit数据[Kit frontmatter<br/>Markdown]
    Astro站点 --> 工具数据[工具 frontmatter<br/>含评测字段]
    用户 --> 工具提交 --> Formspree --> GitHub Issues --> 审核 --> 更新工具数据
    评测系统 --> GitHub_API[GitHub API<br/>自动评分]
    评测系统 --> 评测数据[evaluation<br/>frontmatter]
    RadarChart组件 --> 评测雷达图[四维雷达图<br/>CSS SVG]
    认证系统 --> 认证标签[Certified / Kit Rec. / Reviewed / Pending]
```

### 2.3 核心技术决策

| 决策点 | 选用方案 | 理由 |
|---|---|---|
| 框架 | Astro v4.x（静态模式）| v1.0 已选，无需变更 |
| UI | Tailwind CSS v3 | v1.0 已选，无需变更 |
| 搜索 | Pagefind | v1.0 已选，无需变更 |
| 内容存储 | GitHub 仓库（content/）| v1.0 已选，新增 Kit 数据模型 |
| 部署 | Cloudflare Pages | v1.0 已选，无需变更 |
| 评测 | GitHub API 自动评分 | 机器评测，无需人工 |
| 雷达图 | CSS + SVG（零依赖）| UI.md v2.0 确定 |
| 认证 | frontmatter 字段 | 数据驱动，无需后端 |

---

## 3. 数据模型

### 3.1 工具 frontmatter（content/tools/*.md）

```yaml
---
name: github-mcp                    # 唯一标识（slug）
title: GitHub MCP                  # 显示名称
description: AI Agent 连接 GitHub 的官方 MCP 服务器
category: coding-agent             # 工具分类
tags: [github, pr, issues, ci]    # 搜索标签
website: https://github.com/modelcontextprotocol/servers
logo: https://github.com/modelcontextprotocol.png
# Kit 关联（新增）
kit: [ai-coding-agent, ship-a-saas, devops-monitoring]  # 关联 Kit slug 列表
kitRole: "代码管理 + PR review"    # 该工具在此 Kit 中的角色
# 评测字段（新增）
evaluation:
  easeOfUse: 4.2      # 易用性 1-5
  security: 4.5        # 安全性 1-5
  activity: 5.0        # 活跃度 1-5
  scenarioFit: 4.8    # 场景匹配 1-5
  overall: 4.5        # 综合评分 = 加权计算
# 认证状态（新增）
certificationStatus: "certified"  # pending / reviewed / recommended / certified
# 安装配置（新增）
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
---

# 工具详情内容（Markdown）
```

### 3.2 Kit frontmatter（content/kits/*.md）

```yaml
---
name: ship-a-saas                  # Kit slug
title: 🚀 Ship a SaaS             # 显示名称
description: 从零开始构建并部署一个 SaaS 产品，30分钟跑通
icon: rocket                       # Lucide icon 名称
color: "#f97316"                  # Kit 主色（用于雷达图/卡片）
levels:
  starter:
    description: "30分钟跑通基础 SaaS"
    tools: [github-mcp, supabase-mcp, cloudflare-pages-mcp]
  pro:
    description: "完整生产级 SaaS"
    tools: [github-mcp, supabase-mcp, cloudflare-r2-mcp, slack-mcp, sentry-mcp]
  enterprise:
    description: "企业级大规模部署"
    tools: [github-mcp, supabase-mcp, cloudflare-r2-mcp, slack-mcp, sentry-mcp, aws-mcp, pagerduty-mcp]
tutorial: |
  ## Step 1: 配置 GitHub MCP
  ...
---
```

### 3.3 目录结构

```
content/
├── kits/
│   ├── ship-a-saas.md
│   ├── ai-coding-agent.md
│   ├── rag-research.md
│   ├── browser-automation.md
│   └── devops-monitoring.md
└── tools/
    ├── github-mcp.md
    ├── supabase-mcp.md
    ├── firecrawl-mcp.md
    └── ...
```

**v1.0 数据（mcp-servers/ai-tools/deployment）：完全废弃，从 content/tools/ 从零录入。**

---

## 4. 页面路由

| 页面 | 路由 | 数据来源 |
|------|------|---------|
| 首页 | `/` | 读取所有 kits/ frontmatter |
| Kit 落地页 | `/kits/[slug]` | 读取对应 kit frontmatter + 关联工具列表 |
| 工具详情页 | `/tools/[slug]` | 读取工具 frontmatter |
| 搜索 | `/search` | Pagefind 索引 |

**Kit slug 列表：**
- `ship-a-saas`
- `ai-coding-agent`
- `rag-research`
- `browser-automation`
- `devops-monitoring`

---

## 5. 评测体系

### 5.1 评测维度与权重

| 轴 | 维度 | 权重 | 数据来源 |
|----|------|------|---------|
| 上（0°）| 易用性 | 30% | 文档完整性 + 配置复杂度 |
| 右下（135°）| 安全性 | 25% | OAuth scopes |
| 左下（225°）| 活跃度 | 20% | GitHub stars + 最近更新 |
| 右（270°）| 场景匹配 | 25% | 与 Kit 目的的匹配程度 |

### 5.2 综合评分公式

```
综合评分 = round((易用性×0.30 + 安全性×0.25 + 活跃度×0.20 + 场景匹配×0.25), 1)
```

### 5.3 机器自动评测算法

```typescript
// 通过 GitHub API 获取元数据，自动计算活跃度
async function calculateActivity(owner: string, repo: string): Promise<number> {
  const data = await fetchGitHub(`/repos/${owner}/${repo}`);
  const stars = data.stargazers_count;
  const lastPush = new Date(data.pushed_at);
  const daysSinceUpdate = (Date.now() - lastPush.getTime()) / (1000 * 60 * 60 * 24);

  // stars: 0=1, 100=2, 1000=3, 10000=4, 50000+=5
  const starsScore = stars < 100 ? 1 : stars < 1000 ? 2 : stars < 10000 ? 3 : stars < 50000 ? 4 : 5;
  // 更新频率: ≤30天=5, ≤90天=4, ≤180天=3, ≤365天=2, >365天=1
  const updateScore = daysSinceUpdate <= 30 ? 5 : daysSinceUpdate <= 90 ? 4 : daysSinceUpdate <= 180 ? 3 : daysSinceUpdate <= 365 ? 2 : 1;

  return (starsScore + updateScore) / 2;
}
```

### 5.4 认证状态

| 状态 | 条件 | 标签 |
|------|------|------|
| certified | overall ≥ 4.0 + 人工审核通过 | 🏅 MCPKIT Certified |
| recommended | overall ≥ 3.5 + 被 Kit 收录 | ✅ Kit Recommended |
| reviewed | 人工审核通过 | ✓ Reviewed |
| pending | 默认状态 | ⏳ Pending |

---

## 6. RadarChart 组件技术实现

### 6.1 SVG 结构

四轴雷达图，角度：上(0°)、右下(135°)、左下(225°)、右(270°)。

```html
<svg viewBox="0 0 300 300" width="300" height="300">
  <!-- 背景网格：5 个同心正方形（旋转45°）-->
  <g class="grid">
    <polygon points="150,20 280,150 150,280 20,150" fill="none" stroke="#2a2a3a" stroke-width="1"/>
    <polygon points="150,60 240,150 150,240 60,150" fill="none" stroke="#2a2a3a" stroke-width="1"/>
    <polygon points="150,100 200,150 150,200 100,150" fill="none" stroke="#2a2a3a" stroke-width="1"/>
  </g>
  <!-- 四轴线 -->
  <g class="axes">
    <line x1="150" y1="150" x2="150" y2="20" stroke="#2a2a3a" stroke-width="1"/>
    <line x1="150" y1="150" x2="280" y2="150" stroke="#2a2a3a" stroke-width="1"/>
    <line x1="150" y1="150" x2="20" y2="150" stroke="#2a2a3a" stroke-width="1"/>
    <line x1="150" y1="150" x2="150" y2="280" stroke="#2a2a3a" stroke-width="1"/>
  </g>
  <!-- 评分区域（polygon）-->
  <polygon
    points="150,42 261,239 60,239 150,261"
    fill="rgba(249,115,22,0.3)"
    stroke="#f97316"
    stroke-width="2"
    class="radar-area"
  />
  <!-- 轴标签 -->
  <text x="150" y="10" text-anchor="middle" class="axis-label">易用性 30%</text>
  <text x="295" y="155" text-anchor="start" class="axis-label">安全性 25%</text>
  <text x="5" y="155" text-anchor="end" class="axis-label">活跃度 20%</text>
  <text x="150" y="295" text-anchor="middle" class="axis-label">场景匹配 25%</text>
</svg>
```

### 6.2 评分到坐标的计算

```typescript
function valueToPoint(value: number, index: number, total: number, radius: number): {x: number, y: number} {
  // 四轴：index 0=上, 1=右下, 2=左下, 3=右
  const angles = [270, 0, 90, 180]; // 度数（SVG y轴向下）
  const angle = (angles[index] * Math.PI) / 180;
  const r = (value / 5) * radius;
  return {
    x: 150 + r * Math.cos(angle),
    y: 150 + r * Math.sin(angle)
  };
}
```

### 6.3 radar-expand 动画

```css
.radar-area {
  animation: radar-expand 600ms ease-out forwards;
  transform-origin: center;
  transform: scale(0);
  opacity: 0;
}
@keyframes radar-expand {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```

---

## 7. 难度切换实现

### 7.1 URL 参数设计

Kit 落地页难度通过 URL 参数切换：

```
/kits/ship-a-saas          → 默认显示 Starter
/kits/ship-a-saas?level=starter
/kits/ship-a-saas?level=pro
/kits/ship-a-saas?level=enterprise
```

### 7.2 Astro 中的读取

```astro
---
const { level } = Astro.url.searchParams;
const activeLevel = level || 'starter';
const kit = await getKit(Astro.params.slug);
const currentTools = kit.levels[activeLevel].tools;
---
```

---

## 8. 组件清单

| 组件 | 路径 | 说明 |
|------|------|------|
| RadarChart.astro | src/components/ | 四维评测雷达图，CSS SVG |
| KitCard.astro | src/components/ | 首页 Kit 入口大卡片 |
| DifficultyTab.astro | src/components/ | Starter/Pro/Enterprise 切换 |
| KitToolList.astro | src/components/ | Kit 落地页工具列表 |
| CertificationBadge.astro | src/components/ | 认证标签（4状态）|
| KitTag.astro | src/components/ | Kit 归属标签（可点击）|
| KitDetailHero.astro | src/components/ | Kit 落地页 Hero |
| KitConfigExample.astro | src/components/ | .env 配置示例 |
| KitTutorial.astro | src/components/ | Step by Step 教程 |
| ToolDetailHero.astro | src/components/ | 工具详情页 Hero（更新）|
| ToolCard.astro | src/components/ | 工具卡片（更新：新增认证+Kit标签）|
| Header.astro | src/components/ | v2.0（Kit 导航入口）|
| Footer.astro | src/components/ | 无变化 |
| LanguageSwitcher.astro | src/components/ | 无变化 |
| BaseLayout.astro | src/layouts/ | 全局布局（无变化）|

---

## 9. i18n

v1.0 架构完全保留，新增 Kit 相关文本追加到翻译文件：

```typescript
// src/i18n/en.ts
export const en = {
  // v1.0
  nav: { home: 'Home', tools: 'All Tools', submit: 'Submit Tool' },
  hero: { title: 'Your AI Agent Toolkit', subtitle: '...' },
  // v2.0 Kit
  kit: {
    starter: 'Starter',
    pro: 'Pro',
    enterprise: 'Enterprise',
    certified: 'MCPKIT Certified',
    kitRecommended: 'Kit Recommended',
    reviewed: 'Reviewed',
    pending: 'Pending',
    evaluation: 'Evaluation',
    easeOfUse: 'Ease of Use',
    security: 'Security',
    activity: 'Activity',
    scenarioFit: 'Scenario Fit',
    install: 'Install',
    config: 'Config',
    tutorial: 'Tutorial',
  },
  // ...
};
```

---

## 10. 页面构建

### 10.1 首页构建

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import KitCard from '../components/KitCard.astro';
import { getCollection } from 'astro:content';

const kits = await getCollection('kits');
---

<BaseLayout>
  <div class="kit-grid">
    {kits.map(kit => (
      <KitCard
        title={kit.data.title}
        icon={kit.data.icon}
        color={kit.data.color}
        level="starter"
        toolCount={kit.data.levels.starter.tools.length}
      />
    ))}
  </div>
</BaseLayout>
```

### 10.2 Kit 落地页构建

```astro
---
// src/pages/kits/[slug].astro
import BaseLayout from '../../layouts/BaseLayout.astro';
import DifficultyTab from '../../components/DifficultyTab.astro';
import KitToolList from '../../components/KitToolList.astro';
import RadarChart from '../../components/RadarChart.astro';
import { getCollection } from 'astro:content';

const { slug } = Astro.params;
const kit = await getCollection('kits', k => k.slug === slug);
const [kitData] = kit;
const { level } = Astro.url.searchParams;
const activeLevel = level || 'starter';

const toolIds = kitData.data.levels[activeLevel].tools;
const tools = await Promise.all(
  toolIds.map(id => getCollection('tools', t => t.slug === id))
);
---

<BaseLayout>
  <DifficultyTab levels={['starter', 'pro', 'enterprise']} active={activeLevel} />
  <div class="kit-layout">
    <KitToolList tools={tools} kitColor={kitData.data.color} />
    <RadarChart tools={tools} kitColor={kitData.data.color} />
  </div>
</BaseLayout>
```

---

## 11. 技术风险与应对

| 风险 | 应对 |
|------|------|
| 雷达图 polygon 坐标计算错误 | 先做数学验证，单独测试组件 |
| 5 Kit × 3 难度 = 15 状态管理 | URL 参数驱动，SSR 友好 |
| 评测数据未填充，雷达图无意义 | 开发时用 mock 数据，CW 后置填充 |
| GitHub API 限速 | 机器评测结果缓存，提交时触发重新计算 |

---

## 12. 开发步骤（DEV 参考）

1. **定义 Kit 数据模型** — 新建 content/kits/ 目录 + 5个 Kit frontmatter
2. **RadarChart 组件** — CSS SVG 实现，单独验证
3. **KitCard 组件** — 首页入口卡片
4. **首页重构** — 5个 Kit 卡片布局
5. **Kit 落地页** — 难度 Tab + 工具列表
6. **工具详情页** — 新增雷达图 + Kit 标签 + 认证标签
7. **i18n 更新** — 新增 Kit 相关翻译
8. **构建验证** — npm run build 通过
