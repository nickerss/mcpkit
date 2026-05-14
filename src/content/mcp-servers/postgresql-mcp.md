---
title: "PostgreSQL MCP"
name: postgresql-mcp
category: mcp-servers
tags: [postgresql, database, relational, sql, postgres]
price: free
website: https://postgresql.org
logo: 
description: "PostgreSQL 关系数据库 MCP，强大 SQL 功能和扩展，AI Agent 关系数据库。"
descriptionEn: "PostgreSQL relational database MCP with powerful SQL features and extensions for AI Agent relational databases."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "certified"
installCommand: "npx @postgresql/mcp-server"
envVars: ["POSTGRES_URL"]
configExample: |
  {
    "mcpServers": { "postgresql": { "command": "npx", "args": ["-y", "@postgresql/mcp-server"], "env": { "POSTGRES_URL": "postgres://user:pass@host:5432/db" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# PostgreSQL MCP

PostgreSQL 关系数据库 MCP，强大 SQL 功能和扩展，AI Agent 关系数据库。
