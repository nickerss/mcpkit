---
title: "LibreTranslate MCP"
name: libretranslate-mcp
category: mcp-servers
tags: [libretranslate, translation, open-source, self-hosted, privacy]
price: free
website: https://libretranslate.com
logo: 
description: "LibreTranslate 开源翻译平台 MCP，隐私优先的自托管翻译，AI Agent 私密翻译。"
descriptionEn: "LibreTranslate open-source translation platform MCP for privacy-first self-hosted translation for AI Agent private translation."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 3
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @libretranslate/mcp-server"
envVars: ["LIBRETRANSLATE_URL"]
configExample: |
  {
    "mcpServers": { "libretranslate": { "command": "npx", "args": ["-y", "@libretranslate/mcp-server"], "env": { "LIBRETRANSLATE_URL": "http://localhost:5000" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# LibreTranslate MCP

LibreTranslate 开源翻译平台 MCP，隐私优先的自托管翻译，AI Agent 私密翻译。
