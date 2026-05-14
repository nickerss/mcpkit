---
title: "Fireworks MCP"
name: fireworks-mcp
category: mcp-servers
tags: [fireworks, llm, ai, inference, fast]
price: pay-as-you-go
website: https://fireworks.ai
logo: 
description: "Fireworks AI 高性能推理平台 MCP，支持 Mixtral、Llama 等模型的超高速推理。"
descriptionEn: "Fireworks AI high-performance inference platform MCP supporting ultra-fast inference for Mixtral, Llama and other models."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.6
certificationStatus: "pending"
installCommand: "npx @fireworks/mcp-server"
envVars: ["FIREWORKS_API_KEY"]
configExample: |
  {
    "mcpServers": { "fireworks": { "command": "npx", "args": ["-y", "@fireworks/mcp-server"], "env": { "FIREWORKS_API_KEY": "fw_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Fireworks MCP

Fireworks AI 高性能推理平台 MCP，支持 Mixtral、Llama 等模型的超高速推理。
