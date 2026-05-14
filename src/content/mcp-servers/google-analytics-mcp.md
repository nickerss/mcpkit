---
title: "Google Analytics MCP"
name: google-analytics-mcp
category: mcp-servers
tags: [google, analytics, ga4, web-analytics, reporting]
price: free
website: https://analytics.google.com
logo: 
description: "Google Analytics GA4 MCP，网站和应用数据分析，AI Agent 流量和转化分析。"
descriptionEn: "Google Analytics GA4 MCP for web and app data analysis for AI Agent traffic and conversion analysis."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @google/analytics-mcp"
envVars: ["GOOGLE_ANALYTICS_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "google-analytics": { "command": "npx", "args": ["-y", "@google/analytics-mcp"], "env": { "GOOGLE_ANALYTICS_CREDENTIALS": "/path/to/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Analytics MCP

Google Analytics GA4 MCP，网站和应用数据分析，AI Agent 流量和转化分析。
