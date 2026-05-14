---
title: "Lokalise MCP"
name: lokalise-mcp
category: mcp-servers
tags: [lokalise, i18n, localization, translation, api]
price: freemium
website: https://lokalise.com
logo: 
description: "Lokalise 翻译和本地化平台 MCP，专业翻译管理和 API，AI Agent 专业翻译。"
descriptionEn: "Lokalise translation and localization platform MCP for professional translation management and API for AI Agent professional translation."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @lokalise/mcp-server"
envVars: ["LOKALISE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "lokalise": { "command": "npx", "args": ["-y", "@lokalise/mcp-server"], "env": { "LOKALISE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Lokalise MCP

Lokalise 翻译和本地化平台 MCP，专业翻译管理和 API，AI Agent 专业翻译。
