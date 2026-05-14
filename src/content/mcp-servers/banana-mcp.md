---
title: "Banana MCP"
name: banana-mcp
category: mcp-servers
tags: [banana, ai, inference, serverless, fine-tuning]
price: pay-as-you-go
website: https://banana.dev
logo: 
description: "Banana AI 推理平台 MCP，部署和扩展 AI 模型，支持自定义微调和个性化模型服务。"
descriptionEn: "Banana AI inference platform MCP for deploying and scaling AI models with custom fine-tuning and personalized model services."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @banana/mcp-server"
envVars: ["BANANA_API_KEY"]
configExample: |
  {
    "mcpServers": { "banana": { "command": "npx", "args": ["-y", "@banana/mcp-server"], "env": { "BANANA_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Banana MCP

Banana AI 推理平台 MCP，部署和扩展 AI 模型，支持自定义微调和个性化模型服务。
