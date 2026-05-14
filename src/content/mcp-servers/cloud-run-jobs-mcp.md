---
title: "Google Cloud Run Jobs MCP"
name: cloud-run-jobs-mcp
category: mcp-servers
tags: [google, cloud-run, jobs, batch, containers]
price: pay-as-you-go
website: https://cloud.google.com/run/docs
logo: 
description: "Google Cloud Run Jobs 批处理平台 MCP，容器化批处理作业，AI Agent Cloud Run 批处理。"
descriptionEn: "Google Cloud Run Jobs batch processing platform MCP for containerized batch jobs for AI Agent Cloud Run batch processing."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @google/cloud-run-jobs-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "cloud-run-jobs": { "command": "npx", "args": ["-y", "@google/cloud-run-jobs-mcp"], "env": { "GOOGLE_IRONMENT_CREDENTIALS": "/path/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Cloud Run Jobs MCP

Google Cloud Run Jobs 批处理平台 MCP，容器化批处理作业，AI Agent Cloud Run 批处理。
