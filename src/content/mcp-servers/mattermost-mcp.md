---
title: "Mattermost MCP"
name: mattermost-mcp
category: mcp-servers
tags: [mattermost, messaging, self-hosted, team, chat]
price: free
website: https://mattermost.com
logo: 
description: "Mattermost 开源团队消息平台 MCP，自托管团队沟通，支持 Slack 兼容 API。"
descriptionEn: "Mattermost open-source team messaging platform MCP with self-hosting option and Slack-compatible API."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @mattermost/mcp-server"
envVars: ["MATTERMOST_URL", "MATTERMOST_TOKEN"]
configExample: |
  {
    "mcpServers": { "mattermost": { "command": "npx", "args": ["-y", "@mattermost/mcp-server"], "env": { "MATTERMOST_URL": "https://mattermost.mycompany.com", "MATTERMOST_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Mattermost MCP

Mattermost 开源团队消息平台 MCP，自托管团队沟通，支持 Slack 兼容 API。
