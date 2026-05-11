---
title: "OpenAI MCP"
name: openai-mcp
category: mcp-servers
tags: [openai, gpt, llm, ai, embedding]
price: pay-as-you-go
website: https://openai.com
logo: 
description: OpenAI GPT and Embedding API MCP for RAG analysis and text generation - widely used for embeddings and GPT-4o synthesis in research pipelines.
kit: ["rag-research"]
kitRole: "Embedding generation and GPT-4o analysis for research synthesis"
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.7
certificationStatus: "recommended"
installCommand: "npx @openai/mcp-server"
envVars: ["OPENAI_API_KEY"]
configExample: |
  {
    "mcpServers": {
      "openai": {
        "command": "npx",
        "args": ["-y", "@openai/mcp-server"],
        "env": { "OPENAI_API_KEY": "sk-xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# OpenAI MCP

OpenAI GPT and Embedding API MCP for RAG analysis and text generation - widely used for embeddings and GPT-4o synthesis in research pipelines.
