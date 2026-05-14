---
title: "Vultr MCP"
name: vultr-mcp
category: mcp-servers
tags: [vultr, cloud, vps, compute, infrastructure]
price: pay-as-you-go
website: https://vultr.com
logo: 
description: "Vultr 云平台 MCP，管理 VPS 实例、对象存储和块存储，AI Agent 基础设施自动化。"
descriptionEn: "Vultr cloud platform MCP managing VPS instances, object storage and block storage for AI Agent infrastructure automation."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @vultr/mcp-server"
envVars: ["VULTR_API_KEY"]
configExample: |
  {
    "mcpServers": { "vultr": { "command": "npx", "args": ["-y", "@vultr/mcp-server"], "env": { "VULTR_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Vultr MCP

Vultr 云平台 MCP，管理 VPS 实例、对象存储和块存储，AI Agent 基础设施自动化。
