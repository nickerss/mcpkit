---
title: "Flux CD MCP"
name: flux-cd-mcp
category: mcp-servers
tags: [flux, gitops, cd, kubernetes, weaveworks]
price: free
website: https://fluxcd.io
logo: 
description: "Flux CD GitOps 平台 MCP，K8s GitOps 持续部署，AI Agent Flux GitOps。"
descriptionEn: "Flux CD GitOps platform MCP for K8s GitOps continuous deployment for AI Agent Flux GitOps."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @fluxcd/mcp-server"
envVars: ["FLUX_GIT_URL"]
configExample: |
  {
    "mcpServers": { "flux-cd": { "command": "npx", "args": ["-y", "@fluxcd/mcp-server"], "env": { "FLUX_GIT_URL": "https://github.com/org/repo" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Flux CD MCP

Flux CD GitOps 平台 MCP，K8s GitOps 持续部署，AI Agent Flux GitOps。
