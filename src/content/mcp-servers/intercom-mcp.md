---
title: "Intercom MCP"
name: intercom-mcp
category: mcp-servers
tags: [intercom, customer-support, chat, crm, conversations]
price: paid
website: https://intercom.com
logo: 
description: "Intercom 客户支持 MCP，管理对话、用户和自动化回复，AI Agent 可自动化客服工作流。"
descriptionEn: "Intercom customer support MCP for managing conversations, users and automated replies for AI Agent support automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @intercom/mcp-server"
envVars: ["INTERCOM_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "intercom": { "command": "npx", "args": ["-y", "@intercom/mcp-server"], "env": { "INTERCOM_ACCESS_TOKEN": "dG9rOxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Intercom MCP

Intercom 客户支持 MCP，管理对话、用户和自动化回复，AI Agent 可自动化客服工作流。
