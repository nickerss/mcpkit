---
title: "Tekton MCP"
name: tekton-mcp
category: mcp-servers
tags: [tekton, kubernetes, ci-cd, pipelines, cloud-native]
price: free
website: https://tekton.dev
logo: 
description: "Tekton Kubernetes 原生 CI/CD 平台 MCP，Kubernetes 原生流水线构建，AI Agent K8s CI/CD。"
descriptionEn: "Tekton Kubernetes-native CI/CD platform MCP for Kubernetes-native pipeline building for AI Agent K8s CI/CD."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @tektoncd/mcp-server"
envVars: ["TEKTON_HOST"]
configExample: |
  {
    "mcpServers": { "tekton": { "command": "npx", "args": ["-y", "@tektoncd/mcp-server"], "env": { "TEKTON_HOST": "https://tekton.mycompany.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Tekton MCP

Tekton Kubernetes 原生 CI/CD 平台 MCP，Kubernetes 原生流水线构建，AI Agent K8s CI/CD。
