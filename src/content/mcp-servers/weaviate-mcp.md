---
title: "Weaviate MCP"
name: weaviate-mcp
category: mcp-servers
tags: [weaviate, vector, database, rag, graphql]
price: freemium
website: https://weaviate.io
logo: 
description: "Weaviate 向量数据库 MCP，支持 GraphQL 查询和混合搜索，内置向量化功能。"
descriptionEn: "Weaviate vector database MCP with GraphQL queries and hybrid search with built-in vectorization."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @weaviate/mcp-server"
envVars: ["WEAVIATE_URL", "WEAVIATE_API_KEY"]
configExample: |
  {
    "mcpServers": { "weaviate": { "command": "npx", "args": ["-y", "@weaviate/mcp-server"], "env": { "WEAVIATE_URL": "http://localhost:8080", "WEAVIATE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Weaviate MCP

Weaviate 向量数据库 MCP，支持 GraphQL 查询和混合搜索，内置向量化功能。
