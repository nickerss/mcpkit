---
title: "RavenDB MCP"
name: ravendb-mcp
category: mcp-servers
tags: [ravendb, nosql, document, database, aggregation]
price: free
website: https://ravendb.net
logo: 
description: "RavenDB NoSQL 文档数据库平台 MCP，聚合框架和高效查询，AI Agent RavenDB。"
descriptionEn: "RavenDB NoSQL document database platform MCP for aggregation framework and efficient queries for AI Agent RavenDB."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @ravendb/mcp-server"
envVars: ["RAVENDB_URL"]
configExample: |
  {
    "mcpServers": { "ravendb": { "command": "npx", "args": ["-y", "@ravendb/mcp-server"], "env": { "RAVENDB_URL": "http://localhost:8080" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# RavenDB MCP

RavenDB NoSQL 文档数据库平台 MCP，聚合框架和高效查询，AI Agent RavenDB。
