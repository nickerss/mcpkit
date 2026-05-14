---
title: "GitHub PR MCP"
name: github-pr-mcp
category: mcp-servers
tags: [github, pr, pull-request, review, code-review]
price: free
website: https://docs.github.com/en/pull-requests
logo: 
description: "GitHub Pull Request MCP，专门处理 PR 创建、审查和合并，AI Agent 代码审查自动化。"
descriptionEn: "GitHub Pull Request MCP specialized in PR creation, review and merging for AI Agent code review automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "recommended"
installCommand: "npx @github/pr-mcp"
envVars: ["GITHUB_TOKEN"]
configExample: |
  {
    "mcpServers": { "github-pr": { "command": "npx", "args": ["-y", "@github/pr-mcp"], "env": { "GITHUB_TOKEN": "ghp_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitHub PR MCP

GitHub Pull Request MCP，专门处理 PR 创建、审查和合并，AI Agent 代码审查自动化。
