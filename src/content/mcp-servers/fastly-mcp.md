---
title: "Fastly MCP"
name: fastly-mcp
category: mcp-servers
tags: [fastly, cdn, edge, caching, performance]
price: paid
website: https://fastly.com
logo: 
description: "Fastly CDN 和边缘计算平台 MCP，实时内容分发和边缘计算，适合大规模 Web 内容加速。"
descriptionEn: "Fastly CDN and edge computing platform MCP for real-time content delivery and edge computing for large-scale web acceleration."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @fastly/mcp-server"
envVars: ["FASTLY_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "fastly": { "command": "npx", "args": ["-y", "@fastly/mcp-server"], "env": { "FASTLY_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Fastly MCP

Fastly CDN 和边缘计算平台 MCP，实时内容分发和边缘计算，适合大规模 Web 内容加速。
