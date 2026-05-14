---
title: "Workers AI MCP"
name: workers-ai-mcp
category: mcp-servers
tags: [cloudflare, workers, ai, llm, inference]
price: pay-as-you-go
website: https://developers.cloudflare.com/workers-ai
logo: 
description: "Cloudflare Workers AI 边缘 AI 推理平台 MCP，边缘运行 Llama 等开源模型，AI Agent 极速推理。"
descriptionEn: "Cloudflare Workers AI edge AI inference platform MCP running Llama and other open-source models at the edge for AI Agent ultra-fast inference."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 5
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @cloudflare/workers-ai-mcp"
envVars: ["CLOUDFLARE_API_TOKEN", "CF_ACCOUNT_ID"]
configExample: |
  {
    "mcpServers": { "workers-ai": { "command": "npx", "args": ["-y", "@cloudflare/workers-ai-mcp"], "env": { "CLOUDFLARE_API_TOKEN": "xxx", "CF_ACCOUNT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Workers AI MCP

Cloudflare Workers AI 边缘 AI 推理平台 MCP，边缘运行 Llama 等开源模型，AI Agent 极速推理。
