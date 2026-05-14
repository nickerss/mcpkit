---
title: "CockroachDB MCP"
name: cockroachdb-mcp
category: mcp-servers
tags: [cockroachdb, postgresql, database, distributed, sql]
price: free
website: https://cockroachlabs.com
logo: 
description: "CockroachDB 分布式 SQL 数据库 MCP，PostgreSQL 兼容，水平扩展能力强，适合全球化应用。"
descriptionEn: "CockroachDB distributed SQL database MCP — PostgreSQL-compatible with horizontal scaling for globally distributed applications."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @cockroachdb/mcp-server"
envVars: ["CRDB_URL"]
configExample: |
  {
    "mcpServers": { "cockroachdb": { "command": "npx", "args": ["-y", "@cockroachdb/mcp-server"], "env": { "CRDB_URL": "postgres://root@localhost:26257/defaultdb" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# CockroachDB MCP

CockroachDB 分布式 SQL 数据库 MCP，PostgreSQL 兼容，水平扩展能力强，适合全球化应用。
