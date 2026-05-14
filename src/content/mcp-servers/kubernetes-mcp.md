---
title: "Kubernetes MCP"
name: kubernetes-mcp
category: mcp-servers
tags: [kubernetes, k8s, container, orchestration, devops]
price: free
website: https://kubernetes.io
logo: 
description: "Kubernetes 容器编排平台 MCP，管理 Pod、Deployment 和 Service，AI Agent 可自动化 K8s 运维。"
descriptionEn: "Kubernetes container orchestration platform MCP managing Pods, Deployments and Services for AI Agent automated K8s operations."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.5
certificationStatus: "reviewed"
installCommand: "npx @kubernetes/mcp-server"
envVars: ["KUBECONFIG"]
configExample: |
  {
    "mcpServers": { "kubernetes": { "command": "npx", "args": ["-y", "@kubernetes/mcp-server"], "env": { "KUBECONFIG": "~/.kube/config" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Kubernetes MCP

Kubernetes 容器编排平台 MCP，管理 Pod、Deployment 和 Service，AI Agent 可自动化 K8s 运维。
