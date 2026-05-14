---
title: "Serper MCP"
name: serper-mcp
category: mcp-servers
tags: [serper, search, google, api, fast]
price: freemium
website: https://serper.dev
logo: 
description: "Serper Google 搜索 API MCP，超低延迟的 Google 搜索结果获取，适合实时搜索场景。"
descriptionEn: "Serper Google Search API MCP with ultra-low latency for real-time search scenarios requiring fresh Google results."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "reviewed"
installCommand: "npx @serper/mcp-server"
envVars: ["SERPER_API_KEY"]
configExample: |
  {
    "mcpServers": { "serper": { "command": "npx", "args": ["-y", "@serper/mcp-server"], "env": { "SERPER_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Serper MCP

Serper Google 搜索 API MCP，超低延迟的 Google 搜索结果获取，适合实时搜索场景。
