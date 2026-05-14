---
title: "Paddle MCP"
name: paddle-mcp
category: mcp-servers
tags: [paddle, payments, subscriptions, billing, saas]
price: paid
website: https://paddle.com
logo: 
description: "Paddle SaaS 支付平台 MCP，一站式支付、退款和订阅管理，B2B SaaS 首选。"
descriptionEn: "Paddle SaaS payments platform MCP for all-in-one payments, refunds and subscription management — top choice for B2B SaaS."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @paddle/mcp-server"
envVars: ["PADDLE_VENDOR_ID", "PADDLE_API_KEY"]
configExample: |
  {
    "mcpServers": { "paddle": { "command": "npx", "args": ["-y", "@paddle/mcp-server"], "env": { "PADDLE_VENDOR_ID": "xxx", "PADDLE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Paddle MCP

Paddle SaaS 支付平台 MCP，一站式支付、退款和订阅管理，B2B SaaS 首选。
