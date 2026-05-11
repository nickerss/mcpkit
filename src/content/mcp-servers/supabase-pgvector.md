---
title: "Supabase PGVector MCP"
name: supabase-pgvector
category: mcp-servers
tags: [supabase, pgvector, vector, rag, embedding]
price: freemium
website: https://supabase.com
logo: 
descriptionEn: "Supabase MCP with PGVector extension for storing and querying embeddings - the vector database backbone for RAG research pipelines."
description: "Supabase MCP + PGVector 扩展，存储和查询向量嵌入 - RAG 研究流水线的向量数据库支柱。"
kit: ["rag-research"]
kitRole: "Vector storage and similarity search for RAG knowledge base"
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "recommended"
installCommand: "npx @supabase/mcp-server-supabase"
envVars: ["SUPABASE_ACCESS_TOKEN", "SUPABASE_DB_PASSWORD"]
configExample: |
  {
    "mcpServers": {
      "supabase": {
        "command": "npx",
        "args": ["-y", "@supabase/mcp-server-supabase"],
        "env": {
          "SUPABASE_ACCESS_TOKEN": "sb-xxx",
          "SUPABASE_DB_PASSWORD": "xxx"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Supabase PGVector MCP

Supabase MCP with PGVector extension for storing and querying embeddings - the vector database backbone for RAG research pipelines.
