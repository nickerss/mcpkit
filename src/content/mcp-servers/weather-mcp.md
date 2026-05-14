---
title: "Weather MCP"
name: weather-mcp
category: mcp-servers
tags: [weather, api, forecast, location, meteorological]
price: free
website: https://open-meteo.com
logo: 
description: "天气数据 MCP，获取实时天气和预报数据，无需 API 密钥（使用 Open-Meteo 免费接口）。"
descriptionEn: "Weather data MCP for real-time weather and forecast data without API keys using Open-Meteo free API."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 3
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @weather/mcp-server"
envVars: []
configExample: |
  {
    "mcpServers": { "weather": { "command": "npx", "args": ["-y", "@weather/mcp-server"] } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Weather MCP

天气数据 MCP，获取实时天气和预报数据，无需 API 密钥（使用 Open-Meteo 免费接口）。
