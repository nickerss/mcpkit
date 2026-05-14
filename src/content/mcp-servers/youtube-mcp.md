---
title: "YouTube MCP"
name: youtube-mcp
category: mcp-servers
tags: [youtube, video, google, api, content]
price: free
website: https://developers.google.com/youtube
logo: 
description: "YouTube 视频平台 MCP，视频内容管理和分析，AI Agent 视频内容管理。"
descriptionEn: "YouTube video platform MCP for video content management and analytics for AI Agent video content management."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @google/youtube-mcp"
envVars: ["GOOGLE_API_KEY"]
configExample: |
  {
    "mcpServers": { "youtube": { "command": "npx", "args": ["-y", "@google/youtube-mcp"], "env": { "GOOGLE_API_KEY": "AIza_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# YouTube MCP

YouTube 视频平台 MCP，视频内容管理和分析，AI Agent 视频内容管理。
