---
title: "Stability AI MCP"
name: stability-ai-mcp
category: mcp-servers
tags: [stability, stable-diffusion, image, generation, ai]
price: freemium
website: https://stability.ai
logo: 
description: "Stability AI 图像生成平台 MCP，Stable Diffusion 模型，AI Agent 图像生成。"
descriptionEn: "Stability AI image generation platform MCP for Stable Diffusion models for AI Agent image generation."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "certified"
installCommand: "npx @stabilityai/mcp-server"
envVars: ["STABILITY_API_KEY"]
configExample: |
  {
    "mcpServers": { "stability-ai": { "command": "npx", "args": ["-y", "@stabilityai/mcp-server"], "env": { "STABILITY_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Stability AI MCP

Stability AI 图像生成平台 MCP，Stable Diffusion 模型，AI Agent 图像生成。
