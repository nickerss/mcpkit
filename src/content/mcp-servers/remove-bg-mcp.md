---
title: "Remove.bg MCP"
name: remove-bg-mcp
category: mcp-servers
tags: [remove.bg, image, background, api, processing]
price: freemium
website: https://remove.bg
logo: 
description: "Remove.bg 图片背景移除平台 MCP，API 调用的背景移除，AI Agent 图片处理。"
descriptionEn: "Remove.bg image background removal platform MCP for API-called background removal for AI Agent image processing."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @remove-bg/mcp-server"
envVars: ["REMOVE_BG_API_KEY"]
configExample: |
  {
    "mcpServers": { "remove-bg": { "command": "npx", "args": ["-y", "@remove-bg/mcp-server"], "env": { "REMOVE_BG_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Remove.bg MCP

Remove.bg 图片背景移除平台 MCP，API 调用的背景移除，AI Agent 图片处理。
