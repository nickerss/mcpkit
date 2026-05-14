---
title: "MariaDB MCP"
name: mariadb-mcp
category: mcp-servers
tags: [mariadb, mysql, database, sql, relational]
price: free
website: https://mariadb.org
logo: 
description: "MariaDB 数据库 MCP，MySQL 兼容的开源关系数据库，高性能 OLTP 场景首选。"
descriptionEn: "MariaDB database MCP — MySQL-compatible open-source relational database, preferred for high-performance OLTP scenarios."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "reviewed"
installCommand: "npx @mariadb/mcp-server"
envVars: ["MARIADB_HOST", "MARIADB_PORT", "MARIADB_USER", "MARIADB_PASSWORD"]
configExample: |
  {
    "mcpServers": { "mariadb": { "command": "npx", "args": ["-y", "@mariadb/mcp-server"], "env": { "MARIADB_HOST": "localhost", "MARIADB_PORT": "3306", "MARIADB_USER": "root", "MARIADB_PASSWORD": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# MariaDB MCP

MariaDB 数据库 MCP，MySQL 兼容的开源关系数据库，高性能 OLTP 场景首选。
