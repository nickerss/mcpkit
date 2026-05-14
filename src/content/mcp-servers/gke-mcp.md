---
title: "Google Kubernetes Engine MCP"
name: gke-mcp
category: mcp-servers
tags: [google, gke, kubernetes, containers, orchestration]
price: pay-as-you-go
website: https://cloud.google.com/kubernetes-engine
logo: 
description: "Google GKE Kubernetes 平台 MCP，托管 Kubernetes 集群，AI Agent GCP Kubernetes。"
descriptionEn: "Google GKE Kubernetes platform MCP for managed Kubernetes clusters for AI Agent GCP Kubernetes."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @google/gke-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "gke": { "command": "npx", "args": ["-y", "@google/gke-mcp"], "env": { "GOOGLE_APPLICATION_CREDENTIALS": "/path/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Kubernetes Engine MCP

Google GKE Kubernetes 平台 MCP，托管 Kubernetes 集群，AI Agent GCP Kubernetes。
