---
title: "Plaid MCP"
name: plaid-mcp
category: mcp-servers
tags: [plaid, banking, finance, transactions, api]
price: freemium
website: https://plaid.com
logo: 
description: "Plaid 银行 API MCP，连接银行账户获取交易数据、余额和身份信息，金融应用开发必备。"
descriptionEn: "Plaid banking API MCP connecting bank accounts for transaction data, balances and identity — essential for financial app development."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @plaid/mcp-server"
envVars: ["PLAID_CLIENT_ID", "PLAID_SECRET", "PLAID_ENV"]
configExample: |
  {
    "mcpServers": { "plaid": { "command": "npx", "args": ["-y", "@plaid/mcp-server"], "env": { "PLAID_CLIENT_ID": "xxx", "PLAID_SECRET": "xxx", "PLAID_ENV": "sandbox" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Plaid MCP

Plaid 银行 API MCP，连接银行账户获取交易数据、余额和身份信息，金融应用开发必备。
