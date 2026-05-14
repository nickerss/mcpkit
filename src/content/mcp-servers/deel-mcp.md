---
title: "Deel MCP"
name: deel-mcp
category: mcp-servers
tags: [deel, hr, global, contractors, payroll]
price: paid
website: https://deel.com
logo: 
description: "Deel 全球 HR 和合规平台 MCP，全球承包商和薪资管理，AI Agent 全球 HR。"
descriptionEn: "Deel global HR and compliance platform MCP for global contractor and payroll management for AI Agent global HR."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @deel/mcp-server"
envVars: ["DEEL_API_KEY"]
configExample: |
  {
    "mcpServers": { "deel": { "command": "npx", "args": ["-y", "@deel/mcp-server"], "env": { "DEEL_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Deel MCP

Deel 全球 HR 和合规平台 MCP，全球承包商和薪资管理，AI Agent 全球 HR。
