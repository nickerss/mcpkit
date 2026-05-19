---
title: "Shopify MCP Server"
name: "shopify-mcp"
category: "mcp-servers"
tags: ["shopify", "ecommerce", "graphQL", "products", "orders", "customers"]
price: "freemium"
website: "https://github.com/geli2001/shopify-mcp"
logo: null
descriptionEn: "Connect your AI agent to Shopify stores via GraphQL Admin API — manage products, customers, orders, and more."
description: "通过 GraphQL Admin API 将 AI Agent 连接到 Shopify 店铺，管理商品、顾客、订单等核心数据。"
descriptionEn: "Connect your AI agent to Shopify stores via GraphQL Admin API — manage products, customers, orders, and more."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "certified"
installCommand: "npx @shopify/mcp-server"
envVars: ["SHOPIFY_STORE_URL", "SHOPIFY_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": {
      "shopify": {
        "command": "npx",
        "args": ["-y", "@shopify/mcp-server"],
        "env": {
          "SHOPIFY_STORE_URL": "your-store.myshopify.com",
          "SHOPIFY_ACCESS_TOKEN": "shpat_xxxx"
        }
      }
    }
  }
featured: true
submittedAt: "2026-05-19T00:00:00.000Z"
---

# Shopify MCP Server

通过 GraphQL Admin API 将 AI Agent 连接到 Shopify 店铺。

## 核心功能

- **商品管理**：上架、编辑、搜索、批量操作商品
- **顾客管理**：创建、更新、查询顾客信息与订单历史
- **订单处理**：查询、处理、退款订单
- **库存同步**：实时查询与更新库存数量

## 支持的工具数量

31 个独立工具，覆盖 Shopify 商家运营全场景。
