---
title: "Twilio MCP"
name: twilio-mcp
category: mcp-servers
tags: [twilio, sms, voice, phone, messaging]
price: pay-as-you-go
website: https://twilio.com
logo: 
description: "Twilio 通信平台 MCP，发送 SMS、处理语音电话和实现 2FA，企业通信自动化必备。"
descriptionEn: "Twilio communications platform MCP for sending SMS, handling voice calls and 2FA — essential for enterprise communications automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @twilio/mcp-server"
envVars: ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"]
configExample: |
  {
    "mcpServers": { "twilio": { "command": "npx", "args": ["-y", "@twilio/mcp-server"], "env": { "TWILIO_ACCOUNT_SID": "ACxxx", "TWILIO_AUTH_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Twilio MCP

Twilio 通信平台 MCP，发送 SMS、处理语音电话和实现 2FA，企业通信自动化必备。
