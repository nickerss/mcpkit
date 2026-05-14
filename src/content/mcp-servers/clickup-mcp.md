---
title: "ClickUp MCP"
name: clickup-mcp
category: mcp-servers
tags: [clickup, project-management, tasks, docs, goals]
price: freemium
website: https://clickup.com
logo: 
description: "ClickUp 全能工作平台 MCP，支持任务、文档、目标管理，AI Agent 可自动化复杂团队工作流。"
descriptionEn: "ClickUp all-in-one work platform MCP supporting tasks, docs and goals for AI Agent automation of complex team workflows."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @clickup/mcp-server"
envVars: ["CLICKUP_API_KEY"]
configExample: |
  {
    "mcpServers": { "clickup": { "command": "npx", "args": ["-y", "@clickup/mcp-server"], "env": { "CLICKUP_API_KEY": "pk_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# ClickUp MCP

ClickUp 全能工作平台 MCP，支持任务、文档、目标管理，AI Agent 可自动化复杂团队工作流。
