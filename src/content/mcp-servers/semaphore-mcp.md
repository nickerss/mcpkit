---
title: "Semaphore MCP"
name: semaphore-mcp
category: mcp-servers
tags: [semaphore, ci-cd, docker, kubernetes, ruby]
price: free
website: https://semaphoreci.com
logo: 
description: "Semaphore CI/CD 平台 MCP，Docker 和 Kubernetes 支持，AI Agent 现代 CI/CD。"
descriptionEn: "Semaphore CI/CD platform MCP with Docker and Kubernetes support for AI Agent modern CI/CD."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @semaphore/mcp-server"
envVars: ["SEMAPHORE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "semaphore": { "command": "npx", "args": ["-y", "@semaphore/mcp-server"], "env": { "SEMAPHORE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Semaphore MCP

Semaphore CI/CD 平台 MCP，Docker 和 Kubernetes 支持，AI Agent 现代 CI/CD。
