---
title: "Polygon MCP"
name: polygon-mcp
category: mcp-servers
tags: [polygon, stocks, market-data, api, real-time]
price: freemium
website: https://polygon.io
logo: 
description: "Polygon 实时股市数据 API 平台 MCP，实时和历史市场数据，AI Agent 实时股市。"
descriptionEn: "Polygon real-time stock market data API platform MCP for real-time and historical market data for AI Agent real-time stocks."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 3
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @polygon/mcp-server"
envVars: ["POLYGON_API_KEY"]
configExample: |
  {
    "mcpServers": { "polygon": { "command": "npx", "args": ["-y", "@polygon/mcp-server"], "env": { "POLYGON_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Polygon MCP

Polygon 实时股市数据 API 平台 MCP，实时和历史市场数据，AI Agent 实时股市。
