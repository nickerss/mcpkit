---
title: "Replicate MCP"
name: replicate-mcp
category: mcp-servers
tags: [replicate, ai, image, video, llm]
price: pay-as-you-go
website: https://replicate.com
logo: 
description: "Replicate AI 模型推理平台 MCP，支持 Stable Diffusion、Flamingo 等数万模型，一键调用开源 AI 模型。"
descriptionEn: "Replicate AI model inference platform MCP supporting Stable Diffusion, Flamingo and 100k+ open-source AI models."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 3
  activity: 4
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @replicate/mcp-server"
envVars: ["REPLICATE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "replicate": { "command": "npx", "args": ["-y", "@replicate/mcp-server"], "env": { "REPLICATE_API_TOKEN": "r8_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Replicate MCP

Replicate AI 模型推理平台 MCP，支持 Stable Diffusion、Flamingo 等数万模型，一键调用开源 AI 模型。
