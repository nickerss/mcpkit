---
title: "GitHub MCP"
name: github-mcp
category: mcp-servers
tags: [github, git, api, collaboration, code-hosting]
price: free
website: https://github.com
logo: 
description: "GitHub 代码托管和协作平台 MCP，仓库管理、PR 和 Issue，AI Agent 开发核心工具。"
descriptionEn: "GitHub code hosting and collaboration platform MCP for repository management, PRs and Issues for AI Agent development core tool."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.8
certificationStatus: "certified"
installCommand: "npx @github/mcp-server"
envVars: ["GITHUB_TOKEN"]
configExample: |
  {
    "mcpServers": { "github": { "command": "npx", "args": ["-y", "@github/mcp-server"], "env": { "GITHUB_TOKEN": "ghp_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitHub MCP

GitHub 代码托管和协作平台 MCP，仓库管理、PR 和 Issue，AI Agent 开发核心工具。
