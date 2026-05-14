---
title: "Fivetran MCP"
name: fivetran-mcp
category: mcp-servers
tags: [fivetran, etl, data-integration, cloud, pipelines]
price: paid
website: https://fivetran.com
logo: 
description: "Fivetran 云托管数据集成平台 MCP，自动化 ELT 管道，企业级数据同步。"
descriptionEn: "Fivetran cloud-managed data integration platform MCP for automated ELT pipelines and enterprise data sync."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @fivetran/mcp-server"
envVars: ["FIVETRAN_API_KEY", "FIVETRAN_API_SECRET"]
configExample: |
  {
    "mcpServers": { "fivetran": { "command": "npx", "args": ["-y", "@fivetran/mcp-server"], "env": { "FIVETRAN_API_KEY": "xxx", "FIVETRAN_API_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Fivetran MCP

Fivetran 云托管数据集成平台 MCP，自动化 ELT 管道，企业级数据同步。
