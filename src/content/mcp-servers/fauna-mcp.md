---
title: "Fauna MCP"
name: fauna-mcp
category: mcp-servers
tags: [fauna, database, nosql, serverless, api]
price: freemium
website: https://fauna.com
logo: 
description: "Fauna 服务器无数据平台 MCP，灵活的数据库 API，AI Agent 无服务器数据。"
descriptionEn: "Fauna serverless data platform MCP with flexible database API for AI Agent serverless data."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 3
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @fauna/mcp-server"
envVars: ["FAUNA_SECRET"]
configExample: |
  {
    "mcpServers": { "fauna": { "command": "npx", "args": ["-y", "@fauna/mcp-server"], "env": { "FAUNA_SECRET": "fn_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Fauna MCP

Fauna 服务器无数据平台 MCP，灵活的数据库 API，AI Agent 无服务器数据。
