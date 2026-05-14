---
title: "LocationIQ MCP"
name: locationiq-mcp
category: mcp-servers
tags: [locationiq, geocoding, maps, location, api]
price: freemium
website: https://locationiq.com
logo: 
description: "LocationIQ 地理编码平台 MCP，OpenStreetMap 驱动的地理编码，AI Agent 地理定位。"
descriptionEn: "LocationIQ geocoding platform MCP for OpenStreetMap-powered geocoding for AI Agent geolocation."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @locationiq/mcp-server"
envVars: ["LOCATIONIQ_API_KEY"]
configExample: |
  {
    "mcpServers": { "locationiq": { "command": "npx", "args": ["-y", "@locationiq/mcp-server"], "env": { "LOCATIONIQ_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# LocationIQ MCP

LocationIQ 地理编码平台 MCP，OpenStreetMap 驱动的地理编码，AI Agent 地理定位。
