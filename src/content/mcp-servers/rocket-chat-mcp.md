---
title: "Rocket.Chat MCP"
name: rocket-chat-mcp
category: mcp-servers
tags: [rocket, chat, open-source, self-hosted, messaging]
price: free
website: https://rocket.chat
logo: 
description: "Rocket.Chat 开源团队消息平台 MCP，功能丰富的自托管聊天，AI Agent 开源聊天。"
descriptionEn: "Rocket.Chat open-source team messaging platform MCP with feature-rich self-hosted chat for AI Agent open-source chat."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @rocket.chat/mcp-server"
envVars: ["ROCKETCHAT_URL", "ROCKETCHAT_USER", "ROCKETCHAT_PASSWORD"]
configExample: |
  {
    "mcpServers": { "rocket-chat": { "command": "npx", "args": ["-y", "@rocket.chat/mcp-server"], "env": { "ROCKETCHAT_URL": "https://rocket.mycompany.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Rocket.Chat MCP

Rocket.Chat 开源团队消息平台 MCP，功能丰富的自托管聊天，AI Agent 开源聊天。
