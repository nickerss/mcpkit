---
title: "GitHub Webhooks MCP"
name: github-webhooks-mcp
category: mcp-servers
tags: [github, webhooks, events, git, automation]
price: free
website: https://github.com
logo: 
description: "GitHub Webhooks GitHub 事件平台 MCP，Push 和 PR 事件，AI Agent GitHub 事件。"
descriptionEn: "GitHub Webhooks GitHub events platform MCP for push and PR events for AI Agent GitHub events."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.7
certificationStatus: "certified"
installCommand: "npx @github/webhooks-mcp"
envVars: ["GITHUB_WEBHOOK_SECRET"]
configExample: |
  {
    "mcpServers": { "github-webhooks": { "command": "npx", "args": ["-y", "@github/webhooks-mcp"], "env": { "GITHUB_WEBHOOK_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitHub Webhooks MCP

GitHub Webhooks GitHub 事件平台 MCP，Push 和 PR 事件，AI Agent GitHub 事件。
