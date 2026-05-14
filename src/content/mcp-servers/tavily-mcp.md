---
title: "Tavily MCP"
name: tavily-mcp
category: mcp-servers
tags: [tavily, search, ai, research, web]
price: freemium
website: https://tavily.com
logo: 
description: "Tavily AI 搜索 MCP，专为 AI 应用设计的搜索引擎，返回结构化、带来源的结果，适合 RAG 和 Agent 研究场景。"
descriptionEn: "Tavily AI search MCP designed for AI applications returning structured results with citations — ideal for RAG and Agent research."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 5
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @tavily/mcp-server"
envVars: ["TAVILY_API_KEY"]
configExample: |
  {
    "mcpServers": { "tavily": { "command": "npx", "args": ["-y", "@tavily/mcp-server"], "env": { "TAVILY_API_KEY": "tvly-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Tavily MCP

Tavily AI 搜索 MCP，专为 AI 应用设计的搜索引擎，返回结构化、带来源的结果，适合 RAG 和 Agent 研究场景。
