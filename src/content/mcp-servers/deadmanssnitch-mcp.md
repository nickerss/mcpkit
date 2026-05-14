---
title: "DeadMansSnitch MCP"
name: deadmanssnitch-mcp
category: mcp-servers
tags: [deadmanssnitch, monitoring, alerting, cron, health-check]
price: free
website: https://deadmanssnitch.com
logo: 
description: "DeadMansSnitch 定时任务监控平台 MCP，Cron 健康检查和告警，AI Agent 定时任务监控。"
descriptionEn: "DeadMansSnitch scheduled task monitoring platform MCP for cron health checks and alerting for AI Agent scheduled task monitoring."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @deadmanssnitch/mcp-server"
envVars: ["DMS_API_KEY"]
configExample: |
  {
    "mcpServers": { "deadmanssnitch": { "command": "npx", "args": ["-y", "@deadmanssnitch/mcp-server"], "env": { "DMS_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# DeadMansSnitch MCP

DeadMansSnitch 定时任务监控平台 MCP，Cron 健康检查和告警，AI Agent 定时任务监控。
