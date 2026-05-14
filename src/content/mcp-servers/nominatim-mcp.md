---
title: "OpenStreetMap Nominatim MCP"
name: nominatim-mcp
category: mcp-servers
tags: [openstreetmap, nominatim, geocoding, maps, open-source]
price: free
website: https://nominatim.org
logo: 
description: "OpenStreetMap Nominatim 地理编码平台 MCP，开源地理编码和搜索，AI Agent 开源地图。"
descriptionEn: "OpenStreetMap Nominatim geocoding platform MCP for open-source geocoding and search for AI Agent open-source maps."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @openstreetmap/nominatim-mcp"
envVars: ["NOMINATIM_URL"]
configExample: |
  {
    "mcpServers": { "nominatim": { "command": "npx", "args": ["-y", "@openstreetmap/nominatim-mcp"], "env": { "NOMINATIM_URL": "https://nominatim.openstreetmap.org" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# OpenStreetMap Nominatim MCP

OpenStreetMap Nominatim 地理编码平台 MCP，开源地理编码和搜索，AI Agent 开源地图。
