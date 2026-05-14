---
title: "SendGrid MCP"
name: sendgrid-mcp
category: mcp-servers
tags: [sendgrid, email, transactional, marketing, api]
price: freemium
website: https://sendgrid.com
logo: 
description: "SendGrid 邮件发送 MCP，交易邮件和营销邮件发送，支持模板和统计报告。"
descriptionEn: "SendGrid email delivery MCP for transactional and marketing emails with template and analytics support."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @sendgrid/mcp-server"
envVars: ["SENDGRID_API_KEY"]
configExample: |
  {
    "mcpServers": { "sendgrid": { "command": "npx", "args": ["-y", "@sendgrid/mcp-server"], "env": { "SENDGRID_API_KEY": "SG.xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# SendGrid MCP

SendGrid 邮件发送 MCP，交易邮件和营销邮件发送，支持模板和统计报告。
