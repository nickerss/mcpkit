---
title: "Milvus MCP"
name: milvus-mcp
category: mcp-servers
tags: [milvus, vector, database, lsm, open-source]
price: free
website: https://milvus.io
logo: 
description: "Milvus 开源向量数据库 MCP，大规模向量相似性搜索，AI Agent 海量 RAG。"
descriptionEn: "Milvus open-source vector database MCP for large-scale vector similarity search for AI Agent massive RAG."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 5
  overall: 4
certificationStatus: "pending"
installCommand: "npx @milvus/mcp-server"
envVars: ["MILVUS_HOST", "MILVUS_PORT"]
configExample: |
  {
    "mcpServers": { "milvus": { "command": "npx", "args": ["-y", "@milvus/mcp-server"], "env": { "MILVUS_HOST": "localhost" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Milvus MCP

Milvus 开源向量数据库 MCP，大规模向量相似性搜索，AI Agent 海量 RAG。
