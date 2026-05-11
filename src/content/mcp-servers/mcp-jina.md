---
title: "Jina Reader MCP"
name: jina-reader-mcp
category: mcp-servers
tags: [jina, reader, web, parsing, rag]
price: freemium
website: https://jina.ai/reader
logo: 
descriptionEn: "Jina Reader MCP converts any URL into clean, structured Markdown - perfect for preprocessing web content before vector storage in RAG systems."
description: "Jina Reader MCP，将任意 URL 转换为干净、结构化的 Markdown - 在 RAG 系统向量存储前预处理网页内容的完美工具。"
kit: ["rag-research"]
kitRole: "URL to Markdown conversion for RAG pipeline ingestion"
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.8
certificationStatus: "recommended"
installCommand: "npx @jina/mcp-server"
envVars: ["JINA_API_KEY"]
configExample: |
  {
    "mcpServers": {
      "jina": {
        "command": "npx",
        "args": ["-y", "@jina/mcp-server"],
        "env": { "JINA_API_KEY": "jj_xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Jina Reader MCP

Jina Reader MCP converts any URL into clean, structured Markdown - perfect for preprocessing web content before vector storage in RAG systems.
