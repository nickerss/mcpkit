---
title: "Census MCP"
name: census-mcp
category: mcp-servers
tags: [census, reverse-etl, data, warehouse, sync]
price: paid
website: https://getcensus.com
logo: 
description: "Census Reverse ETL 数据同步平台 MCP，数据仓库到业务工具同步，AI Agent 数据同步。"
descriptionEn: "Census Reverse ETL data sync platform MCP for data warehouse to business tools sync for AI Agent data synchronization."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @census/mcp-server"
envVars: ["CENSUS_API_KEY"]
configExample: |
  {
    "mcpServers": { "census": { "command": "npx", "args": ["-y", "@census/mcp-server"], "env": { "CENSUS_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Census MCP

Census Reverse ETL 数据同步平台 MCP，数据仓库到业务工具同步，AI Agent 数据同步。
