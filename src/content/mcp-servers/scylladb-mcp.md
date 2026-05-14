---
title: "ScyllaDB MCP"
name: scylladb-mcp
category: mcp-servers
tags: [scylladb, cassandra, nosql, database, wide-column]
price: free
website: https://scylladb.com
logo: 
description: "ScyllaDB Cassandra 兼容数据库 MCP，NoSQL 宽列数据库，AI Agent NoSQL 数据。"
descriptionEn: "ScyllaDB Cassandra-compatible database MCP as NoSQL wide-column database for AI Agent NoSQL data."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @scylladb/mcp-server"
envVars: ["SCYLLADB_HOST"]
configExample: |
  {
    "mcpServers": { "scylladb": { "command": "npx", "args": ["-y", "@scylladb/mcp-server"], "env": { "SCYLLADB_HOST": "localhost" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# ScyllaDB MCP

ScyllaDB Cassandra 兼容数据库 MCP，NoSQL 宽列数据库，AI Agent NoSQL 数据。
