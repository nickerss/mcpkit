---
title: "Azure Functions MCP"
name: azure-functions-mcp
category: mcp-servers
tags: [azure, functions, serverless, faas, microsoft]
price: pay-as-you-go
website: https://azure.microsoft.com/en-us/services/functions
logo: 
description: "Azure Functions 无服务器函数平台 MCP，Faas 风格函数，AI Agent Azure Functions。"
descriptionEn: "Azure Functions serverless functions platform MCP for Faas-style functions for AI Agent Azure Functions."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @azure/functions-mcp"
envVars: ["AZURE_SUBSCRIPTION_ID", "AZURE_TENANT_ID"]
configExample: |
  {
    "mcpServers": { "azure-functions": { "command": "npx", "args": ["-y", "@azure/functions-mcp"], "env": { "AZURE_SUBSCRIPTION_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Azure Functions MCP

Azure Functions 无服务器函数平台 MCP，Faas 风格函数，AI Agent Azure Functions。
