---
title: "Metabase MCP"
name: metabase-mcp
category: mcp-servers
tags: [metabase, bi, analytics, dashboards, open-source]
price: free
website: https://metabase.com
logo: 
description: "Metabase 开源 BI 和分析平台 MCP，可视化查询和仪表板，开源可自托管。"
descriptionEn: "Metabase open-source BI and analytics platform MCP with visual queries and dashboards — open-source with self-hosting."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @metabase/mcp-server"
envVars: ["METABASE_API_KEY"]
configExample: |
  {
    "mcpServers": { "metabase": { "command": "npx", "args": ["-y", "@metabase/mcp-server"], "env": { "METABASE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Metabase MCP

Metabase 开源 BI 和分析平台 MCP，可视化查询和仪表板，开源可自托管。
