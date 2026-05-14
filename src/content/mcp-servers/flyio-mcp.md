---
title: "Fly.io MCP"
name: flyio-mcp
category: mcp-servers
tags: [flyio, deployment, edge, containers, anycast]
price: freemium
website: https://fly.io
logo: 
description: "Fly.io 边缘容器部署平台 MCP，容器化应用部署到全球多个机房，低延迟全球覆盖。"
descriptionEn: "Fly.io edge container deployment platform MCP deploying containerized apps to global PoPs for low-latency worldwide coverage."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "reviewed"
installCommand: "npx @flyio/mcp-server"
envVars: ["FLY_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "flyio": { "command": "npx", "args": ["-y", "@flyio/mcp-server"], "env": { "FLY_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Fly.io MCP

Fly.io 边缘容器部署平台 MCP，容器化应用部署到全球多个机房，低延迟全球覆盖。
