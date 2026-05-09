# UI/UX 设计文档 — MCPKIT

## 1. 文档信息

- 版本：v1.1
- 作者：UID
- 对应 PRD 版本：v1.0（_ARCH.md_ 已确认）
- 日期：2026-05-09
- 更新：v1.1 新增国际化（i18n）支持，项目名变更为 MCPKIT

---

## 2. 设计理念

**简约、专业、高效。** 不炫技，让用户快速找到工具、完成任务。
视觉语言参考 Linear / Vercel 的克制美学：深色主调、精致的卡片、微妙的动效。

---

## 3. 视觉方向

### 3.1 色彩系统

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
| `--free` | `#22c55e` | 免费标识 |
| `--paid` | `#f59e0b` | 付费标识 |

### 3.2 字体

- 主字体：**Inter**（Google Fonts），fallback: `system-ui, sans-serif`
- 代码：**JetBrains Mono**，fallback: `monospace`
- 字号梯度：12 / 14 / 16 / 20 / 24 / 32 / 48px

### 3.3 间距系统

基于 4px 网格：4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px

### 3.4 圆角

- 卡片：`12px`
- 按钮：`8px`
- 标签：`6px`
- 输入框：`8px`

### 3.5 动效

- 卡片 Hover：`transform: translateY(-2px)` + 边框发光，`200ms ease`
- 按钮 Hover：`background` 过渡，`150ms ease`
- 页面切换：淡入淡出，`opacity 0→1`，`300ms`

### 3.6 图标

使用 **Lucide Icons**（轻量、一致），通过 `@lucide/astro` 组件引入。

---

## 4. 布局框架

### 4.1 通用页面结构

```
┌─────────────────────────────────┐
│  Header（固定，60px高）          │
├─────────────────────────────────┤
│  Page Content（自适应）           │
└─────────────────────────────────┘
```

**Header：**
- 左：Logo（MCPKIT 字样 + 简洁图标）
- 中：导航（Home / MCP Servers / AI Tools / Deployment / Search）
- 右：语言切换 + 提交工具按钮（CTA）

### 4.2 响应式断点

| 断点 | 宽度 | 布局变化 |
|------|------|---------|
| Mobile | `< 640px` | 单列，卡片堆叠 |
| Tablet | `640px - 1024px` | 双列网格 |
| Desktop | `> 1024px` | 三列网格，侧边筛选栏 |

---

## 5. 首页（`/`）

```
┌──────────────────────────────────────────────────────────┐
│  Header                                                  │
├──────────────────────────────────────────────────────────┤
│  Hero（居中，垂直居中于首屏）                              │
│  ┌──────────────────────────────────────────────────┐   │
│  │  Slogan: "AI Agent Tools for Indie Developers"    │   │
│  │  搜索框（带 icon，placeholder="Search tools..."） │   │
│  └──────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────┤
│  三大分类入口（横向卡片）                                  │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐             │
│  │ MCP       │ │ AI Tools  │ │ Deployment│             │
│  │ Servers   │ │           │ │           │             │
│  │ 50+ tools │ │ 30+ tools │ │ 30+ tools │             │
│  └───────────┘ └───────────┘ └───────────┘             │
├──────────────────────────────────────────────────────────┤
│  编辑精选（Section Title + 横向滚动卡片）                   │
│  ┌────────┐ ┌────────┐ ┌────────┐                      │
│  │Featured│ │Featured│ │Featured│                      │
│  └────────┘ └────────┘ └────────┘                      │
├──────────────────────────────────────────────────────────┤
│  最新收录（Grid，3列）                                    │
│  ... 工具卡片 ...                                        │
├──────────────────────────────────────────────────────────┤
│  Footer（简洁，单行）                                     │
└──────────────────────────────────────────────────────────┘
```

**Hero 区域：**
- 背景：渐变暗色（`--bg-primary` → `#0f0f18`），上方有微妙的网格纹理
- Slogan：32px，字重 700，白色 — "AI Agent Tools for Indie Developers"
- 搜索框：宽度 560px，24px 圆角，内置搜索图标，placeholder "Search tools..."
- 搜索框 focus 时边框变为 `--accent`

