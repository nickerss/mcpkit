---
title: "NewsAPI MCP"
name: newsapi-mcp
category: mcp-servers
tags: [newsapi, news, articles, api, headlines]
price: freemium
website: https://newsapi.org
logo: 
description: "NewsAPI 新闻聚合 API 平台 MCP，全球新闻和头条，AI Agent 新闻聚合。"
descriptionEn: "NewsAPI news aggregation API platform MCP for global news and headlines for AI Agent news aggregation."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @newsapi/mcp-server"
envVars: ["NEWSAPI_API_KEY"]
configExample: |
  {
    "mcpServers": { "newsapi": { "command": "npx", "args": ["-y", "@newsapi/mcp-server"], "env": { "NEWSAPI_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# NewsAPI MCP

NewsAPI 新闻聚合 API 平台 MCP，全球新闻和头条，AI Agent 新闻聚合。
