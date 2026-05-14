---
title: "RudderStack MCP"
name: rudderstack-mcp
category: mcp-servers
tags: [rudderstack, cdp, analytics, events, pipelines]
price: freemium
website: https://rudderstack.com
logo: 
description: "RudderStack 客户数据平台 MCP，事件追踪和数据路由，AI Agent 客户数据管理。"
descriptionEn: "RudderStack customer data platform MCP for event tracking and data routing for AI Agent customer data management."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @rudderstack/mcp-server"
envVars: ["RUDDERSTACK_WRITE_KEY", "RUDDERSTACK_DATA_PLANE"]
configExample: |
  {
    "mcpServers": { "rudderstack": { "command": "npx", "args": ["-y", "@rudderstack/mcp-server"], "env": { "RUDDERSTACK_WRITE_KEY": "xxx", "RUDDERSTACK_DATA_PLANE": "https://xxx.dataplane.rudderstack.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# RudderStack MCP

RudderStack 客户数据平台 MCP，事件追踪和数据路由，AI Agent 客户数据管理。
