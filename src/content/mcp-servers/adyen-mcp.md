---
title: "Adyen MCP Server"
name: "adyen-mcp"
category: "mcp-servers"
tags: ["adyen", "payments", "enterprise", "multicurrency", "pos"]
price: "paid"
website: "https://www.adyen.com"
descriptionEn: "Enterprise payment processing via Adyen — AI agents can handle complex multi-currency transactions, POS payments, and risk management."
description: "Adyen 企业级支付处理 MCP，支持多货币、POS 支付和 AI 风险管理，适合规模化电商。"
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "certified"
installCommand: "npx @adyen/mcp-server"
envVars: ["ADYEN_API_KEY", "ADYEN_MERCHANT_ACCOUNT"]
configExample: |
  {
    "mcpServers": {
      "adyen": {
        "command": "npx",
        "args": ["-y", "@adyen/mcp-server"],
        "env": {
          "ADYEN_API_KEY": "AQE....",
          "ADYEN_MERCHANT_ACCOUNT": "YourMerchantAccount"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-19T00:00:00.000Z"
---

# Adyen MCP Server

企业级支付网关，为 AI Agent 提供全球化支付能力。

## 核心功能

- **多货币支付**：支持 150+ 货币，覆盖全球主要市场
- **多支付方式**：信用卡、本地钱包、Bank Transfer、Direct Debit
- **POS 集成**：线上线下统一支付管理
- **风险管理**：AI 驱动的欺诈检测与拦截
- **收入报表**：自动生成支付表现分析
