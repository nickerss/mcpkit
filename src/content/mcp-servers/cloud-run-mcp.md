---
title: "Cloud Run MCP"
name: cloud-run-mcp
category: mcp-servers
tags: [google, cloud-run, serverless, containers, deployment]
price: pay-as-you-go
website: https://cloud.google.com/run
logo: 
description: "Google Cloud Run 服务部署平台 MCP，容器化服务部署，AI Agent Cloud Run 部署。"
descriptionEn: "Google Cloud Run service deployment platform MCP for containerized service deployment for AI Agent Cloud Run deployment."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @google/cloud-run-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "cloud-run": { "command": "npx", "args": ["-y", "@google/cloud-run-mcp"], "env": { "GOOGLE_APPLICATION_CREDENTIALS": "/path/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloud Run MCP

Google Cloud Run 服务部署平台 MCP，容器化服务部署，AI Agent Cloud Run 部署。
