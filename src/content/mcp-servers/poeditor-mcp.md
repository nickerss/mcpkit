---
title: "POEditor MCP"
name: poeditor-mcp
category: mcp-servers
tags: [poeditor, i18n, localization, translation, api]
price: freemium
website: https://poeditor.com
logo: 
description: "POEditor 翻译管理平台 MCP，协作翻译管理和 API，AI Agent 翻译管理。"
descriptionEn: "POEditor translation management platform MCP for collaborative translation management and API for AI Agent translation management."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @poeditor/mcp-server"
envVars: ["POEDITOR_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "poeditor": { "command": "npx", "args": ["-y", "@poeditor/mcp-server"], "env": { "POEDITOR_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# POEditor MCP

POEditor 翻译管理平台 MCP，协作翻译管理和 API，AI Agent 翻译管理。
