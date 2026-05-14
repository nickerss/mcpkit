---
title: "Recorded Future MCP"
name: recordedfuture-mcp
category: mcp-servers
tags: [recorded-future, threat-intelligence, security, risk, intelligence]
price: paid
website: https://recordedfuture.com
logo: 
description: "Recorded Future 威胁情报平台 MCP，实时威胁情报和风险评分，AI Agent 前瞻威胁情报。"
descriptionEn: "Recorded Future threat intelligence platform MCP for real-time threat intelligence and risk scoring for AI Agent forward-looking threat intelligence."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @recordedfuture/mcp-server"
envVars: ["RECORDEDFUTURE_API_KEY"]
configExample: |
  {
    "mcpServers": { "recordedfuture": { "command": "npx", "args": ["-y", "@recordedfuture/mcp-server"], "env": { "RECORDEDFUTURE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Recorded Future MCP

Recorded Future 威胁情报平台 MCP，实时威胁情报和风险评分，AI Agent 前瞻威胁情报。
