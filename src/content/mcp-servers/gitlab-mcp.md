---
title: "GitLab MCP"
name: gitlab-mcp
category: mcp-servers
tags: [gitlab, git, repository, ci-cd, devops]
price: free
website: https://gitlab.com
logo: 
description: "GitLab 代码托管和 DevOps 平台 MCP，完整 GitLab 工作流，AI Agent GitLab 集成。"
descriptionEn: "GitLab code hosting and DevOps platform MCP for complete GitLab workflow for AI Agent GitLab integration."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @gitlab/mcp-server"
envVars: ["GITLAB_TOKEN"]
configExample: |
  {
    "mcpServers": { "gitlab": { "command": "npx", "args": ["-y", "@gitlab/mcp-server"], "env": { "GITLAB_TOKEN": "glpat-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitLab MCP

GitLab 代码托管和 DevOps 平台 MCP，完整 GitLab 工作流，AI Agent GitLab 集成。
