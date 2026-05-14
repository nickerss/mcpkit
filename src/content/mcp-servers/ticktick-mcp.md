---
title: "TickTick MCP"
name: ticktick-mcp
category: mcp-servers
tags: [ticktick, tasks, todo, productivity, calendar]
price: freemium
website: https://ticktick.com
logo: 
description: "TickTick 任务和日历管理 MCP，任务、提醒和日历一体化，AI Agent 时间管理。"
descriptionEn: "TickTick task and calendar management MCP combining tasks, reminders and calendar in one for AI Agent time management."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @ticktick/mcp-server"
envVars: ["TICKTICK_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "ticktick": { "command": "npx", "args": ["-y", "@ticktick/mcp-server"], "env": { "TICKTICK_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# TickTick MCP

TickTick 任务和日历管理 MCP，任务、提醒和日历一体化，AI Agent 时间管理。
