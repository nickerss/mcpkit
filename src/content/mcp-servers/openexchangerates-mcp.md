---
title: "Open Exchange Rates MCP"
name: openexchangerates-mcp
category: mcp-servers
tags: [openexchangerates, currency, exchange-rate, api, finance]
price: freemium
website: https://openexchangerates.org
logo: 
description: "Open Exchange Rates 汇率 API 平台 MCP，货币兑换汇率数据，AI Agent 货币换算。"
descriptionEn: "Open Exchange Rates exchange rate API platform MCP for currency exchange rate data for AI Agent currency conversion."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 3
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @openexchangerates/mcp-server"
envVars: ["OPENEXCHANGERATES_API_KEY"]
configExample: |
  {
    "mcpServers": { "openexchangerates": { "command": "npx", "args": ["-y", "@openexchangerates/mcp-server"], "env": { "OPENEXCHANGERATES_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Open Exchange Rates MCP

Open Exchange Rates 汇率 API 平台 MCP，货币兑换汇率数据，AI Agent 货币换算。
