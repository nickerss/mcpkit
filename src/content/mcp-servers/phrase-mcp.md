---
title: "Phrase MCP"
name: phrase-mcp
category: mcp-servers
tags: [phrase, i18n, localization, translation, api]
price: freemium
website: https://phrase.com
logo: 
description: "Phrase 翻译和本地化平台 MCP，企业翻译管理平台，AI Agent 企业翻译。"
descriptionEn: "Phrase translation and localization platform MCP for enterprise translation management for AI Agent enterprise translation."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @phrase/mcp-server"
envVars: ["PHRASE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "phrase": { "command": "npx", "args": ["-y", "@phrase/mcp-server"], "env": { "PHRASE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Phrase MCP

Phrase 翻译和本地化平台 MCP，企业翻译管理平台，AI Agent 企业翻译。
