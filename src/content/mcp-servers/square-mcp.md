---
title: "Square MCP"
name: square-mcp
category: mcp-servers
tags: [square, payments, pos, retail, api]
price: paid
website: https://squareup.com
logo: 
description: "Square 支付和 POS MCP，管理支付、退款和订单，适合零售和餐饮业的 AI 自动化。"
descriptionEn: "Square payments and POS MCP for managing payments, refunds and orders — ideal for retail and food service AI automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @square/mcp-server"
envVars: ["SQUARE_ACCESS_TOKEN", "SQUARE_ENVIRONMENT"]
configExample: |
  {
    "mcpServers": { "square": { "command": "npx", "args": ["-y", "@square/mcp-server"], "env": { "SQUARE_ACCESS_TOKEN": "xxx", "SQUARE_ENVIRONMENT": "sandbox" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Square MCP

Square 支付和 POS MCP，管理支付、退款和订单，适合零售和餐饮业的 AI 自动化。
