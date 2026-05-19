---
title: "Shopify Storefront MCP Server"
name: "shopify-storefront-mcp"
category: "mcp-servers"
tags: ["shopify", "storefront", "ecommerce", "cart", "product-search"]
price: "freemium"
website: "https://shopify.dev/docs/apps/build/storefront-mcp"
logo: null
descriptionEn: "Connect AI agents to Shopify store catalogs, shopping carts, and policies for conversational commerce."
description: "将 AI Agent 连接到 Shopify 商品目录、购物车和店铺政策，实现对话式购物体验。"
descriptionEn: "Connect AI agents to Shopify store catalogs, shopping carts, and policies for conversational commerce."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.8
certificationStatus: "certified"
installCommand: "npx @shopify/storefront-mcp-server"
envVars: ["SHOPIFY_STOREFRONT_URL", "SHOPIFY_STOREFRONT_TOKEN"]
configExample: |
  {
    "mcpServers": {
      "shopify-storefront": {
        "command": "npx",
        "args": ["-y", "@shopify/storefront-mcp-server"],
        "env": {
          "SHOPIFY_STOREFRONT_URL": "https://your-store.myshopify.com/api/2024-01/graphql.json",
          "SHOPIFY_STOREFRONT_TOKEN": "xxxx"
        }
      }
    }
  }
featured: true
submittedAt: "2026-05-19T00:00:00.000Z"
---

# Shopify Storefront MCP Server

面向买家的 AI 购物助手，商品搜索、加购、政策查询均可通过自然语言完成。

## 核心功能

- **商品搜索**：语义理解 + 品类筛选
- **购物车管理**：AI 协助加购、修改数量、发起结算
- **政策查询**：退换货政策、物流方式、常见问题
- **会话记忆**：跨对话理解用户购物偏好
