---
title: "Calendar MCP"
name: calendar-mcp
category: mcp-servers
tags: [calendar, google, events, schedule, productivity]
price: freemium
website: https://calendar.google.com
logo: 
description: "Google 日历 MCP，读取和管理日历事件，AI Agent 日程管理和自动化提醒。"
descriptionEn: "Google Calendar MCP for reading and managing calendar events as an AI Agent scheduling and automated reminder tool."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @google/calendar-mcp"
envVars: ["GOOGLE_CALENDAR_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "calendar": { "command": "npx", "args": ["-y", "@google/calendar-mcp"], "env": { "GOOGLE_CALENDAR_CREDENTIALS": "/path/to/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Calendar MCP

Google 日历 MCP，读取和管理日历事件，AI Agent 日程管理和自动化提醒。
