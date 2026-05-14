---
title: "Google Maps MCP"
name: google-maps-mcp
category: mcp-servers
tags: [google, maps, geocoding, places, location]
price: freemium
website: https://developers.google.com/maps
logo: 
description: "Google Maps 平台 MCP，地理编码、地点搜索、路线规划和距离矩阵，AI Agent 位置智能服务。"
descriptionEn: "Google Maps platform MCP for geocoding, place search, routing and distance matrix — AI Agent location intelligence."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @google/mcp-server-maps"
envVars: ["GOOGLE_MAPS_API_KEY"]
configExample: |
  {
    "mcpServers": { "google-maps": { "command": "npx", "args": ["-y", "@google/mcp-server-maps"], "env": { "GOOGLE_MAPS_API_KEY": "AIza.xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Maps MCP

Google Maps 平台 MCP，地理编码、地点搜索、路线规划和距离矩阵，AI Agent 位置智能服务。
