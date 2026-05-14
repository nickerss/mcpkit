---
title: "News API MCP"
name: news-api-mcp
category: mcp-servers
tags: [news, api, media, articles, research]
price: freemium
website: https://newsapi.org
logo: 
description: "新闻 API MCP，获取全球新闻文章和头条，AI Agent 市场研究和舆情监控工具。"
descriptionEn: "News API MCP for accessing global news articles and headlines as an AI Agent market research and sentiment monitoring tool."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 3
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @news/mcp-server"
envVars: ["NEWS_API_KEY"]
configExample: |
  {
    "mcpServers": { "news": { "command": "npx", "args": ["-y", "@news/mcp-server"], "env": { "NEWS_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# News API MCP

新闻 API MCP，获取全球新闻文章和头条，AI Agent 市场研究和舆情监控工具。
