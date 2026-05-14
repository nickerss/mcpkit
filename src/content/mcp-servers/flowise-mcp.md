---
title: "Flowise MCP"
name: flowise-mcp
category: mcp-servers
tags: [flowise, llm, rag, drag-drop, no-code]
price: free
website: https://flowiseai.com
logo: 
description: "Flowise 低代码 LLM 应用构建 MCP，拖拽式界面构建 RAG 和 Agent 应用，无需编程经验。"
descriptionEn: "Flowise low-code LLM app builder MCP with drag-and-drop interface for building RAG and Agent apps without coding experience."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @flowiseai/mcp-server"
envVars: ["FLOWISE_URL", "FLOWISE_API_KEY"]
configExample: |
  {
    "mcpServers": { "flowise": { "command": "npx", "args": ["-y", "@flowiseai/mcp-server"], "env": { "FLOWISE_URL": "http://localhost:3000", "FLOWISE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Flowise MCP

Flowise 低代码 LLM 应用构建 MCP，拖拽式界面构建 RAG 和 Agent 应用，无需编程经验。
