---
title: "Railway MCP"
name: railway-mcp
category: mcp-servers
tags: [railway, deployment, hosting, database, infrastructure]
price: paid
website: https://railway.app
logo: 
description: "Railway 现代化应用部署平台 MCP，支持多语言、数据库和反向代理，自动配置 HTTPS。"
descriptionEn: "Railway modern application deployment platform MCP supporting multiple languages, databases and reverse proxy with auto HTTPS."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @railway/mcp-server"
envVars: ["RAILWAY_TOKEN"]
configExample: |
  {
    "mcpServers": { "railway": { "command": "npx", "args": ["-y", "@railway/mcp-server"], "env": { "RAILWAY_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Railway MCP

Railway 现代化应用部署平台 MCP，支持多语言、数据库和反向代理，自动配置 HTTPS。
