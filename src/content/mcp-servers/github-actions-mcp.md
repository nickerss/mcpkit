---
title: "GitHub Actions MCP"
name: github-actions-mcp
category: mcp-servers
tags: [github, actions, ci, cd, automation]
price: free
website: https://docs.github.com/en/actions
logo: 
description: "GitHub Actions CI/CD 平台 MCP，自动化构建、测试和部署流程，支持工作流编排和 GitHub API 交互。"
descriptionEn: "GitHub Actions CI/CD platform MCP automating build, test and deploy workflows with workflow orchestration and GitHub API interaction."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "certified"
installCommand: "npx @github/actions-mcp"
envVars: ["GITHUB_TOKEN"]
configExample: |
  {
    "mcpServers": { "github-actions": { "command": "npx", "args": ["-y", "@github/actions-mcp"], "env": { "GITHUB_TOKEN": "ghp_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitHub Actions MCP

GitHub Actions CI/CD 平台 MCP，自动化构建、测试和部署流程，支持工作流编排和 GitHub API 交互。
