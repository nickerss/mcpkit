---
title: "Todoist MCP"
name: todoist-mcp
category: mcp-servers
tags: [todoist, tasks, todo, productivity, gtd]
price: freemium
website: https://todoist.com
logo: 
description: "Todoist 任务管理 MCP，支持任务创建、分类和到期日管理，AI Agent 可自动化个人 productivity 工作流。"
descriptionEn: "Todoist task management MCP supporting task creation, categorization and due dates for AI Agent personal productivity automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @todoist/mcp-server"
envVars: ["TODOIST_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "todoist": { "command": "npx", "args": ["-y", "@todoist/mcp-server"], "env": { "TODOIST_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Todoist MCP

Todoist 任务管理 MCP，支持任务创建、分类和到期日管理，AI Agent 可自动化个人 productivity 工作流。
