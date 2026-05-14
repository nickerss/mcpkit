---
title: "Meilisearch MCP"
name: meilisearch-mcp
category: mcp-servers
tags: [meilisearch, search, open-source, typo-tolerant, instant]
price: free
website: https://meilisearch.com
logo: 
description: "Meilisearch 开源即时搜索引擎 MCP，typo 容错和直观的搜索体验，支持中文分词。"
descriptionEn: "Meilisearch open-source instant search engine MCP with typo tolerance and intuitive search experience with Chinese tokenization support."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @meilisearch/mcp-server"
envVars: ["MEILI_HOST", "MEILI_MASTER_KEY"]
configExample: |
  {
    "mcpServers": { "meilisearch": { "command": "npx", "args": ["-y", "@meilisearch/mcp-server"], "env": { "MEILI_HOST": "http://localhost:7700", "MEILI_MASTER_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Meilisearch MCP

Meilisearch 开源即时搜索引擎 MCP，typo 容错和直观的搜索体验，支持中文分词。
