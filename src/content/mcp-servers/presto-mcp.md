---
title: "Presto MCP"
name: presto-mcp
category: mcp-servers
tags: [presto, sql, distributed, facebook, query]
price: free
website: https://prestodb.io
logo: 
description: "Presto 分布式 SQL 查询引擎平台 MCP，跨数据源查询，AI Agent 分布式查询。"
descriptionEn: "Presto distributed SQL query engine platform MCP for cross-datasource queries for AI Agent distributed queries."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @presto/mcp-server"
envVars: ["PRESTO_URL"]
configExample: |
  {
    "mcpServers": { "presto": { "command": "npx", "args": ["-y", "@presto/mcp-server"], "env": { "PRESTO_URL": "http://localhost:8080" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Presto MCP

Presto 分布式 SQL 查询引擎平台 MCP，跨数据源查询，AI Agent 分布式查询。
