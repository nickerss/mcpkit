---
title: "MySQL MCP"
name: mysql-mcp
category: mcp-servers
tags: [mysql, database, sql, rdms, backend]
price: free
website: https://dev.mysql.com
logo: 
description: "MySQL 数据库 MCP，支持复杂查询、事务和模式管理，AI Agent 可直接执行 SQL 进行数据操作。"
descriptionEn: "MySQL database MCP supporting complex queries, transactions and schema management for AI Agent SQL operations."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "reviewed"
installCommand: "npx @mysql/mcp-server"
envVars: ["MYSQL_HOST", "MYSQL_PORT", "MYSQL_USER", "MYSQL_PASSWORD"]
configExample: |
  {
    "mcpServers": { "mysql": { "command": "npx", "args": ["-y", "@mysql/mcp-server"], "env": { "MYSQL_HOST": "localhost", "MYSQL_PORT": "3306", "MYSQL_USER": "root", "MYSQL_PASSWORD": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# MySQL MCP

MySQL 数据库 MCP，支持复杂查询、事务和模式管理，AI Agent 可直接执行 SQL 进行数据操作。