**分类入口卡片：**
- 尺寸：240px × 140px
- 背景：`--bg-secondary`，边框 1px `--border`
- Hover：边框变为 `--accent`，背景变为 `--bg-tertiary`
- 包含：分类 icon（32px）、分类名称（20px bold）、工具数量（14px muted）

**编辑精选区：**
- Section Title："Featured" + 右侧"View all →"链接

---

## 6. 工具卡片组件（ToolCard）

**视觉规格：**

```
┌─────────────────────────────────────────┐
│  ┌────┐                                │
│  │Logo│  工具名称              [Free]   │
│  └────┘  简短描述（1行，截断）           │
│                                         │
│  [database] [local]                    │
│                                         │
│  View details →                       │
└─────────────────────────────────────────┘
```

**详细规格：**

| 属性 | 规格 |
|------|------|
| 容器 | `bg-[--bg-secondary]` `border border-[--border]` `rounded-xl` `p-4` |
| Logo | 40×40px，`object-contain`，圆角 8px |
| 工具名称 | 16px，字重 600，`--text-primary` |
| 价格 Badge | 12px，圆角 6px，padding 4px 8px；Free=`bg-green/10 text-green`，Paid=`bg-amber/10 text-amber` |
| 描述 | 14px，`--text-secondary`，单行截断 |
| Tags | 12px，`bg-[--tag-bg]` `text-[--text-secondary]`，圆角 6px，gap 6px |
| 底部链接 | 14px，`--accent`，hover 变色，文本 "View details →" |

**Hover 效果：**
- 整体：`translateY(-2px)` + `box-shadow: 0 8px 24px rgba(99,102,241,0.15)`
- 边框颜色变为 `--accent`（opacity 0.4）

---

## 7. 分类列表页（以 `/mcp-servers/` 为例）

```
┌──────────────────────────────────────────────────────────┐
│  Header                                                  │
├──────────────────────────────────────────────────────────┤
│  页面 Title："MCP Servers" + 工具总数                    │
├────────────┬────────────────────────────────────────────┤
│  筛选侧边栏 │  工具网格（3列）                            │
│            │  ┌────┐ ┌────┐ ┌────┐                       │
│  分类        │  │Card│ │Card│ │Card│                      │
│  ○ All      │  └────┘ └────┘ └────┘                      │
│  ○ Database │  ┌────┐ ┌────┐ ┌────┐                       │
│  ○ GitHub   │  │Card│ │Card│ │Card│                      │
│  ...        │  └────┘ └────┘ └────┘                      │
│            │                                            │
│  价格        │  ────── 分页 ──────                        │
│  ○ All      │                                            │
│  ○ Free     │                                            │
│  ○ Paid     │                                            │
│            │                                            │
│  标签（热门） │                                            │
│  [database] │                                            │
│  [api]      │                                            │
└────────────┴────────────────────────────────────────────┘
```

**侧边栏规格：**
- 宽度：240px（桌面），移动端隐藏（变为顶部筛选 dropdown）
- 筛选区块之间有分割线
- 选项：14px，当前选中项 `text-[--accent]` + 左边竖线

**筛选选项文案（英文默认）：**
- 分类：Category / All / Database / GitHub / API / ...
- 价格：Price / All / Free / Freemium / Paid
- 标签：Tags / Popular

**工具网格：**
- 桌面：3 列，gap 20px
- 平板：2 列
- 移动：1 列

**分页：**
- 简单样式：页码 + Prev / Next
- 每页 24 条

---

## 8. 工具详情页（`/tools/[slug]`）

