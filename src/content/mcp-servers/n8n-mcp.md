---
title: "n8n MCP"
name: n8n-mcp
category: mcp-servers
tags: [n8n, workflow, automation, self-hosted, open-source]
price: free
website: https://n8n.io
logo: 
description: "n8n 开源工作流自动化 MCP，可自托管的工作流引擎，支持复杂逻辑和 AI 节点。"
descriptionEn: "n8n open-source workflow automation MCP — self-hostable workflow engine with complex logic and AI node support."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @n8n/mcp-server"
envVars: ["N8N_URL", "N8N_API_KEY"]
configExample: |
  {
    "mcpServers": { "n8n": { "command": "npx", "args": ["-y", "@n8n/mcp-server"], "env": { "N8N_URL": "http://localhost:5678", "N8N_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# n8n MCP

n8n 开源工作流自动化 MCP，可自托管的工作流引擎，支持复杂逻辑和 AI 节点。
