---
title: "Braintree MCP"
name: braintree-mcp
category: mcp-servers
tags: [braintree, paypal, payments, subscriptions, ecommerce]
price: paid
website: https://braintreepayments.com
logo: 
description: "Braintree（PayPal）支付平台 MCP，信用卡处理和 PayPal 集成，AI Agent 电商支付。"
descriptionEn: "Braintree (PayPal) payment platform MCP with credit card processing and PayPal integration for AI Agent e-commerce payments."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @braintree/mcp-server"
envVars: ["BRAINTREE_MERCHANT_ID"]
configExample: |
  {
    "mcpServers": { "braintree": { "command": "npx", "args": ["-y", "@braintree/mcp-server"], "env": { "BRAINTREE_MERCHANT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Braintree MCP

Braintree（PayPal）支付平台 MCP，信用卡处理和 PayPal 集成，AI Agent 电商支付。
