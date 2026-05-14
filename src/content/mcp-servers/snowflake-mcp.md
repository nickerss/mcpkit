---
title: "Snowflake MCP"
name: snowflake-mcp
category: mcp-servers
tags: [snowflake, datawarehouse, sql, enterprise, analytics]
price: paid
website: https://snowflake.com
logo: 
description: "Snowflake 云数据仓库 MCP，企业级数据分析平台，支持大规模 SQL 查询和数据分析。"
descriptionEn: "Snowflake cloud data warehouse MCP — enterprise data analytics platform supporting large-scale SQL queries and analysis."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @snowflake/mcp-server"
envVars: ["SNOWFLAKE_ACCOUNT", "SNOWFLAKE_USER", "SNOWFLAKE_PASSWORD"]
configExample: |
  {
    "mcpServers": { "snowflake": { "command": "npx", "args": ["-y", "@snowflake/mcp-server"], "env": { "SNOWFLAKE_ACCOUNT": "myaccount", "SNOWFLAKE_USER": "user", "SNOWFLAKE_PASSWORD": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Snowflake MCP

Snowflake 云数据仓库 MCP，企业级数据分析平台，支持大规模 SQL 查询和数据分析。
