---
title: "BigQuery MCP"
name: bigquery-mcp
category: mcp-servers
tags: [google, bigquery, datawarehouse, sql, analytics]
price: pay-as-you-go
website: https://cloud.google.com/bigquery
logo: 
description: "Google BigQuery 数据仓库 MCP，运行 SQL 查询大规模数据集，AI Agent 数据分析自动化。"
descriptionEn: "Google BigQuery data warehouse MCP running SQL queries on massive datasets for AI Agent data analysis automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @google/bigquery-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS", "GCP_PROJECT_ID"]
configExample: |
  {
    "mcpServers": { "bigquery": { "command": "npx", "args": ["-y", "@google/bigquery-mcp"], "env": { "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/sa.json", "GCP_PROJECT_ID": "my-project" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# BigQuery MCP

Google BigQuery 数据仓库 MCP，运行 SQL 查询大规模数据集，AI Agent 数据分析自动化。
