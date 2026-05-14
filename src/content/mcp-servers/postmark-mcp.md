---
title: "Postmark MCP"
name: postmark-mcp
category: mcp-servers
tags: [postmark, email, transactional, deliverability, api]
price: paid
website: https://postmarkapp.com
logo: 
description: "Postmark 交易邮件发送 MCP，以极高的送达率和快速的 API 响应著称，适合事务性邮件。"
descriptionEn: "Postmark transactional email delivery MCP known for exceptional deliverability and fast API response — ideal for transactional emails."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @postmark/mcp-server"
envVars: ["POSTMARK_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "postmark": { "command": "npx", "args": ["-y", "@postmark/mcp-server"], "env": { "POSTMARK_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Postmark MCP

Postmark 交易邮件发送 MCP，以极高的送达率和快速的 API 响应著称，适合事务性邮件。
