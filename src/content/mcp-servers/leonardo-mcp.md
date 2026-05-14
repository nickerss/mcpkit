---
title: "Leonardo.ai MCP"
name: leonardo-mcp
category: mcp-servers
tags: [leonardo, image, generation, ai, stable-diffusion]
price: freemium
website: https://leonardo.ai
logo: 
description: "Leonardo.ai 图片生成 MCP，基于 Stable Diffusion 的 AI 图片生成平台，支持自定义模型训练。"
descriptionEn: "Leonardo.ai image generation MCP based on Stable Diffusion with custom model training support."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 3
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @leonardo/mcp-server"
envVars: ["LEONARDO_API_KEY"]
configExample: |
  {
    "mcpServers": { "leonardo": { "command": "npx", "args": ["-y", "@leonardo/mcp-server"], "env": { "LEONARDO_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Leonardo.ai MCP

Leonardo.ai 图片生成 MCP，基于 Stable Diffusion 的 AI 图片生成平台，支持自定义模型训练。
