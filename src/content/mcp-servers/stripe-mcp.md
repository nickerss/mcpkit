---
title: "Stripe MCP"
name: stripe-mcp
category: mcp-servers
tags: [stripe, payments, billing, subscriptions, api]
price: paid
website: https://stripe.com
logo: 
description: "Stripe 在线支付平台 MCP，处理支付、退款、订阅和发票，全球最流行的支付 API。"
descriptionEn: "Stripe online payments platform MCP processing payments, refunds, subscriptions and invoices — the most popular payment API globally."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.7
certificationStatus: "certified"
installCommand: "npx @stripe/mcp-server"
envVars: ["STRIPE_SECRET_KEY"]
configExample: |
  {
    "mcpServers": { "stripe": { "command": "npx", "args": ["-y", "@stripe/mcp-server"], "env": { "STRIPE_SECRET_KEY": "sk_test_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Stripe MCP

Stripe 在线支付平台 MCP，处理支付、退款、订阅和发票，全球最流行的支付 API。
