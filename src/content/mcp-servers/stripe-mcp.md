---
title: "Stripe MCP Server"
name: "stripe-mcp"
category: "mcp-servers"
tags: ["stripe", "payments", "billing", "subscriptions", "refunds"]
price: "freemium"
website: "https://docs.stripe.com/mcp"
logo: null
descriptionEn: "Official Stripe MCP server — let AI agents process payments, manage subscriptions, handle refunds, and query the Stripe knowledge base."
description: "官方 Stripe MCP 服务器，让 AI Agent 处理支付、管理订阅、处理退款，并查询 Stripe 知识库。"
descriptionEn: "Official Stripe MCP server — let AI agents process payments, manage subscriptions, handle refunds, and query the Stripe knowledge base."
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
    "mcpServers": {
      "stripe": {
        "command": "npx",
        "args": ["-y", "@stripe/mcp-server"],
        "env": {
          "STRIPE_SECRET_KEY": "sk_live_xxxx"
        }
      }
    }
  }
featured: true
submittedAt: "2026-05-19T00:00:00.000Z"
---

# Stripe MCP Server

官方 Stripe MCP 服务器，为 AI Agent 提供完整的支付处理能力。

## 核心功能

- **支付处理**：创建 PaymentIntent、确认支付、处理失败
- **订阅管理**：创建、取消、修改订阅计划
- **退款处理**：全额 / 部分退款，查询退款状态
- **客户管理**：创建客户、查询历史交易
- **对账报表**：自动化财务对账与报表生成

## 安全说明

建议在生产环境启用人工确认机制，避免提示注入攻击。
