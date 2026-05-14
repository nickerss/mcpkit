---
title: "Webhook MCP"
name: webhook-mcp
category: mcp-servers
tags: [webhook, http, events, trigger, automation]
price: free
website: https://github.com/modelcontextprotocol/servers
logo: 
description: "Webhook 触发器 MCP，接收和处理 HTTP Webhook 回调，事件驱动自动化的核心组件。"
descriptionEn: "Webhook trigger MCP for receiving and processing HTTP webhook callbacks — the core component of event-driven automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 3
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @modelcontextprotocol/server-webhook"
envVars: ["WEBHOOK_SECRET"]
configExample: |
  {
    "mcpServers": { "webhook": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-webhook"], "env": { "WEBHOOK_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Webhook MCP

Webhook 触发器 MCP，接收和处理 HTTP Webhook 回调，事件驱动自动化的核心组件。
