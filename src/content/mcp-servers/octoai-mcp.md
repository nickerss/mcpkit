---
title: "OctoAI MCP"
name: octoai-mcp
category: mcp-servers
tags: [octoai, ai, inference, serverless, llm]
price: pay-as-you-go
website: https://octo.ai
logo: 
description: "OctoAI 多模型推理平台 MCP，访问 Stable Diffusion、Llama 等开源模型，高性能推理。"
descriptionEn: "OctoAI multi-model inference platform MCP accessing Stable Diffusion, Llama and other open-source models with high-performance inference."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.6
certificationStatus: "pending"
installCommand: "npx @octoai/mcp-server"
envVars: ["OCTOAI_API_KEY"]
configExample: |
  {
    "mcpServers": { "octoai": { "command": "npx", "args": ["-y", "@octoai/mcp-server"], "env": { "OCTOAI_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# OctoAI MCP

OctoAI 多模型推理平台 MCP，访问 Stable Diffusion、Llama 等开源模型，高性能推理。
