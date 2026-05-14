---
title: "Cloudflare Stream MCP"
name: cloudflare-stream-mcp
category: mcp-servers
tags: [cloudflare, stream, video, streaming, platform]
price: paid
website: https://cloudflare.com
logo: 
description: "Cloudflare Stream 视频流平台 MCP，边缘视频流和托管，AI Agent 视频流。"
descriptionEn: "Cloudflare Stream video streaming platform MCP for edge video streaming and hosting for AI Agent video streaming."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @cloudflare/stream-mcp"
envVars: ["CLOUDFLARE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "cloudflare-stream": { "command": "npx", "args": ["-y", "@cloudflare/stream-mcp"], "env": { "CLOUDFLARE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloudflare Stream MCP

Cloudflare Stream 视频流平台 MCP，边缘视频流和托管，AI Agent 视频流。
