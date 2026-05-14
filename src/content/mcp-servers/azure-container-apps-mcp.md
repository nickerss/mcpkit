---
title: "Azure Container Apps MCP"
name: azure-container-apps-mcp
category: mcp-servers
tags: [azure, container-apps, serverless, containers, microservices]
price: pay-as-you-go
website: https://azure.microsoft.com/en-us/services/container-apps
logo: 
description: "Azure Container Apps 无服务器容器平台 MCP，容器化微服务，AI Agent Azure 容器。"
descriptionEn: "Azure Container Apps serverless container platform MCP for containerized microservices for AI Agent Azure containers."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @azure/container-apps-mcp"
envVars: ["AZURE_SUBSCRIPTION_ID", "AZURE_TENANT_ID"]
configExample: |
  {
    "mcpServers": { "azure-container-apps": { "command": "npx", "args": ["-y", "@azure/container-apps-mcp"], "env": { "AZURE_SUBSCRIPTION_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Azure Container Apps MCP

Azure Container Apps 无服务器容器平台 MCP，容器化微服务，AI Agent Azure 容器。
