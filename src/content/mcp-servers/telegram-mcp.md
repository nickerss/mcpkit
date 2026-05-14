---
title: "Telegram MCP"
name: telegram-mcp
category: mcp-servers
tags: [telegram, messaging, bot, chat, notifications]
price: free
website: https://core.telegram.org
logo: 
description: "Telegram 消息平台 MCP，发送消息、管理群组和处理 Bot 命令，适合个人和群组通知。"
descriptionEn: "Telegram messaging platform MCP for sending messages, managing groups and handling Bot commands — great for personal and group notifications."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.6
certificationStatus: "recommended"
installCommand: "npx @telegram/mcp-server"
envVars: ["TELEGRAM_BOT_TOKEN"]
configExample: |
  {
    "mcpServers": { "telegram": { "command": "npx", "args": ["-y", "@telegram/mcp-server"], "env": { "TELEGRAM_BOT_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Telegram MCP

Telegram 消息平台 MCP，发送消息、管理群组和处理 Bot 命令，适合个人和群组通知。
