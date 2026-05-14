---
title: "Midjourney MCP"
name: midjourney-mcp
category: mcp-servers
tags: [midjourney, image, generation, ai, discord]
price: paid
website: https://midjourney.com
logo: 
description: "Midjourney 图片生成 MCP，通过 API 访问 Midjourney 强大的图片生成能力（需官方 API 开放）。"
descriptionEn: "Midjourney image generation MCP accessing Midjourney powerful image generation via API (requires official API access)."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @midjourney/mcp-server"
envVars: ["MIDJOURNEY_API_KEY"]
configExample: |
  {
    "mcpServers": { "midjourney": { "command": "npx", "args": ["-y", "@midjourney/mcp-server"], "env": { "MIDJOURNEY_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Midjourney MCP

Midjourney 图片生成 MCP，通过 API 访问 Midjourney 强大的图片生成能力（需官方 API 开放）。
