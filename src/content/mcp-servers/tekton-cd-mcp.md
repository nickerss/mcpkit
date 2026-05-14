---
title: "Tekton CD MCP"
name: tekton-cd-mcp
category: mcp-servers
tags: [tekton, ci-cd, kubernetes, cd-foundation, pipelines]
price: free
website: https://tekton.dev
logo: 
description: "Tekton CI/CD 平台 MCP，K8s 原生 CI/CD 管道，AI Agent Tekton CI/CD。"
descriptionEn: "Tekton CI/CD platform MCP for K8s native CI/CD pipelines for AI Agent Tekton CI/CD."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @tekton/mcp-server"
envVars: ["TEKTON_DASHBOARD_URL"]
configExample: |
  {
    "mcpServers": { "tekton": { "command": "npx", "args": ["-y", "@tekton/mcp-server"], "env": { "TEKTON_DASHBOARD_URL": "http://localhost:9097" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Tekton CD MCP

Tekton CI/CD 平台 MCP，K8s 原生 CI/CD 管道，AI Agent Tekton CI/CD。
