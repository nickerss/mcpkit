---
title: "M-Pesa MCP"
name: mpesa-mcp
category: mcp-servers
tags: [mpesa, mobile-money, africa, payments, safaricom]
price: paid
website: https://developer.safaricom.co.ke
logo: 
description: "M-Pesa 移动支付 MCP，非洲最流行的移动支付平台，支持转账、充值和支付，适合非洲市场应用。"
descriptionEn: "M-Pesa mobile payments MCP — Africa most popular mobile payment platform supporting transfers, top-up and payments for African market apps."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 4
  activity: 4
  scenarioFit: 3
  overall: 3
certificationStatus: "pending"
installCommand: "npx @mpesa/mcp-server"
envVars: ["MPESA_CONSUMER_KEY", "MPESA_CONSUMER_SECRET"]
configExample: |
  {
    "mcpServers": { "mpesa": { "command": "npx", "args": ["-y", "@mpesa/mcp-server"], "env": { "MPESA_CONSUMER_KEY": "xxx", "MPESA_CONSUMER_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# M-Pesa MCP

M-Pesa 移动支付 MCP，非洲最流行的移动支付平台，支持转账、充值和支付，适合非洲市场应用。
