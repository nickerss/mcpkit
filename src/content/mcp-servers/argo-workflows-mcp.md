---
title: "Argo Workflows MCP"
name: argo-workflows-mcp
category: mcp-servers
tags: [argo, kubernetes, workflows, ci, cd]
price: free
website: https://argoproj.github.io/workflows
logo: 
description: "Argo Workflows Kubernetes 原生工作流引擎 MCP，适合大规模机器学习训练和数据处理流水线。"
descriptionEn: "Argo Workflows Kubernetes-native workflow engine MCP ideal for large-scale ML training and data processing pipelines."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @argo/mcp-server"
envVars: ["ARGO_SERVER", "ARGO_TOKEN"]
configExample: |
  {
    "mcpServers": { "argo-workflows": { "command": "npx", "args": ["-y", "@argo/mcp-server"], "env": { "ARGO_SERVER": "https://argo.example.com", "ARGO_TOKEN": "Bearer xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Argo Workflows MCP

Argo Workflows Kubernetes 原生工作流引擎 MCP，适合大规模机器学习训练和数据处理流水线。
