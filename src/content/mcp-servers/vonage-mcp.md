---
title: "Vonage MCP"
name: vonage-mcp
category: mcp-servers
tags: [vonage, sms, voice, api, telecommunications]
price: pay-as-you-go
website: https://vonage.com
logo: 
description: "Vonage 通信 API 平台 MCP，SMS、语音和视频 API，AI Agent 通信 API。"
descriptionEn: "Vonage communication API platform MCP for SMS, voice and video API for AI Agent communication API."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @vonage/mcp-server"
envVars: ["VONAGE_API_KEY", "VONAGE_API_SECRET"]
configExample: |
  {
    "mcpServers": { "vonage": { "command": "npx", "args": ["-y", "@vonage/mcp-server"], "env": { "VONAGE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Vonage MCP

Vonage 通信 API 平台 MCP，SMS、语音和视频 API，AI Agent 通信 API。
