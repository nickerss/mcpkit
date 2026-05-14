---
title: "Healthchecks MCP"
name: healthchecks-mcp
category: mcp-servers
tags: [healthchecks, cron, monitoring, uptime, ping]
price: freemium
website: https://healthchecks.io
logo: 
description: "Healthchecks 定时任务监控 MCP，监控 Cron 任务和后台任务的执行状态，AI Agent 任务可靠性验证。"
descriptionEn: "Healthchecks cron job monitoring MCP for monitoring execution status of Cron jobs and background tasks for AI Agent task reliability verification."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @healthchecks/mcp-server"
envVars: ["HEALTHCHECKS_API_KEY"]
configExample: |
  {
    "mcpServers": { "healthchecks": { "command": "npx", "args": ["-y", "@healthchecks/mcp-server"], "env": { "HEALTHCHECKS_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Healthchecks MCP

Healthchecks 定时任务监控 MCP，监控 Cron 任务和后台任务的执行状态，AI Agent 任务可靠性验证。
