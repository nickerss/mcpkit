---
title: "TikTok MCP"
name: tiktok-mcp
category: mcp-servers
tags: [tiktok, social, video, short-form, api]
price: freemium
website: https://developers.tiktok.com
logo: 
description: "TikTok 短视频平台 MCP，短视频内容管理，AI Agent 短视频管理。"
descriptionEn: "TikTok short video platform MCP for short video content management for AI Agent short video management."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @tiktok/mcp-server"
envVars: ["TIKTOK_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "tiktok": { "command": "npx", "args": ["-y", "@tiktok/mcp-server"], "env": { "TIKTOK_ACCESS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# TikTok MCP

TikTok 短视频平台 MCP，短视频内容管理，AI Agent 短视频管理。
