---
title: "Uptime Kuma MCP"
name: uptime-kuma-mcp
category: mcp-servers
tags: [uptime-kuma, monitoring, status, uptime, self-hosted]
price: free
website: https://uptime.kuma.pet
logo: 
description: "Uptime Kuma 自托管监控工具 MCP，监控网站和服务的可用性，自托管无需付费。"
descriptionEn: "Uptime Kuma self-hosted monitoring tool MCP for monitoring website and service availability without paying for hosting."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @uptime-kuma/mcp-server"
envVars: ["KUMA_URL"]
configExample: |
  {
    "mcpServers": { "uptime-kuma": { "command": "npx", "args": ["-y", "@uptime-kuma/mcp-server"], "env": { "KUMA_URL": "http://localhost:3001" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Uptime Kuma MCP

Uptime Kuma 自托管监控工具 MCP，监控网站和服务的可用性，自托管无需付费。
