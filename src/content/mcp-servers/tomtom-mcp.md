---
title: "TomTom MCP"
name: tomtom-mcp
category: mcp-servers
tags: [tomtom, maps, navigation, geocoding, traffic]
price: freemium
website: https://tomtom.com
logo: 
description: "TomTom 地图和导航平台 MCP，导航和交通数据，AI Agent 导航服务。"
descriptionEn: "TomTom maps and navigation platform MCP for navigation and traffic data for AI Agent navigation services."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @tomtom/mcp-server"
envVars: ["TOMTOM_API_KEY"]
configExample: |
  {
    "mcpServers": { "tomtom": { "command": "npx", "args": ["-y", "@tomtom/mcp-server"], "env": { "TOMTOM_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# TomTom MCP

TomTom 地图和导航平台 MCP，导航和交通数据，AI Agent 导航服务。
