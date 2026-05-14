---
title: "Adyen MCP"
name: adyen-mcp
category: mcp-servers
tags: [adyen, payments, enterprise, global, pos]
price: paid
website: https://adyen.com
logo: 
description: "Adyen 全球企业支付平台 MCP，支持全球支付方式和 POS，AI Agent 企业级支付集成。"
descriptionEn: "Adyen global enterprise payment platform MCP supporting worldwide payment methods and POS for AI Agent enterprise payment integration."
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @adyen/mcp-server"
envVars: ["ADYEN_API_KEY"]
configExample: |
  {
    "mcpServers": { "adyen": { "command": "npx", "args": ["-y", "@adyen/mcp-server"], "env": { "ADYEN_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Adyen MCP

Adyen 全球企业支付平台 MCP，支持全球支付方式和 POS，AI Agent 企业级支付集成。
