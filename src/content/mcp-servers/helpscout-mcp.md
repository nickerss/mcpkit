---
title: "HelpScout MCP"
name: helpscout-mcp
category: mcp-servers
tags: [helpscout, support, inbox, mail, customer]
price: paid
website: https://helpscout.com
logo: 
description: "HelpScout 客户邮件支持平台 MCP，共享收件箱和客户管理，AI Agent 高端客服支持。"
descriptionEn: "HelpScout customer mail support platform MCP with shared inbox and customer management for AI Agent premium customer support."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @helpscout/mcp-server"
envVars: ["HELPSCOUT_API_KEY"]
configExample: |
  {
    "mcpServers": { "helpscout": { "command": "npx", "args": ["-y", "@helpscout/mcp-server"], "env": { "HELPSCOUT_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# HelpScout MCP

HelpScout 客户邮件支持平台 MCP，共享收件箱和客户管理，AI Agent 高端客服支持。
