---
title: "QuestDB MCP"
name: questdb-mcp
category: mcp-servers
tags: [questdb, time-series, olap, database, high-throughput]
price: free
website: https://questdb.io
logo: 
description: "QuestDB 时间序列数据库 MCP，高性能时间序列，AI Agent IoT 数据。"
descriptionEn: "QuestDB time-series database MCP for high-performance time-series for AI Agent IoT data."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @questdb/mcp-server"
envVars: ["QUESTDB_HOST"]
configExample: |
  {
    "mcpServers": { "questdb": { "command": "npx", "args": ["-y", "@questdb/mcp-server"], "env": { "QUESTDB_HOST": "localhost" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# QuestDB MCP

QuestDB 时间序列数据库 MCP，高性能时间序列，AI Agent IoT 数据。
