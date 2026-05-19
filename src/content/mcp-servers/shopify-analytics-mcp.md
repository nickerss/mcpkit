---
title: "Shopify Analytics MCP Server"
name: "shopify-analytics-mcp"
category: "mcp-servers"
tags: ["shopify", "analytics", "data", "reporting", "business-intelligence"]
price: "freemium"
website: "https://shopify.dev"
logo: null
descriptionEn: "AI agents query Shopify analytics and business intelligence data — revenue, conversion rates, customer LTV, and custom reports."
description: "AI Agent 查询 Shopify 分析和商业智能数据——营收、转化率、客户 LTV 及自定义报表。"
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @shopify/analytics-mcp-server"
envVars: ["SHOPIFY_STORE_URL", "SHOPIFY_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": {
      "shopify-analytics": {
        "command": "npx",
        "args": ["-y", "@shopify/analytics-mcp-server"],
        "env": {
          "SHOPIFY_STORE_URL": "your-store.myshopify.com",
          "SHOPIFY_ACCESS_TOKEN": "shpat_xxxx"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-19T00:00:00.000Z"
---

# Shopify Analytics MCP Server

AI 驱动的电商数据分析与商业洞察。

## 核心功能

- **营收分析**：GMV、客单价、复购率追踪
- **转化漏斗**：流量 → 加购 → 成交全链路分析
- **客户 LTV**：生命周期价值分析与高价值客户识别
- **营销归因**：多渠道营销效果归因
- **自定义报表**：自然语言生成数据分析报表
