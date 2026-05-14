---
title: "Tradier MCP"
name: tradier-mcp
category: mcp-servers
tags: [tradier, stocks, trading, api, finance]
price: freemium
website: https://tradier.com
logo: 
description: "Tradier 股票交易 API 平台 MCP，股票报价和交易 API，AI Agent 股票交易。"
descriptionEn: "Tradier stock trading API platform MCP for stock quotes and trading API for AI Agent stock trading."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 3
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @tradier/mcp-server"
envVars: ["TRADIER_API_KEY"]
configExample: |
  {
    "mcpServers": { "tradier": { "command": "npx", "args": ["-y", "@tradier/mcp-server"], "env": { "TRADIER_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Tradier MCP

Tradier 股票交易 API 平台 MCP，股票报价和交易 API，AI Agent 股票交易。
