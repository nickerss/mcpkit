---
title: "BigCommerce MCP"
name: bigcommerce-mcp
category: mcp-servers
tags: [bigcommerce, ecommerce, saas, enterprise, headless]
price: paid
website: https://bigcommerce.com
logo: 
description: "BigCommerce SaaS 电商平台 MCP， Headless 电商解决方案，AI Agent 企业电商。"
descriptionEn: "BigCommerce SaaS e-commerce platform MCP as headless e-commerce solution for AI Agent enterprise e-commerce."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @bigcommerce/mcp-server"
envVars: ["BIGCOMMERCE_STORE_HASH", "BIGCOMMERCE_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "bigcommerce": { "command": "npx", "args": ["-y", "@bigcommerce/mcp-server"], "env": { "BIGCOMMERCE_STORE_HASH": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# BigCommerce MCP

BigCommerce SaaS 电商平台 MCP， Headless 电商解决方案，AI Agent 企业电商。
