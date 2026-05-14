---
title: "Airbyte MCP"
name: airbyte-mcp
category: mcp-servers
tags: [airbyte, etl, data-integration, elt, pipelines]
price: free
website: https://airbyte.com
logo: 
description: "Airbyte 开源数据集成平台 MCP，ELT  pipelines 和数据同步，支持数百个数据源。"
descriptionEn: "Airbyte open-source data integration platform MCP for ELT pipelines and data sync supporting hundreds of data sources."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @airbyte/mcp-server"
envVars: ["AIRBYTE_URL", "AIRBYTE_API_KEY"]
configExample: |
  {
    "mcpServers": { "airbyte": { "command": "npx", "args": ["-y", "@airbyte/mcp-server"], "env": { "AIRBYTE_URL": "http://localhost:8000", "AIRBYTE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Airbyte MCP

Airbyte 开源数据集成平台 MCP，ELT  pipelines 和数据同步，支持数百个数据源。
