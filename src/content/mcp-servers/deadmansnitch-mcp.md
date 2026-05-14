---
title: "DeadManSnitch MCP"
name: deadmansnitch-mcp
category: mcp-servers
tags: [deadmansnitch, monitoring, cron, heroku, notification]
price: free
website: https://deadmanssnitch.com
logo: 
description: "DeadManSnitch Cron 监控平台 MCP，Heroku Add-on 风格定时任务监控，AI Agent 简单定时监控。"
descriptionEn: "DeadManSnitch cron monitoring platform MCP with Heroku Add-on style cron job monitoring for AI Agent simple scheduled monitoring."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @deadmansnitch/mcp-server"
envVars: ["DMS_API_KEY"]
configExample: |
  {
    "mcpServers": { "deadmansnitch": { "command": "npx", "args": ["-y", "@deadmansnitch/mcp-server"], "env": { "DMS_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# DeadManSnitch MCP

DeadManSnitch Cron 监控平台 MCP，Heroku Add-on 风格定时任务监控，AI Agent 简单定时监控。
