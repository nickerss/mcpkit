---
title: "Alibaba Cloud MCP"
name: alibaba-cloud-mcp
category: mcp-servers
tags: [alibaba, aliyun, cloud, ecs, china]
price: pay-as-you-go
website: https://aliyun.com
logo: 
description: "阿里云 MCP，ECS、OSS 和函数计算管理，AI Agent 中国区最大云平台集成。"
descriptionEn: "Alibaba Cloud (Aliyun) MCP for ECS, OSS and function computing management for AI Agent China region largest cloud platform integration."
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @alibaba/mcp-server"
envVars: ["ALIBABA_ACCESS_KEY_ID", "ALIBABA_ACCESS_KEY_SECRET"]
configExample: |
  {
    "mcpServers": { "alibaba-cloud": { "command": "npx", "args": ["-y", "@alibaba/mcp-server"], "env": { "ALIBABA_ACCESS_KEY_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Alibaba Cloud MCP

阿里云 MCP，ECS、OSS 和函数计算管理，AI Agent 中国区最大云平台集成。
