---
title: "Typesense MCP"
name: typesense-mcp
category: mcp-servers
tags: [typesense, search, open-source, typo-tolerant, instant]
price: free
website: https://typesense.org
logo: 
description: "Typesense 开源即时搜索引擎 MCP，typo 容错搜索，支持地理搜索和分面过滤。"
descriptionEn: "Typesense open-source instant search engine MCP with typo-tolerant search supporting geo-search and faceted filtering."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @typesense/mcp-server"
envVars: ["TYPESENSE_HOST", "TYPESENSE_API_KEY"]
configExample: |
  {
    "mcpServers": { "typesense": { "command": "npx", "args": ["-y", "@typesense/mcp-server"], "env": { "TYPESENSE_HOST": "http://localhost:8108", "TYPESENSE_API_KEY": "xyz" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Typesense MCP

Typesense 开源即时搜索引擎 MCP，typo 容错搜索，支持地理搜索和分面过滤。
