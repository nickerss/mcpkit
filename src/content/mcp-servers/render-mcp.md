---
title: "Render MCP"
name: render-mcp
category: mcp-servers
tags: [render, deployment, hosting, web-services, database]
price: freemium
website: https://render.com
logo: 
description: "Render 全托管云平台 MCP，支持 Web 服务、数据库、Redis 和 Cron Jobs，自动 HTTPS。"
descriptionEn: "Render fully managed cloud platform MCP supporting web services, databases, Redis and Cron Jobs with auto HTTPS."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "recommended"
installCommand: "npx @render/mcp-server"
envVars: ["RENDER_API_KEY"]
configExample: |
  {
    "mcpServers": { "render": { "command": "npx", "args": ["-y", "@render/mcp-server"], "env": { "RENDER_API_KEY": "rnd_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Render MCP

Render 全托管云平台 MCP，支持 Web 服务、数据库、Redis 和 Cron Jobs，自动 HTTPS。
