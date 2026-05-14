---
title: "Buildt MCP"
name: buildt-mcp
category: mcp-servers
tags: [buildt, ai, search, code, context]
price: freemium
website: https://buildt.ai
logo: 
description: "Buildt AI 代码搜索和生成工具 MCP，代码库语义搜索和生成，AI Agent 代码发现。"
descriptionEn: "Buildt AI code search and generation tool MCP for codebase semantic search and generation for AI Agent code discovery."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @buildt/mcp-server"
envVars: ["BUILDT_API_KEY"]
configExample: |
  {
    "mcpServers": { "buildt": { "command": "npx", "args": ["-y", "@buildt/mcp-server"], "env": { "BUILDT_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Buildt MCP

Buildt AI 代码搜索和生成工具 MCP，代码库语义搜索和生成，AI Agent 代码发现。
