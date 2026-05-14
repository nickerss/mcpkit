---
title: "Google Cloud Deploy MCP"
name: google-cloud-deploy-mcp
category: mcp-servers
tags: [google, cloud, deploy, gke, ci-cd]
price: pay-as-you-go
website: https://cloud.google.com/deploy
logo: 
description: "Google Cloud Deploy 部署平台 MCP，GKE 和 Cloud Run 部署，AI Agent GCP 部署。"
descriptionEn: "Google Cloud Deploy deployment platform MCP for GKE and Cloud Run deployment for AI Agent GCP deployment."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @google/cloud-deploy-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "google-cloud-deploy": { "command": "npx", "args": ["-y", "@google/cloud-deploy-mcp"], "env": { "GOOGLE_APPLICATION_CREDENTIALS": "/path/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Cloud Deploy MCP

Google Cloud Deploy 部署平台 MCP，GKE 和 Cloud Run 部署，AI Agent GCP 部署。
