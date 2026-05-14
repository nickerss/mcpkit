---
title: "Telegram Bot MCP"
name: telegram-bot-mcp
category: mcp-servers
tags: [telegram, bot, messaging, automation, chat]
price: free
website: https://core.telegram.org/bots
logo: 
description: "Telegram Bot 平台 MCP，创建聊天机器人和自动化，AI Agent 消息自动化。"
descriptionEn: "Telegram Bot platform MCP for creating chat bots and automation for AI Agent messaging automation."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @telegram-bot/mcp-server"
envVars: ["TELEGRAM_BOT_TOKEN"]
configExample: |
  {
    "mcpServers": { "telegram-bot": { "command": "npx", "args": ["-y", "@telegram-bot/mcp-server"], "env": { "TELEGRAM_BOT_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Telegram Bot MCP

Telegram Bot 平台 MCP，创建聊天机器人和自动化，AI Agent 消息自动化。
