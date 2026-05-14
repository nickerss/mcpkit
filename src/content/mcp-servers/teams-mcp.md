---
title: "Microsoft Teams MCP"
name: teams-mcp
category: mcp-servers
tags: [microsoft, teams, messaging, chat, enterprise]
price: freemium
website: https://learn.microsoft.com/en-us/microsoftteams/platform
logo: 
description: "Microsoft Teams MCP，发送频道消息、管理会议和处理 Teams 命令，企业级 AI 自动化工作流。"
descriptionEn: "Microsoft Teams MCP for sending channel messages, managing meetings and processing commands for enterprise AI workflows."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @microsoft/teams-mcp-server"
envVars: ["TEAMS_TENANT_ID", "TEAMS_CLIENT_ID", "TEAMS_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "teams": { "command": "npx", "args": ["-y", "@microsoft/teams-mcp-server"], "env": { "TEAMS_TENANT_ID": "xxx", "TEAMS_CLIENT_ID": "xxx", "TEAMS_CLIENT_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Microsoft Teams MCP

Microsoft Teams MCP，发送频道消息、管理会议和处理 Teams 命令，企业级 AI 自动化工作流。
