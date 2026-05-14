---
title: "Dify MCP"
name: dify-mcp
category: mcp-servers
tags: [dify, llm, app-builder, agents, no-code]
price: free
website: https://dify.ai
logo: 
description: "Dify LLM 应用构建平台 MCP，可视化构建 LLM 应用、支持 Agent、RAG 和工作流，开源且可自托管。"
descriptionEn: "Dify LLM app building platform MCP for visual LLM app building with Agent, RAG and workflow support — open-source and self-hostable."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @dify/mcp-server"
envVars: ["DIFY_URL", "DIFY_API_KEY"]
configExample: |
  {
    "mcpServers": { "dify": { "command": "npx", "args": ["-y", "@dify/mcp-server"], "env": { "DIFY_URL": "https://api.dify.ai", "DIFY_API_KEY": "app-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Dify MCP

Dify LLM 应用构建平台 MCP，可视化构建 LLM 应用、支持 Agent、RAG 和工作流，开源且可自托管。
