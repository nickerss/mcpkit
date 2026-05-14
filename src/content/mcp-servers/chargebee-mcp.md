---
title: "Chargebee MCP"
name: chargebee-mcp
category: mcp-servers
tags: [chargebee, subscriptions, billing, payments, invoicing]
price: paid
website: https://chargebee.com
logo: 
description: "Chargebee 订阅计费平台 MCP，自动化订阅管理、计费周期和发票开具，适合订阅经济模式。"
descriptionEn: "Chargebee subscription billing platform MCP for automated subscription management, billing cycles and invoicing for subscription business models."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @chargebee/mcp-server"
envVars: ["CHARGEBEE_API_KEY"]
configExample: |
  {
    "mcpServers": { "chargebee": { "command": "npx", "args": ["-y", "@chargebee/mcp-server"], "env": { "CHARGEBEE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Chargebee MCP

Chargebee 订阅计费平台 MCP，自动化订阅管理、计费周期和发票开具，适合订阅经济模式。
