---
title: "Cloudflare Workers AI MCP"
name: cloudflare-workers-ai-mcp
category: mcp-servers
tags: [cloudflare, workers, ai, edge, inference]
price: freemium
website: https://developers.cloudflare.com/workers-ai
logo: 
description: "Cloudflare Workers AI MCP，在边缘运行 AI 模型，支持 Llama、Stable Diffusion 等，全球低延迟推理。"
descriptionEn: "Cloudflare Workers AI MCP running AI models at the edge, supporting Llama, Stable Diffusion with global low-latency inference."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @cloudflare/workers-ai-mcp"
envVars: ["CLOUDFLARE_API_TOKEN", "CF_ACCOUNT_ID"]
configExample: |
  {
    "mcpServers": { "workers-ai": { "command": "npx", "args": ["-y", "@cloudflare/workers-ai-mcp"], "env": { "CLOUDFLARE_API_TOKEN": "cf_xxx", "CF_ACCOUNT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloudflare Workers AI MCP

Cloudflare Workers AI MCP，在边缘运行 AI 模型，支持 Llama、Stable Diffusion 等，全球低延迟推理。
