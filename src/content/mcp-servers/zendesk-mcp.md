---
title: "Zendesk MCP"
name: zendesk-mcp
category: mcp-servers
tags: [zendesk, customer-support, tickets, helpdesk, crm]
price: paid
website: https://zendesk.com
logo: 
description: "Zendesk 客服工单系统 MCP，创建和管理工单、用户知识库，AI Agent 自动化客服处理。"
descriptionEn: "Zendesk customer support ticket system MCP for creating/managing tickets and knowledge bases for AI Agent support automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "recommended"
installCommand: "npx @zendesk/mcp-server"
envVars: ["ZENDESK_SUBDOMAIN", "ZENDESK_EMAIL", "ZENDESK_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "zendesk": { "command": "npx", "args": ["-y", "@zendesk/mcp-server"], "env": { "ZENDESK_SUBDOMAIN": "mycompany", "ZENDESK_EMAIL": "agent@company.com", "ZENDESK_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Zendesk MCP

Zendesk 客服工单系统 MCP，创建和管理工单、用户知识库，AI Agent 自动化客服处理。
