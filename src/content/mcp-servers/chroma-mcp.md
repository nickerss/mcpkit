---
title: "Chroma MCP"
name: chroma-mcp
category: mcp-servers
tags: [chroma, vector, database, rag, embeddings]
price: free
website: https://trychroma.com
logo: 
description: "Chroma 向量数据库 MCP，轻量级开源向量数据库，专为 AI 应用设计，适合本地开发。"
descriptionEn: "Chroma vector database MCP — lightweight open-source vector DB designed for AI apps, great for local development."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 3
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "reviewed"
installCommand: "npx @chroma/mcp-server"
envVars: ["CHROMA_HOST"]
configExample: |
  {
    "mcpServers": { "chroma": { "command": "npx", "args": ["-y", "@chroma/mcp-server"], "env": { "CHROMA_HOST": "localhost:8000" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Chroma MCP

Chroma 向量数据库 MCP，轻量级开源向量数据库，专为 AI 应用设计，适合本地开发。
