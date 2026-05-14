---
title: "Instagram MCP"
name: instagram-mcp
category: mcp-servers
tags: [instagram, social, photos, api, meta]
price: freemium
website: https://developers.facebook.com
logo: 
description: "Instagram 社交平台 MCP，照片分享和内容管理，AI Agent 社交内容管理。"
descriptionEn: "Instagram social platform MCP for photo sharing and content management for AI Agent social content management."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @instagram/mcp-server"
envVars: ["INSTAGRAM_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "instagram": { "command": "npx", "args": ["-y", "@instagram/mcp-server"], "env": { "INSTAGRAM_ACCESS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Instagram MCP

Instagram 社交平台 MCP，照片分享和内容管理，AI Agent 社交内容管理。
