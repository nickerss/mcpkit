---
title: "Finnhub MCP"
name: finnhub-mcp
category: mcp-servers
tags: [finnhub, stocks, market-data, api, finance]
price: freemium
website: https://finnhub.io
logo: 
description: "Finnhub 股市数据 API 平台 MCP，实时市场数据和新闻，AI Agent 股市数据。"
descriptionEn: "Finnhub stock market data API platform MCP for real-time market data and news for AI Agent stock market data."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 3
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @finnhub/mcp-server"
envVars: ["FINNHUB_API_KEY"]
configExample: |
  {
    "mcpServers": { "finnhub": { "command": "npx", "args": ["-y", "@finnhub/mcp-server"], "env": { "FINNHUB_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Finnhub MCP

Finnhub 股市数据 API 平台 MCP，实时市场数据和新闻，AI Agent 股市数据。
