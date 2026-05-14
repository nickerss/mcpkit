---
title: "Stripe Webhooks MCP"
name: stripe-webhooks-mcp
category: mcp-servers
tags: [stripe, webhooks, payments, events, ecommerce]
price: paid
website: https://stripe.com
logo: 
description: "Stripe Webhooks 支付事件平台 MCP，支付 Webhook 事件，AI Agent 支付事件。"
descriptionEn: "Stripe Webhooks payment events platform MCP for payment webhook events for AI Agent payment events."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.6
certificationStatus: "certified"
installCommand: "npx @stripe/webhooks-mcp"
envVars: ["STRIPE_WEBHOOK_SECRET"]
configExample: |
  {
    "mcpServers": { "stripe-webhooks": { "command": "npx", "args": ["-y", "@stripe/webhooks-mcp"], "env": { "STRIPE_WEBHOOK_SECRET": "whsec_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Stripe Webhooks MCP

Stripe Webhooks 支付事件平台 MCP，支付 Webhook 事件，AI Agent 支付事件。
