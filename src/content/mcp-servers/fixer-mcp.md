---
title: "Fixer.io MCP"
name: fixer-mcp
category: mcp-servers
tags: [fixer, currency, exchange-rate, api, historical]
price: freemium
website: https://fixer.io
logo: 
description: "Fixer.io 汇率 API 平台 MCP，历史汇率和实时数据，AI Agent 历史汇率。"
descriptionEn: "Fixer.io exchange rate API platform MCP for historical rates and real-time data for AI Agent historical exchange rates."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 3
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @fixer/mcp-server"
envVars: ["FIXER_API_KEY"]
configExample: |
  {
    "mcpServers": { "fixer": { "command": "npx", "args": ["-y", "@fixer/mcp-server"], "env": { "FIXER_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Fixer.io MCP

Fixer.io 汇率 API 平台 MCP，历史汇率和实时数据，AI Agent 历史汇率。
