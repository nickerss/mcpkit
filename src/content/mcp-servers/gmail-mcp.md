---
title: "Gmail MCP"
name: gmail-mcp
category: mcp-servers
tags: [gmail, email, google, automation, inbox]
price: freemium
website: https://mail.google.com
logo: 
description: "Gmail 邮件 MCP，读取、发送和管理邮件，AI Agent 邮件处理和自动化工作流。"
descriptionEn: "Gmail email MCP for reading, sending and managing emails as an AI Agent email processing and automation workflow tool."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @google/gmail-mcp"
envVars: ["GOOGLE_GMAIL_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "gmail": { "command": "npx", "args": ["-y", "@google/gmail-mcp"], "env": { "GOOGLE_GMAIL_CREDENTIALS": "/path/to/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Gmail MCP

Gmail 邮件 MCP，读取、发送和管理邮件，AI Agent 邮件处理和自动化工作流。
