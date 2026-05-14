---
title: "UptimeRobot MCP"
name: uptimerobot-mcp
category: mcp-servers
tags: [uptimerobot, monitoring, uptime, http, ping]
price: freemium
website: https://uptimerobot.com
logo: 
description: "UptimeRobot 网站监控平台 MCP，HTTP 和 Ping 监控，AI Agent 网站监控。"
descriptionEn: "UptimeRobot website monitoring platform MCP for HTTP and Ping monitoring for AI Agent website monitoring."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @uptimerobot/mcp-server"
envVars: ["UPTIME_ROBOT_API_KEY"]
configExample: |
  {
    "mcpServers": { "uptimerobot": { "command": "npx", "args": ["-y", "@uptimerobot/mcp-server"], "env": { "UPTIME_ROBOT_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# UptimeRobot MCP

UptimeRobot 网站监控平台 MCP，HTTP 和 Ping 监控，AI Agent 网站监控。
