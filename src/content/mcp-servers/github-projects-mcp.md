---
title: "GitHub Projects MCP"
name: github-projects-mcp
category: mcp-servers
tags: [github, projects, kanban, task-management, organization]
price: free
website: https://docs.github.com/en/projects
logo: 
description: "GitHub Projects 项目看板 MCP，管理 Project 看板、卡片和列，AI Agent 敏捷开发管理自动化。"
descriptionEn: "GitHub Projects kanban board MCP managing Projects boards, cards and columns for AI Agent agile development management."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "reviewed"
installCommand: "npx @github/projects-mcp"
envVars: ["GITHUB_TOKEN"]
configExample: |
  {
    "mcpServers": { "github-projects": { "command": "npx", "args": ["-y", "@github/projects-mcp"], "env": { "GITHUB_TOKEN": "ghp_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitHub Projects MCP

GitHub Projects 项目看板 MCP，管理 Project 看板、卡片和列，AI Agent 敏捷开发管理自动化。
