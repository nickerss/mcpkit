---
title: "Zoom MCP"
name: zoom-mcp
category: mcp-servers
tags: [zoom, video, meetings, webinars, calendar]
price: freemium
website: https://developers.zoom.us
logo: 
description: "Zoom 视频会议 MCP，创建和管理会议、 webinars 和日程，AI Agent 可自动化会议安排和摘要。"
descriptionEn: "Zoom video conferencing MCP for creating/managing meetings, webinars and calendars for AI Agent scheduling and summarization."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "recommended"
installCommand: "npx @zoom/mcp-server"
envVars: ["ZOOM_ACCOUNT_ID", "ZOOM_CLIENT_ID", "ZOOM_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "zoom": { "command": "npx", "args": ["-y", "@zoom/mcp-server"], "env": { "ZOOM_ACCOUNT_ID": "xxx", "ZOOM_CLIENT_ID": "xxx", "ZOOM_CLIENT_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Zoom MCP

Zoom 视频会议 MCP，创建和管理会议、 webinars 和日程，AI Agent 可自动化会议安排和摘要。
