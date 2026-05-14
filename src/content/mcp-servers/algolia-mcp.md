---
title: "Algolia MCP"
name: algolia-mcp
category: mcp-servers
tags: [algolia, search, api, instant, relevance]
price: freemium
website: https://algolia.com
logo: 
description: "Algolia 搜索即服务平台 MCP，即时搜索引擎，强大的相关性和分析功能。"
descriptionEn: "Algolia search-as-a-service platform MCP with instant search engine and powerful relevance and analytics."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "recommended"
installCommand: "npx @algolia/mcp-server"
envVars: ["ALGOLIA_APP_ID", "ALGOLIA_API_KEY"]
configExample: |
  {
    "mcpServers": { "algolia": { "command": "npx", "args": ["-y", "@algolia/mcp-server"], "env": { "ALGOLIA_APP_ID": "xxx", "ALGOLIA_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Algolia MCP

Algolia 搜索即服务平台 MCP，即时搜索引擎，强大的相关性和分析功能。
