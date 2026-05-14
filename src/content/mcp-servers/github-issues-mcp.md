---
title: "GitHub Issues MCP"
name: github-issues-mcp
category: mcp-servers
tags: [github, issues, project-management, tickets, tracker]
price: free
website: https://docs.github.com/en/issues
logo: 
description: "GitHub Issues 项目管理 MCP，创建和管理 Issue、标签和里程碑，AI Agent 任务跟踪自动化。"
descriptionEn: "GitHub Issues project management MCP creating and managing Issues, labels and milestones for AI Agent task tracking automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @github/issues-mcp"
envVars: ["GITHUB_TOKEN"]
configExample: |
  {
    "mcpServers": { "github-issues": { "command": "npx", "args": ["-y", "@github/issues-mcp"], "env": { "GITHUB_TOKEN": "ghp_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitHub Issues MCP

GitHub Issues 项目管理 MCP，创建和管理 Issue、标签和里程碑，AI Agent 任务跟踪自动化。
