---
title: "Renovate MCP"
name: renovate-mcp
category: mcp-servers
tags: [renovate, dependencies, automation, updates, open-source]
price: free
website: https://renovatebot.com
logo: 
description: "Renovate 开源依赖更新平台 MCP，可配置的自动更新，AI Agent 依赖维护。"
descriptionEn: "Renovate open-source dependency update platform MCP with configurable auto-updates for AI Agent dependency maintenance."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @renovate/mcp-server"
envVars: ["RENOVATE_TOKEN"]
configExample: |
  {
    "mcpServers": { "renovate": { "command": "npx", "args": ["-y", "@renovate/mcp-server"], "env": { "RENOVATE_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Renovate MCP

Renovate 开源依赖更新平台 MCP，可配置的自动更新，AI Agent 依赖维护。
