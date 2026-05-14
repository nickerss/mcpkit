---
title: "Trello MCP"
name: trello-mcp
category: mcp-servers
tags: [trello, kanban, project-management, cards, boards]
price: free
website: https://trello.com
logo: 
description: "Trello Kanban 看板 MCP，支持看板、列表和卡片管理，简单直观的任务管理自动化。"
descriptionEn: "Trello Kanban board MCP supporting boards, lists and cards for simple and intuitive task management automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "reviewed"
installCommand: "npx @trello/mcp-server"
envVars: ["TRELLO_API_KEY", "TRELLO_TOKEN"]
configExample: |
  {
    "mcpServers": { "trello": { "command": "npx", "args": ["-y", "@trello/mcp-server"], "env": { "TRELLO_API_KEY": "xxx", "TRELLO_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Trello MCP

Trello Kanban 看板 MCP，支持看板、列表和卡片管理，简单直观的任务管理自动化。
