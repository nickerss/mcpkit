---
title: "Pendo MCP"
name: pendo-mcp
category: mcp-servers
tags: [pendo, product, analytics, guides, in-app]
price: paid
website: https://pendo.io
logo: 
description: "Pendo 产品参与平台 MCP，应用内导览和产品分析，AI Agent 产品参与。"
descriptionEn: "Pendo product engagement platform MCP for in-app guides and product analytics for AI Agent product engagement."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @pendo/mcp-server"
envVars: ["PENDO_API_KEY"]
configExample: |
  {
    "mcpServers": { "pendo": { "command": "npx", "args": ["-y", "@pendo/mcp-server"], "env": { "PENDO_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Pendo MCP

Pendo 产品参与平台 MCP，应用内导览和产品分析，AI Agent 产品参与。
