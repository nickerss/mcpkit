---
title: "Trino MCP"
name: trino-mcp
category: mcp-servers
tags: [trino, sql, distributed, query, olap]
price: free
website: https://trino.io
logo: 
description: "Trino 分布式 SQL 查询平台 MCP，Presto 分支高性能查询，AI Agent 分布式 SQL。"
descriptionEn: "Trino distributed SQL query platform MCP as Presto fork for high-performance queries for AI Agent distributed SQL."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @trino/mcp-server"
envVars: ["TRINO_URL"]
configExample: |
  {
    "mcpServers": { "trino": { "command": "npx", "args": ["-y", "@trino/mcp-server"], "env": { "TRINO_URL": "http://localhost:8080" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Trino MCP

Trino 分布式 SQL 查询平台 MCP，Presto 分支高性能查询，AI Agent 分布式 SQL。
