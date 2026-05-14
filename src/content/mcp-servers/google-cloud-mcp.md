---
title: "Google Cloud MCP"
name: google-cloud-mcp
category: mcp-servers
tags: [gcp, google, cloud, compute, infrastructure]
price: pay-as-you-go
website: https://cloud.google.com
logo: 
description: "Google Cloud Platform MCP，访问 GCP 计算、存储、数据库等全套服务，支持 Vertex AI 和 BigQuery。"
descriptionEn: "Google Cloud Platform MCP accessing full GCP suite — compute, storage, databases, with Vertex AI and BigQuery support."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.7
certificationStatus: "reviewed"
installCommand: "npx @google/cloud-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS", "GCP_PROJECT_ID"]
configExample: |
  {
    "mcpServers": { "gcp": { "command": "npx", "args": ["-y", "@google/cloud-mcp"], "env": { "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/sa.json", "GCP_PROJECT_ID": "my-project" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Cloud MCP

Google Cloud Platform MCP，访问 GCP 计算、存储、数据库等全套服务，支持 Vertex AI 和 BigQuery。
