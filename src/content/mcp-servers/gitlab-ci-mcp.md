---
title: "GitLab CI MCP"
name: gitlab-ci-mcp
category: mcp-servers
tags: [gitlab, ci, cd, pipeline, automation]
price: free
website: https://docs.gitlab.com/ee/ci
logo: 
description: "GitLab CI/CD MCP，自动化 GitLab 流水线、MR 管理和 CI 任务，适合使用 GitLab 的团队。"
descriptionEn: "GitLab CI/CD MCP automating GitLab pipelines, MR management and CI tasks for teams using GitLab."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "reviewed"
installCommand: "npx @gitlab/mcp-server-ci"
envVars: ["GITLAB_TOKEN"]
configExample: |
  {
    "mcpServers": { "gitlab-ci": { "command": "npx", "args": ["-y", "@gitlab/mcp-server-ci"], "env": { "GITLAB_TOKEN": "glpat-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitLab CI MCP

GitLab CI/CD MCP，自动化 GitLab 流水线、MR 管理和 CI 任务，适合使用 GitLab 的团队。
