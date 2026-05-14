---
title: "Replicate Image Gen MCP"
name: replicate-image-mcp
category: mcp-servers
tags: [replicate, image, generation, ai, stable-diffusion]
price: pay-as-you-go
website: https://replicate.com/collection/image-generation-models
logo: 
description: "Replicate 图片生成 MCP，集成 Stable Diffusion、FLUX、Playground 等主流图像生成模型。"
descriptionEn: "Replicate image generation MCP integrating Stable Diffusion, FLUX, Playground and other major image generation models."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 3
  activity: 4
  scenarioFit: 4
  overall: 3.6
certificationStatus: "pending"
installCommand: "npx @replicate/image-gen-mcp"
envVars: ["REPLICATE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "replicate-image": { "command": "npx", "args": ["-y", "@replicate/image-gen-mcp"], "env": { "REPLICATE_API_TOKEN": "r8_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Replicate Image Gen MCP

Replicate 图片生成 MCP，集成 Stable Diffusion、FLUX、Playground 等主流图像生成模型。
