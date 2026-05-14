---
title: "Azure DevOps MCP"
name: azure-devops-mcp
category: mcp-servers
tags: [azure, devops, pipelines, repos, boards]
price: free
website: https://azure.microsoft.com/en-us/services/devops
logo: 
description: "Azure DevOps 开发平台 MCP，Pipelines、Repos 和 Boards，AI Agent Azure DevOps。"
descriptionEn: "Azure DevOps development platform MCP for Pipelines, Repos and Boards for AI Agent Azure DevOps."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @azure/devops-mcp"
envVars: ["AZURE_DEVOPS_PAT"]
configExample: |
  {
    "mcpServers": { "azure-devops": { "command": "npx", "args": ["-y", "@azure/devops-mcp"], "env": { "AZURE_DEVOPS_PAT": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Azure DevOps MCP

Azure DevOps 开发平台 MCP，Pipelines、Repos 和 Boards，AI Agent Azure DevOps。
