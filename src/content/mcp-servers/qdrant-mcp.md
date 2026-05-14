---
title: "Qdrant MCP"
name: qdrant-mcp
category: mcp-servers
tags: [qdrant, vector, database, rag, open-source]
price: free
website: https://qdrant.tech
logo: 
description: "Qdrant 向量数据库 MCP，开源的高性能向量相似性搜索引擎，支持过滤和稠密/稀疏向量。"
descriptionEn: "Qdrant vector database MCP — open-source high-performance vector similarity search with filtering and dense/sparse vectors."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 5
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @qdrant/mcp-server"
envVars: ["QDRANT_URL", "QDRANT_API_KEY"]
configExample: |
  {
    "mcpServers": { "qdrant": { "command": "npx", "args": ["-y", "@qdrant/mcp-server"], "env": { "QDRANT_URL": "http://localhost:6333", "QDRANT_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Qdrant MCP

Qdrant 向量数据库 MCP，开源的高性能向量相似性搜索引擎，支持过滤和稠密/稀疏向量。
