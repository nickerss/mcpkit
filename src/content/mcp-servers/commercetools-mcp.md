---
title: "commercetools Commerce MCP"
name: "commercetools-mcp"
category: "mcp-servers"
tags: ["commercetools", "enterprise", "ecommerce", "product-catalog", "orders"]
price: "paid"
website: "https://commercetools.com/commerce-mcp"
descriptionEn: "Enterprise commerce platform MCP — AI agents access product catalogs, carts, pricing, promotions, and orders through the commercetools platform."
description: "企业级商务平台 MCP，AI Agent 通过 commercetools 访问商品目录、购物车、定价、促销和订单。"
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 5
  overall: 4.3
certificationStatus: "certified"
installCommand: "npx @commercetools/commerce-mcp"
envVars: ["CT_API_URL", "CT_CLIENT_ID", "CT_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": {
      "commercetools": {
        "command": "npx",
        "args": ["-y", "@commercetools/commerce-mcp"],
        "env": {
          "CT_API_URL": "https://api.commercetools.com",
          "CT_CLIENT_ID": "xxxx",
          "CT_CLIENT_SECRET": "xxxx"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-19T00:00:00.000Z"
---

# commercetools Commerce MCP

企业级电商平台的 AI Agent 接口，支撑大规模商务运营。

## 核心功能

- **商品目录**：多语言、多渠道商品数据管理
- **购物车与订单**：AI 驱动的灵活购物车和订单处理
- **定价引擎**：AI 动态定价和促销规则
- **客户管理**：企业级客户档案与分群
- **订单履约**：多仓库智能分配
