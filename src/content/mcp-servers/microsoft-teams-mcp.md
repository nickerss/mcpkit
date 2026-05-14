---
title: "Microsoft Teams MCP"
name: microsoft-teams-mcp
category: mcp-servers
tags: [microsoft, teams, messaging, chat, collaboration]
price: freemium
website: https://teams.microsoft.com
logo: 
description: "Microsoft Teams MCP，发送消息和管理团队频道，AI Agent 企业协作自动化。"
descriptionEn: "Microsoft Teams MCP for sending messages and managing team channels for AI Agent enterprise collaboration automation."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @microsoft/teams-mcp"
envVars: ["TEAMS_TENANT_ID", "TEAMS_CLIENT_ID", "TEAMS_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "teams": { "command": "npx", "args": ["-y", "@microsoft/teams-mcp"], "env": { "TEAMS_TENANT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Microsoft Teams MCP

Microsoft Teams MCP，发送消息和管理团队频道，AI Agent 企业协作自动化。
