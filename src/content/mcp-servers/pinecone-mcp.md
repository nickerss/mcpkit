---
title: "Pinecone MCP"
name: pinecone-mcp
category: mcp-servers
tags: [pinecone, vector, database, rag, embeddings]
price: freemium
website: https://pinecone.io
logo: 
description: "Pinecone 向量数据库 MCP，全球托管的向量相似性搜索服务，适合大规模 RAG 应用。"
descriptionEn: "Pinecone vector database MCP — globally managed vector similarity search for large-scale RAG applications."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 5
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @pinecone/mcp-server"
envVars: ["PINECONE_API_KEY", "PINECONE_ENVIRONMENT"]
configExample: |
  {
    "mcpServers": { "pinecone": { "command": "npx", "args": ["-y", "@pinecone/mcp-server"], "env": { "PINECONE_API_KEY": "xxx", "PINECONE_ENVIRONMENT": "us-east-1" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Pinecone MCP

Pinecone 向量数据库 MCP，全球托管的向量相似性搜索服务，适合大规模 RAG 应用。
