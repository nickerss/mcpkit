---
title: "Gumroad MCP"
name: gumroad-mcp
category: mcp-servers
tags: [gumroad, ecommerce, digital-products, sell, creator]
price: freemium
website: https://gumroad.com
logo: 
description: "Gumroad 数字产品销售平台 MCP，创作者经济数字产品销售，AI Agent 创作者变现。"
descriptionEn: "Gumroad digital product selling platform MCP for creator economy digital product sales for AI Agent creator monetization."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 3
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @gumroad/mcp-server"
envVars: ["GUMROAD_API_KEY"]
configExample: |
  {
    "mcpServers": { "gumroad": { "command": "npx", "args": ["-y", "@gumroad/mcp-server"], "env": { "GUMROAD_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Gumroad MCP

Gumroad 数字产品销售平台 MCP，创作者经济数字产品销售，AI Agent 创作者变现。