```
┌──────────────────────────────────────────────────────────┐
│  Header                                                  │
├──────────────────────────────────────────────────────────┤
│  Breadcrumb：Home > MCP Servers > mcp-sqlite             │
├──────────────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────────────┐ │
│  │  ┌────┐  工具名称           [Free]  [Website →]   │ │
│  │  │Logo│  @mcp-sqlite · Database                    │ │
│  │  └────┘                                            │ │
│  │                                                    │ │
│  │  描述：A lightweight local SQLite MCP Server...    │ │
│  │                                                    │ │
│  │  Scenarios:                                       │ │
│  │  • Local database debugging                       │ │
│  │  • Offline data querying                          │ │
│  └────────────────────────────────────────────────────┘ │
├──────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────────────────┐ │
│  │  Install Command  │  │  Related Tools              │ │
│  │  npm install...  │  │  ┌────┐ ┌────┐             │ │
│  │  [Copy]          │  │  │Card│ │Card│             │ │
│  └──────────────────┘  │  └────┘ └────┘             │ │
│                       └──────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

**详情页区块：**

| 区块 | 规格 |
|------|------|
| Logo | 64×64px，圆角 12px |
| 名称 | 28px，字重 700 |
| 价格 Badge | 16px |
| 描述 | 16px，`--text-secondary`，可多行 |
| 使用场景（Scenarios） | 无序列表，16px |
| 安装命令区 | 深色背景 `#0d0d14`，16px JetBrains Mono，右侧复制按钮 |
| 相关工具（Related Tools） | 2 列 ToolCard 网格 |

---

## 9. 搜索页（`/search`）

- 搜索框居中（与首页 Hero 一致）
- 结果：无结果时显示插画 + 提示文字 "No results found. Try a different keyword."
- 有结果时：输入框下方直接显示匹配列表（单列，间距宽松）
- 结果项包含：Logo + 名称 + 简短描述 + 分类标签

**搜索页表单文案（英文默认）：**
- Placeholder: "Search tools..."
- 无结果提示："No results for '[keyword]'. Check spelling or try a broader term."

---

## 10. 提交页（`/submit`）

```
┌──────────────────────────────────────────────────────────┐
│  Header                                                  │
├──────────────────────────────────────────────────────────┤
│  Title: "Submit a Tool" + subtitle                      │
├──────────────────────────────────────────────────────────┤
│  表单（居中，最大宽度 640px）                              │
│  ┌────────────────────────────────────────────────────┐ │
│  │ Tool Name: ________________________                │ │
│  │ Website URL: ________________________              │ │
│  │ Category: _________ (dropdown)                    │ │
│  │ Price: _________ (Free / Freemium / Paid)         │ │
│  │ Description: ____________________ (textarea)       │ │
│  │ Tags: _________ (comma separated)                  │ │
│  │                                                    │ │
│  │ [Submit]                                           │ │
│  └────────────────────────────────────────────────────┘ │
│                                                      │
│  底部说明：Submitted tools are reviewed by admins.   │
└──────────────────────────────────────────────────────────┘
```

**表单规格：**
- 输入框：16px 圆角，`bg-[--bg-secondary]` `border border-[--border]`，focus 时 border 变为 `--accent`
- Label：14px，字重 500，上方 8px 间距
- 提交按钮：`bg-[--accent]` `text-white` `rounded-lg` `px-6 py-3`

---

## 11. 组件清单

| 组件 | 文件 | 说明 |
|------|------|------|
| `BaseLayout.astro` | `src/layouts/` | 全局布局，含 Header / Footer |
| `Header.astro` | `src/components/` | 固定顶部导航栏 |
| `ToolCard.astro` | `src/components/` | 工具卡片，用于列表和详情页相关工具 |
| `CategoryCard.astro` | `src/components/` | 分类入口大卡片（首页用） |
| `FeaturedSection.astro` | `src/components/` | 编辑精选区块 |
| `HeroSection.astro` | `src/components/` | 首页 Hero 搜索区 |
| `FilterSidebar.astro` | `src/components/` | 分类列表页侧边筛选 |
| `SearchBox.astro` | `src/components/` | 搜索框组件 |
| `PriceBadge.astro` | `src/components/` | 免费/付费标识 |
| `TagList.astro` | `src/components/` | 标签列表 |
| `InstallCommand.astro` | `src/components/` | 安装命令展示 + 复制按钮 |
| `SubmitForm.astro` | `src/components/` | 工具提交表单 |
| `Footer.astro` | `src/components/` | 页面底部 |
| `LanguageSwitcher.astro` | `src/components/` | 语言切换下拉组件 |

---

## 12. Tailwind 配置扩展

```js
// tailwind.config.mjs 扩展
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
        free: '#22c55e',
        paid: '#f59e0b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
}
```

---

