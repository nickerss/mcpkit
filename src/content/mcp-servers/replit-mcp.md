---
title: "Replit MCP"
name: replit-mcp
category: mcp-servers
tags: [replit, deployment, ide, hosting, collaborative]
price: freemium
website: https://replit.com
logo: 
description: "Replit 在线 IDE 和部署平台 MCP，浏览器内编程和部署，AI Agent 快速原型。"
descriptionEn: "Replit online IDE and deployment platform MCP for in-browser coding and deployment for AI Agent rapid prototyping."
evaluation:
  easeOfUse: 5
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @replit/mcp-server"
envVars: ["REPLIT_ID"]
configExample: |
  {
    "mcpServers": { "replit": { "command": "npx", "args": ["-y", "@replit/mcp-server"], "env": { "REPLIT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Replit MCP

Replit 在线 IDE 和部署平台 MCP，浏览器内编程和部署，AI Agent 快速原型。
