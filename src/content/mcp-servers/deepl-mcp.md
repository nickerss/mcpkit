---
title: "DeepL MCP"
name: deepl-mcp
category: mcp-servers
tags: [deepl, translation, ai, multilingual, localization]
price: freemium
website: https://deepl.com
logo: 
description: "DeepL AI 翻译平台 MCP，高质量多语言翻译，AI Agent 翻译本地化。"
descriptionEn: "DeepL AI translation platform MCP for high quality multilingual translation for AI Agent translation localization."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.6
certificationStatus: "recommended"
installCommand: "npx @deepl/mcp-server"
envVars: ["DEEPL_API_KEY"]
configExample: |
  {
    "mcpServers": { "deepl": { "command": "npx", "args": ["-y", "@deepl/mcp-server"], "env": { "DEEPL_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# DeepL MCP

DeepL AI 翻译平台 MCP，高质量多语言翻译，AI Agent 翻译本地化。
