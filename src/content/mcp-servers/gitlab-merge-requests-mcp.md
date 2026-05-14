---
title: "GitLab Merge Requests MCP"
name: gitlab-merge-requests-mcp
category: mcp-servers
tags: [gitlab, merge-requests, code-review, ci-cd, devops]
price: free
website: https://gitlab.com
logo: 
description: "GitLab Merge Requests 代码审查平台 MCP，MR 管理和代码审查，AI Agent GitLab 代码审查。"
descriptionEn: "GitLab Merge Requests code review platform MCP for MR management and code review for AI Agent GitLab code review."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @gitlab/merge-requests-mcp"
envVars: ["GITLAB_TOKEN"]
configExample: |
  {
    "mcpServers": { "gitlab-merge-requests": { "command": "npx", "args": ["-y", "@gitlab/merge-requests-mcp"], "env": { "GITLAB_TOKEN": "glpat-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitLab Merge Requests MCP

GitLab Merge Requests 代码审查平台 MCP，MR 管理和代码审查，AI Agent GitLab 代码审查。
