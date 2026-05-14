---
title: "Cohere MCP"
name: cohere-mcp
category: mcp-servers
tags: [cohere, llm, embeddings, rerank, ai]
price: pay-as-you-go
website: https://cohere.com
logo: 
description: "Cohere AI MCP，支持 Command R 系列模型和 Embeddings API，适合企业级 RAG 和搜索增强场景。"
descriptionEn: "Cohere AI MCP supporting Command R series and Embeddings API for enterprise RAG and search augmentation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.8
certificationStatus: "reviewed"
installCommand: "npx @cohere/mcp-server"
envVars: ["COHERE_API_KEY"]
configExample: |
  {
    "mcpServers": { "cohere": { "command": "npx", "args": ["-y", "@cohere/mcp-server"], "env": { "COHERE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cohere MCP

Cohere AI MCP，支持 Command R 系列模型和 Embeddings API，适合企业级 RAG 和搜索增强场景。
