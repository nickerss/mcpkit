---
title: "Plivo MCP"
name: plivo-mcp
category: mcp-servers
tags: [plivo, sms, voice, api, telecom]
price: pay-as-you-go
website: https://plivo.com
logo: 
description: "Plivo 通信 API 平台 MCP，SMS 和语音 API，AI Agent 通信 API。"
descriptionEn: "Plivo communication API platform MCP for SMS and voice API for AI Agent communication API."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @plivo/mcp-server"
envVars: ["PLIVO_AUTH_ID", "PLIVO_AUTH_TOKEN"]
configExample: |
  {
    "mcpServers": { "plivo": { "command": "npx", "args": ["-y", "@plivo/mcp-server"], "env": { "PLIVO_AUTH_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Plivo MCP

Plivo 通信 API 平台 MCP，SMS 和语音 API，AI Agent 通信 API。
