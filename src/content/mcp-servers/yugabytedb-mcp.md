---
title: "YugabyteDB MCP"
name: yugabytedb-mcp
category: mcp-servers
tags: [yugabytedb, postgresql, database, distributed, cloud-native]
price: free
website: https://yugabyte.com
logo: 
description: "YugabyteDB 分布式 PostgreSQL MCP，兼容 PostgreSQL 的云原生分布式数据库，高可用性。"
descriptionEn: "YugabyteDB distributed PostgreSQL MCP — cloud-native distributed database compatible with PostgreSQL with high availability."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @yugabyte/mcp-server"
envVars: ["YB_URL"]
configExample: |
  {
    "mcpServers": { "yugabytedb": { "command": "npx", "args": ["-y", "@yugabyte/mcp-server"], "env": { "YB_URL": "postgres://user:password@localhost:5433" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# YugabyteDB MCP

YugabyteDB 分布式 PostgreSQL MCP，兼容 PostgreSQL 的云原生分布式数据库，高可用性。
