---
title: "Stock Data MCP"
name: stock-data-mcp
category: mcp-servers
tags: [stock, finance, market-data, trading, api]
price: freemium
website: https://polygon.io
logo: 
description: "股票市场数据 MCP，获取实时行情、历史数据和财务报表，AI Agent 金融分析工具。"
descriptionEn: "Stock market data MCP for real-time quotes, historical data and financial statements as an AI Agent financial analysis tool."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 3
  overall: 3.4
certificationStatus: "pending"
installCommand: "npx @stock/mcp-server"
envVars: ["POLYGON_API_KEY"]
configExample: |
  {
    "mcpServers": { "stock": { "command": "npx", "args": ["-y", "@stock/mcp-server"], "env": { "POLYGON_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Stock Data MCP

股票市场数据 MCP，获取实时行情、历史数据和财务报表，AI Agent 金融分析工具。
