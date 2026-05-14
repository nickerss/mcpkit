---
title: "Asana MCP"
name: asana-mcp
category: mcp-servers
tags: [asana, project-management, tasks, teams, workflow]
price: freemium
website: https://asana.com
logo: 
description: "Asana 项目管理 MCP，支持任务管理、项目追踪和团队协作，AI Agent 可自动化项目工作流。"
descriptionEn: "Asana project management MCP supporting task management, project tracking and team collaboration for AI workflow automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "recommended"
installCommand: "npx @asana/mcp-server"
envVars: ["ASANA_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "asana": { "command": "npx", "args": ["-y", "@asana/mcp-server"], "env": { "ASANA_ACCESS_TOKEN": "1/xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Asana MCP

Asana 项目管理 MCP，支持任务管理、项目追踪和团队协作，AI Agent 可自动化项目工作流。
