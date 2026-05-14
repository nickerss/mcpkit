---
title: "RingCentral MCP"
name: ringcentral-mcp
category: mcp-servers
tags: [ringcentral, messaging, video, phone, enterprise]
price: paid
website: https://ringcentral.com
logo: 
description: "RingCentral 企业通信平台 MCP，消息、视频和电话，AI Agent 企业通信。"
descriptionEn: "RingCentral enterprise communication platform MCP for messaging, video and phone for AI Agent enterprise communication."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @ringcentral/mcp-server"
envVars: ["RINGCENTRAL_CLIENT_ID", "RINGCENTRAL_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "ringcentral": { "command": "npx", "args": ["-y", "@ringcentral/mcp-server"], "env": { "RINGCENTRAL_CLIENT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# RingCentral MCP

RingCentral 企业通信平台 MCP，消息、视频和电话，AI Agent 企业通信。
