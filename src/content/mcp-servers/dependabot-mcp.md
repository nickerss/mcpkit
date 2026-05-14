---
title: "Dependabot MCP"
name: dependabot-mcp
category: mcp-servers
tags: [dependabot, github, dependencies, security, updates]
price: free
website: https://github.com/dependabot
logo: 
description: "Dependabot 依赖更新平台 MCP，自动依赖更新和安全警报，AI Agent 依赖管理。"
descriptionEn: "Dependabot dependency update platform MCP for automatic dependency updates and security alerts for AI Agent dependency management."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @dependabot/mcp-server"
envVars: ["GITHUB_TOKEN"]
configExample: |
  {
    "mcpServers": { "dependabot": { "command": "npx", "args": ["-y", "@dependabot/mcp-server"], "env": { "GITHUB_TOKEN": "ghp_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Dependabot MCP

Dependabot 依赖更新平台 MCP，自动依赖更新和安全警报，AI Agent 依赖管理。
