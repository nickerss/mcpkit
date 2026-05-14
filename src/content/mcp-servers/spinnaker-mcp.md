---
title: "Spinnaker MCP"
name: spinnaker-mcp
category: mcp-servers
tags: [spinnaker, cd, netflix, multi-cloud, deployment]
price: free
website: https://spinnaker.io
logo: 
description: "Netflix Spinnaker 多云部署平台 MCP，多云持续部署，AI Agent Spinnaker 部署。"
descriptionEn: "Netflix Spinnaker multi-cloud deployment platform MCP for multi-cloud continuous deployment for AI Agent Spinnaker deployment."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @spinnaker/mcp-server"
envVars: ["SPINNAKER_URL"]
configExample: |
  {
    "mcpServers": { "spinnaker": { "command": "npx", "args": ["-y", "@spinnaker/mcp-server"], "env": { "SPINNAKER_URL": "http://localhost:8084" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Spinnaker MCP

Netflix Spinnaker 多云部署平台 MCP，多云持续部署，AI Agent Spinnaker 部署。
