---
title: "EverHealth MCP"
name: everhealth-mcp
category: mcp-servers
tags: [everhealth, health, wellness, api, healthcare]
price: freemium
website: https://everhealth.io
logo: 
description: "EverHealth 健康管理平台 MCP，健康数据跟踪和分析，AI Agent 健康助手。"
descriptionEn: "EverHealth health management platform MCP for health data tracking and analysis for AI Agent health assistant."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 3
  scenarioFit: 3
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @everhealth/mcp-server"
envVars: ["EVERHEALTH_API_KEY"]
configExample: |
  {
    "mcpServers": { "everhealth": { "command": "npx", "args": ["-y", "@everhealth/mcp-server"], "env": { "EVERHEALTH_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# EverHealth MCP

EverHealth 健康管理平台 MCP，健康数据跟踪和分析，AI Agent 健康助手。
