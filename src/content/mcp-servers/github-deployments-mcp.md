---
title: "GitHub Deployments MCP"
name: github-deployments-mcp
category: mcp-servers
tags: [github, deployments, ci-cd, actions, rollback]
price: free
website: https://github.com
logo: 
description: "GitHub Deployments 部署平台 MCP，部署状态管理，AI Agent GitHub 部署。"
descriptionEn: "GitHub Deployments deployment platform MCP for deployment status management for AI Agent GitHub deployments."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.5
certificationStatus: "pending"
installCommand: "npx @github/deployments-mcp"
envVars: ["GITHUB_TOKEN"]
configExample: |
  {
    "mcpServers": { "github-deployments": { "command": "npx", "args": ["-y", "@github/deployments-mcp"], "env": { "GITHUB_TOKEN": "ghp_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitHub Deployments MCP

GitHub Deployments 部署平台 MCP，部署状态管理，AI Agent GitHub 部署。
