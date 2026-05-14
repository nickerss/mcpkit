---
title: "Alpha Vantage MCP"
name: alpha-vantage-mcp
category: mcp-servers
tags: [alpha-vantage, stocks, market-data, api, historical]
price: free
website: https://alphavantage.co
logo: 
description: "Alpha Vantage 市场数据 API 平台 MCP，免费股市和 FX 数据，AI Agent 免费市场数据。"
descriptionEn: "Alpha Vantage market data API platform MCP for free stock and FX data for AI Agent free market data."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 3
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @alphavantage/mcp-server"
envVars: ["ALPHA_VANTAGE_API_KEY"]
configExample: |
  {
    "mcpServers": { "alpha-vantage": { "command": "npx", "args": ["-y", "@alphavantage/mcp-server"], "env": { "ALPHA_VANTAGE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Alpha Vantage MCP

Alpha Vantage 市场数据 API 平台 MCP，免费股市和 FX 数据，AI Agent 免费市场数据。
