---
title: "Rippling MCP"
name: rippling-mcp
category: mcp-servers
tags: [rippling, hr, people, payroll, benefits]
price: paid
website: https://rippling.com
logo: 
description: "Rippling 统一 HR 和 IT 平台 MCP，员工、入薪水和福利管理，AI Agent 统一 HR。"
descriptionEn: "Rippling unified HR and IT platform MCP for people, payroll and benefits management for AI Agent unified HR."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @rippling/mcp-server"
envVars: ["RIPPLING_API_KEY"]
configExample: |
  {
    "mcpServers": { "rippling": { "command": "npx", "args": ["-y", "@rippling/mcp-server"], "env": { "RIPPLING_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Rippling MCP

Rippling 统一 HR 和 IT 平台 MCP，员工、入薪水和福利管理，AI Agent 统一 HR。
