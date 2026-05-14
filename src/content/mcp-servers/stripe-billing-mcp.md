---
title: "Stripe Billing MCP"
name: stripe-billing-mcp
category: mcp-servers
tags: [stripe, billing, subscriptions, invoicing, payments]
price: paid
website: https://stripe.com
logo: 
description: "Stripe Billing 订阅和计费平台 MCP，订阅管理和发票开具，AI Agent 订阅计费。"
descriptionEn: "Stripe Billing subscription and billing platform MCP for subscription management and invoicing for AI Agent subscription billing."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.6
certificationStatus: "certified"
installCommand: "npx @stripe/billing-mcp"
envVars: ["STRIPE_SECRET_KEY"]
configExample: |
  {
    "mcpServers": { "stripe-billing": { "command": "npx", "args": ["-y", "@stripe/billing-mcp"], "env": { "STRIPE_SECRET_KEY": "sk_test_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Stripe Billing MCP

Stripe Billing 订阅和计费平台 MCP，订阅管理和发票开具，AI Agent 订阅计费。
