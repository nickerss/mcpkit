---
title: "Turso MCP"
name: turso-mcp
category: mcp-servers
tags: [turso, sqlite, libsql, edge, distributed]
price: free
website: https://turso.tech
logo: 
description: "Turso 边缘 SQLite 平台 MCP，分布式 SQLite，AI Agent 边缘数据。"
descriptionEn: "Turso edge SQLite platform MCP with distributed SQLite for AI Agent edge data."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @turso/mcp-server"
envVars: ["TURSO_DATABASE_URL", "TURSO_AUTH_TOKEN"]
configExample: |
  {
    "mcpServers": { "turso": { "command": "npx", "args": ["-y", "@turso/mcp-server"], "env": { "TURSO_DATABASE_URL": "libsql://xxx.turso.io" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Turso MCP

Turso 边缘 SQLite 平台 MCP，分布式 SQLite，AI Agent 边缘数据。
