---
title: "Zulip MCP"
name: zulip-mcp
category: mcp-servers
tags: [zulip, messaging, open-source, threaded, email-like]
price: free
website: https://zulip.org
logo: 
description: "Zulip 开源团队消息平台 MCP，线程化消息和邮箱风格，AI Agent 线程化协作。"
descriptionEn: "Zulip open-source team messaging platform MCP with threaded messaging and email-style for AI Agent threaded collaboration."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @zulip/mcp-server"
envVars: ["ZULIP_URL", "ZULIP_API_KEY"]
configExample: |
  {
    "mcpServers": { "zulip": { "command": "npx", "args": ["-y", "@zulip/mcp-server"], "env": { "ZULIP_URL": "https://zulip.mycompany.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Zulip MCP

Zulip 开源团队消息平台 MCP，线程化消息和邮箱风格，AI Agent 线程化协作。
