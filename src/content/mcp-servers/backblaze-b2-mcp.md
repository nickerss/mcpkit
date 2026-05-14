---
title: "Backblaze B2 MCP"
name: backblaze-b2-mcp
category: mcp-servers
tags: [backblaze, b2, storage, cdn, backup]
price: freemium
website: https://backblaze.com/b2
logo: 
description: "Backblaze B2 云存储 MCP，S3 兼容 API，价格仅为 AWS S3 的 1/4，适合大规模数据备份。"
descriptionEn: "Backblaze B2 cloud storage MCP with S3-compatible API at 1/4 the cost of AWS S3 — ideal for large-scale data backup."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @backblaze/mcp-server"
envVars: ["B2_APPLICATION_KEY_ID", "B2_APPLICATION_KEY"]
configExample: |
  {
    "mcpServers": { "backblaze-b2": { "command": "npx", "args": ["-y", "@backblaze/mcp-server"], "env": { "B2_APPLICATION_KEY_ID": "xxx", "B2_APPLICATION_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Backblaze B2 MCP

Backblaze B2 云存储 MCP，S3 兼容 API，价格仅为 AWS S3 的 1/4，适合大规模数据备份。
