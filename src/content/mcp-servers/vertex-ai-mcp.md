---
title: "Google Vertex AI MCP"
name: vertex-ai-mcp
category: mcp-servers
tags: [google, vertex, gemini, palm, enterprise-ai]
price: paid
website: https://cloud.google.com/vertex-ai
logo: 
description: "Google Vertex AI 企业 AI 平台 MCP，访问 Gemini、PaLM 等模型，适合已有 GCP 的企业用户。"
descriptionEn: "Google Vertex AI enterprise AI platform MCP accessing Gemini, PaLM and other models — ideal for GCP enterprise users."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @google/vertex-ai-mcp"
envVars: ["GOOGLE_APPLICATION_CREDENTIALS", "GCP_PROJECT_ID"]
configExample: |
  {
    "mcpServers": { "vertex-ai": { "command": "npx", "args": ["-y", "@google/vertex-ai-mcp"], "env": { "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/sa.json", "GCP_PROJECT_ID": "my-project" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Vertex AI MCP

Google Vertex AI 企业 AI 平台 MCP，访问 Gemini、PaLM 等模型，适合已有 GCP 的企业用户。
