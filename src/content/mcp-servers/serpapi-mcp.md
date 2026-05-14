---
title: "SerpAPI MCP"
name: serpapi-mcp
category: mcp-servers
tags: [serpapi, google, search, api, scraping]
price: freemium
website: https://serpapi.com
logo: 
description: "Google 搜索 API MCP，通过 SerpAPI 访问 Google、Bing 等搜索引擎结果，结构化搜索数据。"
descriptionEn: "Google Search API MCP accessing Google, Bing and other search engine results via SerpAPI with structured data output."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "reviewed"
installCommand: "npx @serpapi/mcp-server"
envVars: ["SERPAPI_KEY"]
configExample: |
  {
    "mcpServers": { "serpapi": { "command": "npx", "args": ["-y", "@serpapi/mcp-server"], "env": { "SERPAPI_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# SerpAPI MCP

Google 搜索 API MCP，通过 SerpAPI 访问 Google、Bing 等搜索引擎结果，结构化搜索数据。
