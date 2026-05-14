---
title: "ClickHouse MCP"
name: clickhouse-mcp
category: mcp-servers
tags: [clickhouse, olap, analytics, database, columnar]
price: free
website: https://clickhouse.com
logo: 
description: "ClickHouse OLAP 分析数据库 MCP，列式存储分析型数据库，AI Agent 实时分析。"
descriptionEn: "ClickHouse OLAP analytics database MCP with columnar storage for AI Agent real-time analytics."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @clickhouse/mcp-server"
envVars: ["CLICKHOUSE_HOST", "CLICKHOUSE_PASSWORD"]
configExample: |
  {
    "mcpServers": { "clickhouse": { "command": "npx", "args": ["-y", "@clickhouse/mcp-server"], "env": { "CLICKHOUSE_HOST": "localhost" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# ClickHouse MCP

ClickHouse OLAP 分析数据库 MCP，列式存储分析型数据库，AI Agent 实时分析。
