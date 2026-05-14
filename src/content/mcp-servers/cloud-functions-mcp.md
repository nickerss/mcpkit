---
title: "Cloud Functions MCP"
name: cloud-functions-mcp
category: mcp-servers
tags: [google, cloud-functions, serverless, functions-as-a-service, faas]
price: pay-as-you-go
website: https://cloud.google.com/functions
logo: 
description: "Google Cloud Functions 无服务器函数平台 MCP，Faas 风格函数，AI Agent Cloud Functions。"
descriptionEn: "Google Cloud Functions serverless functions platform MCP for Faas-style functions for AI Agent Cloud Functions."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @google/cloud-functions-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "cloud-functions": { "command": "npx", "args": ["-y", "@google/cloud-functions-mcp"], "env": { "GOOGLE_APPLICATION_CREDENTIALS": "/path/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloud Functions MCP

Google Cloud Functions 无服务器函数平台 MCP，Faas 风格函数，AI Agent Cloud Functions。
