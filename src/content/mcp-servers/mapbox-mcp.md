---
title: "Mapbox MCP"
name: mapbox-mcp
category: mcp-servers
tags: [mapbox, maps, geocoding, navigation, tiles]
price: freemium
website: https://mapbox.com
logo: 
description: "Mapbox 地图和导航 MCP，自定义地图样式、地理编码和路径规划，适合品牌化地图应用。"
descriptionEn: "Mapbox maps and navigation MCP with custom map styles, geocoding and routing for branded map applications."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "reviewed"
installCommand: "npx @mapbox/mcp-server"
envVars: ["MAPBOX_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "mapbox": { "command": "npx", "args": ["-y", "@mapbox/mcp-server"], "env": { "MAPBOX_ACCESS_TOKEN": "pk.xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Mapbox MCP

Mapbox 地图和导航 MCP，自定义地图样式、地理编码和路径规划，适合品牌化地图应用。
