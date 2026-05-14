---
title: "CurrencyScoop MCP"
name: currencyscoop-mcp
category: mcp-servers
tags: [currencyscoop, currency, exchange-rate, api, finance]
price: freemium
website: https://currencyscoop.com
logo: 
description: "CurrencyScoop 汇率 API 平台 MCP，实时汇率数据，AI Agent 汇率查询。"
descriptionEn: "CurrencyScoop exchange rate API platform MCP for real-time exchange rate data for AI Agent exchange rate lookup."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 3
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @currencyscoop/mcp-server"
envVars: ["CURRENCYSCOOP_API_KEY"]
configExample: |
  {
    "mcpServers": { "currencyscoop": { "command": "npx", "args": ["-y", "@currencyscoop/mcp-server"], "env": { "CURRENCYSCOOP_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# CurrencyScoop MCP

CurrencyScoop 汇率 API 平台 MCP，实时汇率数据，AI Agent 汇率查询。
