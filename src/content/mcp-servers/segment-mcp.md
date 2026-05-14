---
title: "Segment MCP"
name: segment-mcp
category: mcp-servers
tags: [segment, cdp, customer-data, analytics, pipelines]
price: paid
website: https://segment.com
logo: 
description: "Segment 客户数据平台 MCP，统一用户数据、事件追踪和数据分发，AI Agent 客户数据管理。"
descriptionEn: "Segment customer data platform MCP unifying user data, event tracking and data distribution for AI Agent customer data management."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @segment/mcp-server"
envVars: ["SEGMENT_WRITE_KEY"]
configExample: |
  {
    "mcpServers": { "segment": { "command": "npx", "args": ["-y", "@segment/mcp-server"], "env": { "SEGMENT_WRITE_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Segment MCP

Segment 客户数据平台 MCP，统一用户数据、事件追踪和数据分发，AI Agent 客户数据管理。
