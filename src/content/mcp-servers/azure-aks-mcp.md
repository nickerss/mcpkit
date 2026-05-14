---
title: "Azure AKS MCP"
name: azure-aks-mcp
category: mcp-servers
tags: [azure, aks, kubernetes, containers, orchestration]
price: pay-as-you-go
website: https://azure.microsoft.com/en-us/services/kubernetes-service
logo: 
description: "Azure AKS Kubernetes 平台 MCP，托管 Kubernetes 服务，AI Agent Azure Kubernetes。"
descriptionEn: "Azure AKS Kubernetes platform MCP for managed Kubernetes service for AI Agent Azure Kubernetes."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @azure/aks-mcp"
envVars: ["AZURE_SUBSCRIPTION_ID", "AZURE_TENANT_ID"]
configExample: |
  {
    "mcpServers": { "azure-aks": { "command": "npx", "args": ["-y", "@azure/aks-mcp"], "env": { "AZURE_SUBSCRIPTION_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Azure AKS MCP

Azure AKS Kubernetes 平台 MCP，托管 Kubernetes 服务，AI Agent Azure Kubernetes。
