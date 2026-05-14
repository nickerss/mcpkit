---
title: "GPT-4 Vision MCP"
name: gpt4-vision-mcp
category: mcp-servers
tags: [gpt4-vision, openai, multimodal, image, understanding]
price: pay-as-you-go
website: https://platform.openai.com/docs/vision
logo: 
description: "OpenAI GPT-4 Vision 多模态理解 MCP，分析图片内容，支持图片问答和图文理解。"
descriptionEn: "OpenAI GPT-4 Vision multimodal understanding MCP analyzing image content with visual Q&A and image-text comprehension."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.7
certificationStatus: "certified"
installCommand: "npx @openai/vision-mcp"
envVars: ["OPENAI_API_KEY"]
configExample: |
  {
    "mcpServers": { "gpt4-vision": { "command": "npx", "args": ["-y", "@openai/vision-mcp"], "env": { "OPENAI_API_KEY": "sk-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GPT-4 Vision MCP

OpenAI GPT-4 Vision 多模态理解 MCP，分析图片内容，支持图片问答和图文理解。
