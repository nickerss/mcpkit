---
title: "Notion SDK MCP"
name: notion-sdk-mcp
category: mcp-servers
tags: [notion, sdk, api, database, pages]
price: freemium
website: https://developers.notion.com
logo: 
description: "Notion 官方 SDK MCP，提供更完整的 API 功能支持，包括数据库双向同步和块操作。"
descriptionEn: "Notion official SDK MCP providing complete API functionality including bidirectional database sync and block operations."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "certified"
installCommand: "npx @notionhq/mcp-server"
envVars: ["NOTION_API_KEY"]
configExample: |
  {
    "mcpServers": { "notion-sdk": { "command": "npx", "args": ["-y", "@notionhq/mcp-server"], "env": { "NOTION_API_KEY": "secret_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Notion SDK MCP

Notion 官方 SDK MCP，提供更完整的 API 功能支持，包括数据库双向同步和块操作。
