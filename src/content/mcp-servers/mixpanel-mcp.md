---
title: "Mixpanel MCP"
name: mixpanel-mcp
category: mcp-servers
tags: [mixpanel, analytics, product-analytics, events, insights]
price: freemium
website: https://mixpanel.com
logo: 
description: "Mixpanel 产品分析 MCP，追踪用户事件、漏斗分析和Cohort 报告，AI Agent 数据驱动决策。"
descriptionEn: "Mixpanel product analytics MCP tracking user events, funnel analysis and cohort reports for AI Agent data-driven decisions."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @mixpanel/mcp-server"
envVars: ["MIXPANEL_PROJECT_TOKEN", "MIXPANEL_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "mixpanel": { "command": "npx", "args": ["-y", "@mixpanel/mcp-server"], "env": { "MIXPANEL_PROJECT_TOKEN": "xxx", "MIXPANEL_CLIENT_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Mixpanel MCP

Mixpanel 产品分析 MCP，追踪用户事件、漏斗分析和Cohort 报告，AI Agent 数据驱动决策。
