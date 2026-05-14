---
title: "IPinfo MCP"
name: ipinfo-mcp
category: mcp-servers
tags: [ipinfo, ip, geolocation, network, api]
price: freemium
website: https://ipinfo.io
logo: 
description: "IPinfo IP 地址查询 API MCP，IP 地理位置和网络信息，AI Agent IP 分析。"
descriptionEn: "IPinfo IP address lookup API MCP for IP geolocation and network info for AI Agent IP analysis."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 3
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @ipinfo/mcp-server"
envVars: ["IPINFO_API_KEY"]
configExample: |
  {
    "mcpServers": { "ipinfo": { "command": "npx", "args": ["-y", "@ipinfo/mcp-server"], "env": { "IPINFO_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# IPinfo MCP

IPinfo IP 地址查询 API MCP，IP 地理位置和网络信息，AI Agent IP 分析。
