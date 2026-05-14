---
title: "Front MCP"
name: front-mcp
category: mcp-servers
tags: [front, inbox, messaging, collaboration, customer]
price: paid
website: https://front.com
logo: 
description: "Front 统一收件箱平台 MCP，多渠道客户消息聚合，AI Agent 统一客服。"
descriptionEn: "Front unified inbox platform MCP for multi-channel customer message aggregation for AI Agent unified customer support."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @front/mcp-server"
envVars: ["FRONT_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "front": { "command": "npx", "args": ["-y", "@front/mcp-server"], "env": { "FRONT_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Front MCP

Front 统一收件箱平台 MCP，多渠道客户消息聚合，AI Agent 统一客服。
