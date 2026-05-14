---
title: "DALL-E MCP"
name: dalle-mcp
category: mcp-servers
tags: [dall-e, openai, image, generation, ai]
price: pay-as-you-go
website: https://platform.openai.com/docs/api-reference/images
logo: 
description: "OpenAI DALL-E 图片生成 MCP，通过 API 生成和编辑图片，支持多种尺寸和风格。"
descriptionEn: "OpenAI DALL-E image generation MCP generating and editing images via API with multiple sizes and styles."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @openai/dalle-mcp"
envVars: ["OPENAI_API_KEY"]
configExample: |
  {
    "mcpServers": { "dalle": { "command": "npx", "args": ["-y", "@openai/dalle-mcp"], "env": { "OPENAI_API_KEY": "sk-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# DALL-E MCP

OpenAI DALL-E 图片生成 MCP，通过 API 生成和编辑图片，支持多种尺寸和风格。
