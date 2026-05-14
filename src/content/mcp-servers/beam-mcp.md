---
title: "Beam MCP"
name: beam-mcp
category: mcp-servers
tags: [beam, inference, serverless, compute, easy]
price: pay-as-you-go
website: https://beam.cloud
logo: 
description: "Beam 简单无服务器推理平台 MCP，易用的无服务器计算，AI Agent 易用无服务器。"
descriptionEn: "Beam simple serverless inference platform MCP for easy serverless compute for AI Agent easy serverless."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @beam/mcp-server"
envVars: ["BEAM_CLIENT_ID", "BEAM_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "beam": { "command": "npx", "args": ["-y", "@beam/mcp-server"], "env": { "BEAM_CLIENT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Beam MCP

Beam 简单无服务器推理平台 MCP，易用的无服务器计算，AI Agent 易用无服务器。
