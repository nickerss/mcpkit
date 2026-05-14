---
title: "Recurly MCP"
name: recurly-mcp
category: mcp-servers
tags: [recurly, subscriptions, billing, recurring, revenue]
price: paid
website: https://recurly.com
logo: 
description: "Recurly 订阅计费平台 MCP，自动化订阅管理和收入确认，AI Agent 订阅经济分析。"
descriptionEn: "Recurly subscription billing platform MCP for automated subscription management and revenue recognition for AI Agent subscription analytics."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @recurly/mcp-server"
envVars: ["RECURLY_API_KEY"]
configExample: |
  {
    "mcpServers": { "recurly": { "command": "npx", "args": ["-y", "@recurly/mcp-server"], "env": { "RECURLY_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Recurly MCP

Recurly 订阅计费平台 MCP，自动化订阅管理和收入确认，AI Agent 订阅经济分析。
