---
title: "NATS MCP"
name: nats-mcp
category: mcp-servers
tags: [nats, messaging, publish, subscribe,  lightweight]
price: free
website: https://nats.io
logo: 
description: "NATS 轻量级消息平台 MCP，发布/订阅消息系统，AI Agent 轻量消息。"
descriptionEn: "NATS lightweight messaging platform MCP for publish/subscribe messaging system for AI Agent lightweight messaging."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @nats/mcp-server"
envVars: ["NATS_URL"]
configExample: |
  {
    "mcpServers": { "nats": { "command": "npx", "args": ["-y", "@nats/mcp-server"], "env": { "NATS_URL": "nats://localhost:4222" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# NATS MCP

NATS 轻量级消息平台 MCP，发布/订阅消息系统，AI Agent 轻量消息。
