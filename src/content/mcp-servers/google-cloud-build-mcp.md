---
title: "Google Cloud Build MCP"
name: google-cloud-build-mcp
category: mcp-servers
tags: [google, cloud-build, ci-cd, containers, builds]
price: pay-as-you-go
website: https://cloud.google.com/build
logo: 
description: "Google Cloud Build CI/CD 平台 MCP，容器构建和 CI/CD，AI Agent GCP CI/CD。"
descriptionEn: "Google Cloud Build CI/CD platform MCP for container builds and CI/CD for AI Agent GCP CI/CD."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @google/cloud-build-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "cloud-build": { "command": "npx", "args": ["-y", "@google/cloud-build-mcp"], "env": { "GOOGLE_APPLICATION_CREDENTIALS": "/path/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Cloud Build MCP

Google Cloud Build CI/CD 平台 MCP，容器构建和 CI/CD，AI Agent GCP CI/CD。
