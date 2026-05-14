---
title: "Discord Webhooks MCP"
name: discord-webhooks-mcp
category: mcp-servers
tags: [discord, webhooks, messaging, automation, notifications]
price: free
website: https://discord.com/developers
logo: 
description: "Discord Webhooks MCP，通过 Webhook 发送格式化消息到 Discord 频道，AI Agent 通知机器人。"
descriptionEn: "Discord Webhooks MCP sending formatted messages to Discord channels via webhooks for AI Agent notification bots."
evaluation:
  easeOfUse: 5
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @discord/webhooks-mcp"
envVars: ["DISCORD_WEBHOOK_URL"]
configExample: |
  {
    "mcpServers": { "discord-webhooks": { "command": "npx", "args": ["-y", "@discord/webhooks-mcp"], "env": { "DISCORD_WEBHOOK_URL": "https://discord.com/api/webhooks/xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Discord Webhooks MCP

Discord Webhooks MCP，通过 Webhook 发送格式化消息到 Discord 频道，AI Agent 通知机器人。
