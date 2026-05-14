---
title: "Mapbox Search MCP"
name: mapbox-search-mcp
category: mcp-servers
tags: [mapbox, search, geocoding, places, location]
price: freemium
website: https://mapbox.com
logo: 
description: "Mapbox Search 地图搜索 MCP，地理编码和地点搜索，AI Agent 地图搜索。"
descriptionEn: "Mapbox Search map search MCP for geocoding and place search for AI Agent map search."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @mapbox/search-mcp"
envVars: ["MAPBOX_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "mapbox-search": { "command": "npx", "args": ["-y", "@mapbox/search-mcp"], "env": { "MAPBOX_ACCESS_TOKEN": "pk.xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Mapbox Search MCP

Mapbox Search 地图搜索 MCP，地理编码和地点搜索，AI Agent 地图搜索。