## 13. 国际化（i18n）架构

### 13.1 核心策略

| 维度 | 决策 |
|------|------|
| 默认语言 | English |
| 语言切换 | Header 右上角下拉组件，无刷新切换 |
| URL 模式 | 不分路径（保持单一路由） |
| 持久化 | localStorage 存储语言偏好 |
| 首次渲染 | 检测 `Accept-Language` header，无则默认 EN |

### 13.2 语言切换器设计规格

**UI 位置**：Header 右侧，与提交按钮并排或左侧

**触发按钮样式：**
```
┌────────────┐
│  EN ▼     │  ← 32px 高，右侧 chevron-down icon
└────────────┘
```

**下拉菜单样式：**
```
┌─────────────────┐
│ ✓ English       │
│   中文          │
└─────────────────┘
```
- 下拉菜单：`bg-[--bg-secondary]` border，`rounded-lg` shadow，`min-width: 120px`
- 选中项：`text-[--accent]` + 左侧 checkmark icon
- Hover：`bg-[--bg-tertiary]`

**交互逻辑：**
- 点击按钮展开下拉，再次点击或选完后收起
- 选中后页面所有文本即时切换，无刷新
- 语言偏好存入 `localStorage`（key: `mcpkit-lang`）

### 13.3 翻译内容范围

所有用户可见文本均需中英文版本：

| 文本类型 | 英文 | 中文 |
|----------|------|------|
| 导航 | Home, MCP Servers, AI Tools, Deployment, Search, Submit | 首页, MCP Servers, AI 工具, 部署工具, 搜索, 提交 |
| 页面标题 | Featured, Latest, All Tools, Submit a Tool | 精选, 最新收录, 全部工具, 提交工具 |
| 按钮 | View details, Submit, Copy, Prev, Next, View all | 查看详情, 提交, 复制, 上一页, 下一页, 查看全部 |
| 表单 Label | Tool Name, Website URL, Category, Price, Description, Tags | 工具名称, 官网地址, 分类, 价格, 描述, 标签 |
| 提示语 | No results found, Submit successful, Copied! | 未找到结果, 提交成功, 已复制！ |
| 筛选选项 | All, Free, Freemium, Paid, Popular Tags | 全部, 免费, Freemium, 付费, 热门标签 |
| 空状态 | No tools in this category yet. | 该分类下暂无工具。 |
| 价格 | Free, Freemium, Paid | 免费, Freemium, 付费 |

### 13.4 翻译文件结构（供 DEV 参考）

```
src/
  i18n/
    en.json    # 英文翻译
    zh.json     # 中文翻译
  components/
    LanguageSwitcher.astro
```

**en.json 示例：**
```json
{
  "nav": {
    "home": "Home",
    "mcpServers": "MCP Servers",
    "aiTools": "AI Tools",
    "deployment": "Deployment",
    "search": "Search",
    "submit": "Submit"
  },
  "home": {
    "heroSlogan": "AI Agent Tools for Indie Developers",
    "searchPlaceholder": "Search tools..."
  },
  "common": {
    "viewDetails": "View details →",
    "submit": "Submit",
    "copy": "Copy",
    "copied": "Copied!"
  }
}
```

---

## 14. 实现注意事项

1. **图片处理**：ToolCard 的 Logo 使用 `object-contain`，不裁剪；如果工具无 Logo，用分类 icon 占位
2. **SEO**：每个页面 `<head>` 含独立 title/description；详情页 JSON-LD；`lang="en"` 属性默认
3. **性能**：首屏图片需 LCP 优化；ToolCard 懒加载
4. **无障碍**：所有交互元素有 `:focus-visible` 样式，图标按钮带 `aria-label`
5. **移动端**：筛选侧边栏在移动端变为顶部 Select 下拉；卡片单列
6. **Pagefind 集成**：搜索框 `data-pagefind-search` 属性，搜索结果页用 Pagefind JS 渲染
7. **i18n**：翻译 JSON 文件统一存放于 `src/i18n/`；语言偏好用 `localStorage` 键 `mcpkit-lang`

---

*文档版本：v1.1 | 更新内容：项目名变更为 MCPKIT，新增国际化（i18n）支持*