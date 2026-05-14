---
title: "Tencent Cloud MCP"
name: tencent-cloud-mcp
category: mcp-servers
tags: [tencent, cloud, cos, cdn, china]
price: pay-as-you-go
website: https://cloud.tencent.com
logo: 
description: "腾讯云 MCP， COS 对象存储、CDN 和云函数管理，AI Agent 中国区云服务集成。"
descriptionEn: "Tencent Cloud MCP for COS object storage, CDN and cloud functions management for AI Agent China region cloud integration."
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @tencent/mcp-server"
envVars: ["TENCENT_SECRET_ID", "TENCENT_SECRET_KEY"]
configExample: |
  {
    "mcpServers": { "tencent-cloud": { "command": "npx", "args": ["-y", "@tencent/mcp-server"], "env": { "TENCENT_SECRET_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Tencent Cloud MCP

腾讯云 MCP， COS 对象存储、CDN 和云函数管理，AI Agent 中国区云服务集成。
