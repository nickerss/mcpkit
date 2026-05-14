---
title: "Zoom Apps MCP"
name: zoom-apps-mcp
category: mcp-servers
tags: [zoom, video, meetings, apps, collaboration]
price: freemium
website: https://marketplace.zoom.us
logo: 
description: "Zoom Apps 视频会议平台 MCP，会议集成和应用，AI Agent 视频会议增强。"
descriptionEn: "Zoom Apps video conferencing platform MCP for meeting integration and apps for AI Agent video conferencing enhancement."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @zoom/apps-mcp"
envVars: ["ZOOM_CLIENT_ID", "ZOOM_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "zoom-apps": { "command": "npx", "args": ["-y", "@zoom/apps-mcp"], "env": { "ZOOM_CLIENT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Zoom Apps MCP

Zoom Apps 视频会议平台 MCP，会议集成和应用，AI Agent 视频会议增强。
