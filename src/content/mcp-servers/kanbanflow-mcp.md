---
title: "Kanbanflow MCP"
name: kanbanflow-mcp
category: mcp-servers
tags: [kanbanflow, kanban, task, project, pomodoro]
price: freemium
website: https://kanbanflow.com
logo: 
description: "Kanbanflow 看板任务平台 MCP，看板和番茄钟任务管理，AI Agent 看板时间管理。"
descriptionEn: "Kanbanflow Kanban task platform MCP with Kanban and Pomodoro task management for AI Agent Kanban time management."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @kanbanflow/mcp-server"
envVars: ["KANBANFLOW_API_KEY"]
configExample: |
  {
    "mcpServers": { "kanbanflow": { "command": "npx", "args": ["-y", "@kanbanflow/mcp-server"], "env": { "KANBANFLOW_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Kanbanflow MCP

Kanbanflow 看板任务平台 MCP，看板和番茄钟任务管理，AI Agent 看板时间管理。
