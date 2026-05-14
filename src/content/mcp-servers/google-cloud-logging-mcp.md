---
title: "Google Cloud Logging MCP"
name: google-cloud-logging-mcp
category: mcp-servers
tags: [google, cloud-logging, gcp, logging, observability]
price: pay-as-you-go
website: https://cloud.google.com/logging
logo: 
description: "Google Cloud Logging 日志平台 MCP，GCP 日志服务，AI Agent GCP 日志。"
descriptionEn: "Google Cloud Logging log platform MCP for GCP logging service for AI Agent GCP logging."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @google/cloud-logging-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "gcp-logging": { "command": "npx", "args": ["-y", "@google/cloud-logging-mcp"], "env": { "GOOGLE_APPLICATION_CREDENTIALS": "/path/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Cloud Logging MCP

Google Cloud Logging 日志平台 MCP，GCP 日志服务，AI Agent GCP 日志。
