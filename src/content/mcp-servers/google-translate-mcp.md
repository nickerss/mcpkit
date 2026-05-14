---
title: "Google Translate MCP"
name: google-translate-mcp
category: mcp-servers
tags: [google, translate, translation, multilingual, api]
price: freemium
website: https://cloud.google.com/translate
logo: 
description: "Google Translate 翻译 API MCP，支持 100+ 语言，AI Agent 快速翻译。"
descriptionEn: "Google Translate translation API MCP supporting 100+ languages for AI Agent fast translation."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @google/translate-mcp"
envVars: ["GOOGLE_TRANSLATE_API_KEY"]
configExample: |
  {
    "mcpServers": { "google-translate": { "command": "npx", "args": ["-y", "@google/translate-mcp"], "env": { "GOOGLE_TRANSLATE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Translate MCP

Google Translate 翻译 API MCP，支持 100+ 语言，AI Agent 快速翻译。
