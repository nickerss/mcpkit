---
title: "Perplexity MCP"
name: perplexity-mcp
category: mcp-servers
tags: [perplexity, search, llm, realtime, web]
price: freemium
website: https://perplexity.ai
logo: 
description: "Perplexity 实时问答 MCP，提供最新信息检索和带来源引用的 AI 回答，适合需要实时数据的 Agent。"
descriptionEn: "Perplexity real-time Q&A MCP delivering up-to-date information with source citations, ideal for agents needing fresh data."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 3
  activity: 5
  scenarioFit: 5
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @perplexity/mcp-server"
envVars: ["PERPLEXITY_API_KEY"]
configExample: |
  {
    "mcpServers": { "perplexity": { "command": "npx", "args": ["-y", "@perplexity/mcp-server"], "env": { "PERPLEXITY_API_KEY": "pplx-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Perplexity MCP

Perplexity 实时问答 MCP，提供最新信息检索和带来源引用的 AI 回答，适合需要实时数据的 Agent。
