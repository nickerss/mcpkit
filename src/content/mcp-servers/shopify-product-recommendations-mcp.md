---
title: "Shopify Product Recommendations MCP"
name: "shopify-product-recommendations-mcp"
category: "mcp-servers"
tags: ["shopify", "recommendations", "ai", "product-discovery", "ecommerce"]
price: "freemium"
website: "https://shopify.dev"
logo: null
descriptionEn: "AI-powered product recommendation engine for Shopify — surface relevant products based on customer behavior and preferences."
description: "Shopify AI 智能选品推荐引擎，基于顾客行为和偏好推荐相关商品，提升客单价和转化率。"
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 5
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @shopify/product-recommendations-mcp"
envVars: ["SHOPIFY_STORE_URL", "SHOPIFY_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": {
      "shopify-product-recommendations": {
        "command": "npx",
        "args": ["-y", "@shopify/product-recommendations-mcp"],
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

# Shopify Product Recommendations MCP

AI 智能选品推荐，让每位顾客看到最相关的商品。

## 核心功能

- **行为推荐**：基于浏览 / 购买历史的个性化推荐
- **相似商品**：为当前商品找到高相关替代品
- **组合推荐**：捆绑销售建议，提升客单价
- **新品发现**：AI 识别高潜力新上架商品
