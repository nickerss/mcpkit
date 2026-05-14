---
title: "Azure Monitor Logs MCP"
name: azure-monitor-logs-mcp
category: mcp-servers
tags: [azure, monitor, logs, app-insights, observability]
price: pay-as-you-go
website: https://azure.microsoft.com/en-us/services/monitor
logo: 
description: "Azure Monitor Logs 日志平台 MCP，应用洞察和日志，AI Agent Azure 日志。"
descriptionEn: "Azure Monitor Logs log platform MCP for application insights and logging for AI Agent Azure logging."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @azure/monitor-logs-mcp"
envVars: ["AZURE_SUBSCRIPTION_ID"]
configExample: |
  {
    "mcpServers": { "azure-monitor-logs": { "command": "npx", "args": ["-y", "@azure/monitor-logs-mcp"], "env": { "AZURE_SUBSCRIPTION_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Azure Monitor Logs MCP

Azure Monitor Logs 日志平台 MCP，应用洞察和日志，AI Agent Azure 日志。
