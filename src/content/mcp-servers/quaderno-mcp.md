---
title: "Quaderno MCP"
name: quaderno-mcp
category: mcp-servers
tags: [quaderno, invoicing, tax, automation, receipts]
price: freemium
website: https://quaderno.io
logo: 
description: "Quaderno 发票和税务自动化平台 MCP，自动发票和税务计算，AI Agent 发票自动化。"
descriptionEn: "Quaderno invoicing and tax automation platform MCP for automatic invoicing and tax calculation for AI Agent invoicing automation."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @quaderno/mcp-server"
envVars: ["QUADERNO_API_KEY"]
configExample: |
  {
    "mcpServers": { "quaderno": { "command": "npx", "args": ["-y", "@quaderno/mcp-server"], "env": { "QUADERNO_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Quaderno MCP

Quaderno 发票和税务自动化平台 MCP，自动发票和税务计算，AI Agent 发票自动化。
