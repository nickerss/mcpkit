---
title: "GitLab Issues MCP"
name: gitlab-issues-mcp
category: mcp-servers
tags: [gitlab, issues, project-management, bugs, tracking]
price: free
website: https://gitlab.com
logo: 
description: "GitLab Issues MCP，Issue 追踪和项目管理，AI Agent GitLab Issue 自动化管理。"
descriptionEn: "GitLab Issues MCP for issue tracking and project management for AI Agent GitLab issue automation management."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @gitlab/issues-mcp"
envVars: ["GITLAB_TOKEN"]
configExample: |
  {
    "mcpServers": { "gitlab-issues": { "command": "npx", "args": ["-y", "@gitlab/issues-mcp"], "env": { "GITLAB_TOKEN": "glpat-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitLab Issues MCP

GitLab Issues MCP，Issue 追踪和项目管理，AI Agent GitLab Issue 自动化管理。
