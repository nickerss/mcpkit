---
title: "Any.do MCP"
name: any-do-mcp
category: mcp-servers
tags: [any.do, tasks, todo, productivity, simple]
price: freemium
website: https://any.do
logo: 
description: "Any.do 简洁任务管理平台 MCP，简洁任务和日常管理，AI Agent 简洁任务。"
descriptionEn: "Any.do concise task management platform MCP for concise tasks and daily management for AI Agent concise tasks."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @anydo/mcp-server"
envVars: ["ANYDO_API_KEY"]
configExample: |
  {
    "mcpServers": { "any-do": { "command": "npx", "args": ["-y", "@anydo/mcp-server"], "env": { "ANYDO_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Any.do MCP

Any.do 简洁任务管理平台 MCP，简洁任务和日常管理，AI Agent 简洁任务。
