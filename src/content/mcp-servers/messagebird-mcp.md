---
title: "MessageBird MCP"
name: messagebird-mcp
category: mcp-servers
tags: [messagebird, sms, voice, api, omnichannel]
price: pay-as-you-go
website: https://messagebird.com
logo: 
description: "MessageBird 全渠道通信平台 MCP，SMS、语音和聊天 API，AI Agent 全渠道通信。"
descriptionEn: "MessageBird omnichannel communication platform MCP for SMS, voice and chat API for AI Agent omnichannel communication."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @messagebird/mcp-server"
envVars: ["MESSAGEBIRD_API_KEY"]
configExample: |
  {
    "mcpServers": { "messagebird": { "command": "npx", "args": ["-y", "@messagebird/mcp-server"], "env": { "MESSAGEBIRD_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# MessageBird MCP

MessageBird 全渠道通信平台 MCP，SMS、语音和聊天 API，AI Agent 全渠道通信。
