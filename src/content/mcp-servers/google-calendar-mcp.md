---
title: "Google Calendar MCP"
name: google-calendar-mcp
category: mcp-servers
tags: [google, calendar, schedule, events, productivity]
price: freemium
website: https://calendar.google.com
logo: 
description: "Google Calendar 日历平台 MCP，日程管理和事件创建，AI Agent 时间管理。"
descriptionEn: "Google Calendar platform MCP for schedule management and event creation for AI Agent time management."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.6
certificationStatus: "certified"
installCommand: "npx @google/calendar-mcp"
envVars: ["GOOGLE_CALENDAR_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "google-calendar": { "command": "npx", "args": ["-y", "@google/calendar-mcp"], "env": { "GOOGLE_CALENDAR_CREDENTIALS": "/path/to/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Calendar MCP

Google Calendar 日历平台 MCP，日程管理和事件创建，AI Agent 时间管理。
