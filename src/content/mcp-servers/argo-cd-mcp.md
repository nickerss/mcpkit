---
title: "Argo CD MCP"
name: argo-cd-mcp
category: mcp-servers
tags: [argo, gitops, cd, kubernetes, delivery]
price: free
website: https://argoproj.github.io
logo: 
description: "Argo CD GitOps 持续交付平台 MCP，K8s GitOps 部署，AI Agent Argo CD GitOps。"
descriptionEn: "Argo CD GitOps continuous delivery platform MCP for K8s GitOps deployment for AI Agent Argo CD GitOps."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "pending"
installCommand: "npx @argo/argocd-mcp"
envVars: ["ARGOCD_SERVER"]
configExample: |
  {
    "mcpServers": { "argo-cd": { "command": "npx", "args": ["-y", "@argo/argocd-mcp"], "env": { "ARGOCD_SERVER": "argocd.example.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Argo CD MCP

Argo CD GitOps 持续交付平台 MCP，K8s GitOps 部署，AI Agent Argo CD GitOps。
