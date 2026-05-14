---
title: "Shopify MCP"
name: shopify-mcp
category: mcp-servers
tags: [shopify, ecommerce, orders, products, store]
price: freemium
website: https://shopify.com
logo: 
description: "Shopify 电商平台 MCP，管理商品、订单、客户和库存，AI Agent 电商运营自动化。"
descriptionEn: "Shopify e-commerce platform MCP managing products, orders, customers and inventory for AI Agent e-commerce operations automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "certified"
installCommand: "npx @shopify/mcp-server"
envVars: ["SHOPIFY_STOREFRONT_TOKEN", "SHOPIFY_ADMIN_TOKEN"]
configExample: |
  {
    "mcpServers": { "shopify": { "command": "npx", "args": ["-y", "@shopify/mcp-server"], "env": { "SHOPIFY_STOREFRONT_TOKEN": "xxx", "SHOPIFY_ADMIN_TOKEN": "shpat_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Shopify MCP

Shopify 电商平台 MCP，管理商品、订单、客户和库存，AI Agent 电商运营自动化。
