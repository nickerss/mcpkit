---
title: "Woodpecker CI MCP"
name: woodpecker-ci-mcp
category: mcp-servers
tags: [woodpecker, ci-cd, open-source, self-hosted, drone]
price: free
website: https://woodpecker-ci.org
logo: 
description: "Woodpecker CI 开源 CI/CD 平台 MCP，Drone CI 社区分支，自托管 AI Agent CI/CD。"
descriptionEn: "Woodpecker CI open-source CI/CD platform MCP as Drone CI community fork for self-hosted AI Agent CI/CD."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @woodpecker/mcp-server"
envVars: ["WOODPECKER_SERVER"]
configExample: |
  {
    "mcpServers": { "woodpecker-ci": { "command": "npx", "args": ["-y", "@woodpecker/mcp-server"], "env": { "WOODPECKER_SERVER": "http://localhost:8080" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Woodpecker CI MCP

Woodpecker CI 开源 CI/CD 平台 MCP，Drone CI 社区分支，自托管 AI Agent CI/CD。
