---
title: "LemonSqueezy MCP"
name: lemonsqueezy-mcp
category: mcp-servers
tags: [lemonsqueezy, payments, subscriptions, checkout, ecommerce]
price: freemium
website: https://lemonsqueezy.com
logo: 
description: "Lemon Squeezy 支付平台 MCP，一键托管数字产品销售，支持订阅和许可证管理。"
descriptionEn: "Lemon Squeezy payment platform MCP for one-click hosted digital product sales with subscription and license management."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @lemonsqueezy/mcp-server"
envVars: ["LEMONSQUEEZY_API_KEY"]
configExample: |
  {
    "mcpServers": { "lemonsqueezy": { "command": "npx", "args": ["-y", "@lemonsqueezy/mcp-server"], "env": { "LEMONSQUEEZY_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# LemonSqueezy MCP

Lemon Squeezy 支付平台 MCP，一键托管数字产品销售，支持订阅和许可证管理。
