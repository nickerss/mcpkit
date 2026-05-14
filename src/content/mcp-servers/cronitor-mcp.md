---
title: "Cronitor MCP"
name: cronitor-mcp
category: mcp-servers
tags: [cronitor, monitoring, cron, jobs, uptime]
price: freemium
website: https://cronitor.io
logo: 
description: "Cronitor 定时任务监控平台 MCP，Cron 任务和心跳监控，AI Agent 定时任务管理。"
descriptionEn: "Cronitor cron job monitoring platform MCP for cron tasks and heartbeat monitoring for AI Agent cron job management."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @cronitor/mcp-server"
envVars: ["CRONITOR_API_KEY"]
configExample: |
  {
    "mcpServers": { "cronitor": { "command": "npx", "args": ["-y", "@cronitor/mcp-server"], "env": { "CRONITOR_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cronitor MCP

Cronitor 定时任务监控平台 MCP，Cron 任务和心跳监控，AI Agent 定时任务管理。
