---
title: "Pingdom MCP"
name: pingdom-mcp
category: mcp-servers
tags: [pingdom, monitoring, uptime, solarwinds, website]
price: paid
website: https://solarwinds.com
logo: 
description: "SolarWinds Pingdom 网站监控平台 MCP，网站和应用监控，AI Agent 网站监控。"
descriptionEn: "SolarWinds Pingdom website monitoring platform MCP for website and application monitoring for AI Agent website monitoring."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @pingdom/mcp-server"
envVars: ["PINGDOM_API_KEY"]
configExample: |
  {
    "mcpServers": { "pingdom": { "command": "npx", "args": ["-y", "@pingdom/mcp-server"], "env": { "PINGDOM_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Pingdom MCP

SolarWinds Pingdom 网站监控平台 MCP，网站和应用监控，AI Agent 网站监控。
