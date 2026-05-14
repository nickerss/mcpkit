---
title: "Tipalti MCP"
name: tipalti-mcp
category: mcp-servers
tags: [tipalti, payments, payouts, global, automation]
price: paid
website: https://tipalti.com
logo: 
description: "Tipalti 全球支付自动化平台 MCP，全球付款和税务合规，AI Agent 全球支付。"
descriptionEn: "Tipalti global payment automation platform MCP for global payouts and tax compliance for AI Agent global payments."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @tipalti/mcp-server"
envVars: ["TIPALTI_API_KEY"]
configExample: |
  {
    "mcpServers": { "tipalti": { "command": "npx", "args": ["-y", "@tipalti/mcp-server"], "env": { "TIPALTI_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Tipalti MCP

Tipalti 全球支付自动化平台 MCP，全球付款和税务合规，AI Agent 全球支付。
