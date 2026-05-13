---
title: ⚡ Browser Automation
name: browser-automation
icon: zap
color: "#eab308"
description: AI 操作浏览器自动化重复 Web 任务——填写表单、批量操作、数据抓取
tagline:
  zh: "让 AI Agent 操作浏览器完成重复性 web 任务——填写表单、批量操作、数据抓取"
  en: "AI agents operating browsers to automate repetitive web tasks"
pros:
  zh:
    - "无需 API：直接操作浏览器，绕过没有 API 的网站"
    - "无视反爬：模拟真实用户行为，绕过反爬虫机制"
    - "零手动操作：批量任务全自动，大幅节省人力"
  en:
    - "No API needed: Direct browser control for sites without APIs"
    - "Anti-scraping bypass: Simulates real user behavior"
    - "Zero manual work: Batch tasks fully automated"
cons:
  zh:
    - "速度慢：比原生 API 慢数倍"
    - "资源占用高：需运行完整浏览器实例"
    - "不稳定：页面结构变化可能导致任务失败"
  en:
    - "Slow: Orders of magnitude slower than native APIs"
    - "Resource heavy: Requires full browser instance"
    - "Fragile: Page structure changes may break tasks"
targetAudience:
  zh: "运营人员、爬虫工程师、QA 自动化测试，需要批量操作 Web 的团队"
  en: "Operations teams, scraping engineers, QA automation testers"
levels:
  starter:
    description: "5分钟配置，浏览器自动化起步"
    tools: [playwright-mcp, claude-code, filesystem-mcp]
  pro:
    description: "完整浏览器自动化工作流"
    tools: [playwright-mcp, claude-code, filesystem-mcp, slack-mcp, supabase-mcp]
  enterprise:
    description: "大规模多浏览器协作"
    tools: [playwright-mcp, claude-code, filesystem-mcp, slack-mcp, supabase-mcp, docker-mcp]
testimonials:
    - quote: "用 Playwright MCP 自动化了我每天要做的表单提交，节省了 2 小时/天。"
      author: "@qa_engineer"
      name: "陈工"
      role: "QA 工程师"
      rating: 5
    - quote: "批量数据采集的场景下，这套 Kit 比 API 还稳定，不担心反爬。"
      author: "@ops_lee"
      name: "李运营"
      role: "电商运营"
      rating: 4
configExample: |
      {
        "mcpServers": {
          "playwright": {
            "command": "npx",
            "args": ["-y", "@microsoft/playwright-mcp-server"],
            "env": { "PLAYWRIGHT_BROWSERS_PATH": "/tmp/playwright" }
          },
          "claude-code": {
            "command": "claude-code",
            "env": { "ANTHROPIC_API_KEY": "sk-ant-xxx" }
          },
          "filesystem": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-filesystem", "/tmp/automation"]
          }
        }
      }

---

# ⚡ Browser Automation
AI 操作浏览器自动化重复 Web 任务——填写表单、批量操作、数据抓取