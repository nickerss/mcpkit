---
title: "dbt MCP"
name: dbt-mcp
category: mcp-servers
tags: [dbt, analytics, sql, transformations, data-modeling]
price: free
website: https://www.getdbt.com
logo: 
description: "dbt 数据转换和分析工程框架 MCP，使用 SQL 定义数据模型和转换，Analytics Engineering 核心工具。"
descriptionEn: "dbt data transformation and analytics engineering framework MCP using SQL to define data models and transformations — core Analytics Engineering tool."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "reviewed"
installCommand: "npx @dbt/mcp-server"
envVars: ["DBT_PROFILES_DIR"]
configExample: |
  {
    "mcpServers": { "dbt": { "command": "npx", "args": ["-y", "@dbt/mcp-server"], "env": { "DBT_PROFILES_DIR": "~/.dbt" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# dbt MCP

dbt 数据转换和分析工程框架 MCP，使用 SQL 定义数据模型和转换，Analytics Engineering 核心工具。
