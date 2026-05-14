---
title: "Azure MCP"
name: azure-mcp
category: mcp-servers
tags: [azure, microsoft, cloud, infrastructure, compute]
price: pay-as-you-go
website: https://azure.microsoft.com
logo: 
description: "Microsoft Azure 云平台 MCP，访问 Azure 计算、存储、AI 服务，适合企业级多云管理。"
descriptionEn: "Microsoft Azure cloud platform MCP accessing Azure compute, storage and AI services for enterprise multi-cloud management."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @azure/mcp-server"
envVars: ["AZURE_SUBSCRIPTION_ID", "AZURE_TENANT_ID", "AZURE_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "azure": { "command": "npx", "args": ["-y", "@azure/mcp-server"], "env": { "AZURE_SUBSCRIPTION_ID": "xxx", "AZURE_TENANT_ID": "xxx", "AZURE_CLIENT_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Azure MCP

Microsoft Azure 云平台 MCP，访问 Azure 计算、存储、AI 服务，适合企业级多云管理。
