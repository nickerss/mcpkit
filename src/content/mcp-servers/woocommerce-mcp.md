---
title: "WooCommerce MCP"
name: woocommerce-mcp
category: mcp-servers
tags: [woocommerce, wordpress, ecommerce, orders, products]
price: free
website: https://woocommerce.com
logo: 
description: "WooCommerce WordPress 电商插件 MCP，管理订单、商品和客户，适合已有 WordPress 站点的电商扩展。"
descriptionEn: "WooCommerce WordPress e-commerce plugin MCP managing orders, products and customers for WordPress site e-commerce extension."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "reviewed"
installCommand: "npx @woocommerce/mcp-server"
envVars: ["WC_INSTANCE_URL", "WC_CONSUMER_KEY", "WC_CONSUMER_SECRET"]
configExample: |
  {
    "mcpServers": { "woocommerce": { "command": "npx", "args": ["-y", "@woocommerce/mcp-server"], "env": { "WC_INSTANCE_URL": "https://myshop.com", "WC_CONSUMER_KEY": "ck_xxx", "WC_CONSUMER_SECRET": "cs_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# WooCommerce MCP

WooCommerce WordPress 电商插件 MCP，管理订单、商品和客户，适合已有 WordPress 站点的电商扩展。
