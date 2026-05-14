---
title: "Wasabi MCP"
name: wasabi-mcp
category: mcp-servers
tags: [wasabi, storage, s3, hot-storage, infrastructure]
price: paid
website: https://wasabi.com
logo: 
description: "Wasabi 云存储 MCP，S3 兼容接口，无出口费用，适合频繁访问的热数据存储。"
descriptionEn: "Wasabi cloud storage MCP with S3-compatible interface and no egress fees — ideal for frequently accessed hot data storage."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @wasabi/mcp-server"
envVars: ["WASABI_ACCESS_KEY", "WASABI_SECRET_KEY", "WASABI_REGION"]
configExample: |
  {
    "mcpServers": { "wasabi": { "command": "npx", "args": ["-y", "@wasabi/mcp-server"], "env": { "WASABI_ACCESS_KEY": "xxx", "WASABI_SECRET_KEY": "xxx", "WASABI_REGION": "us-east-1" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Wasabi MCP

Wasabi 云存储 MCP，S3 兼容接口，无出口费用，适合频繁访问的热数据存储。
