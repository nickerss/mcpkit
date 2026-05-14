---
title: "Mailgun MCP"
name: mailgun-mcp
category: mcp-servers
tags: [mailgun, email, api, transactional, bulk]
price: pay-as-you-go
website: https://mailgun.com
logo: 
description: "Mailgun 邮件 API 平台 MCP，交易邮件和批量邮件，AI Agent 邮件服务。"
descriptionEn: "Mailgun email API platform MCP for transactional and bulk email for AI Agent email services."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @mailgun/mcp-server"
envVars: ["MAILGUN_API_KEY"]
configExample: |
  {
    "mcpServers": { "mailgun": { "command": "npx", "args": ["-y", "@mailgun/mcp-server"], "env": { "MAILGUN_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Mailgun MCP

Mailgun 邮件 API 平台 MCP，交易邮件和批量邮件，AI Agent 邮件服务。
