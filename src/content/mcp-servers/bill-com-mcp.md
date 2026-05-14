---
title: "Bill.com MCP"
name: bill-com-mcp
category: mcp-servers
tags: [bill.com, payments, b2b, invoicing, ap automation]
price: paid
website: https://bill.com
logo: 
description: "Bill.com B2B 支付和发票平台 MCP，供应商付款和应收账款自动化，AI Agent B2B 支付。"
descriptionEn: "Bill.com B2B payments and invoicing platform MCP for vendor payments and accounts receivable automation for AI Agent B2B payments."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @bill.com/mcp-server"
envVars: ["BILL_COM_API_KEY", "BILL_COM_USER_ID"]
configExample: |
  {
    "mcpServers": { "bill-com": { "command": "npx", "args": ["-y", "@bill.com/mcp-server"], "env": { "BILL_COM_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Bill.com MCP

Bill.com B2B 支付和发票平台 MCP，供应商付款和应收账款自动化，AI Agent B2B 支付。
