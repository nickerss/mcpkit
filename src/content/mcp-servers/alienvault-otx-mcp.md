---
title: "AlienVault OTX MCP"
name: alienvault-otx-mcp
category: mcp-servers
tags: [alienvault, otx, threat-intelligence, pulses, security]
price: free
website: https://otx.alienvault.com
logo: 
description: "AlienVault OTX 威胁情报平台 MCP，威胁情报和 Pulse，AI Agent 威胁情报。"
descriptionEn: "AlienVault OTX threat intelligence platform MCP for threat intelligence and Pulses for AI Agent threat intelligence."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @alienvault/otx-mcp"
envVars: ["OTX_API_KEY"]
configExample: |
  {
    "mcpServers": { "alienvault-otx": { "command": "npx", "args": ["-y", "@alienvault/otx-mcp"], "env": { "OTX_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AlienVault OTX MCP

AlienVault OTX 威胁情报平台 MCP，威胁情报和 Pulse，AI Agent 威胁情报。
