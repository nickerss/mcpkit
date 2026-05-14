---
title: "Bunny CDN MCP"
name: bunny-cdn-mcp
category: mcp-servers
tags: [bunny, cdn, storage, edge, performance]
price: freemium
website: https://bunny.net
logo: 
description: "Bunny CDN 性价比 CDN 服务 MCP，简单配置高性能内容分发，存储和 CDN 一体化方案。"
descriptionEn: "Bunny CDN cost-effective CDN service MCP with simple configuration for high-performance content delivery and integrated storage."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @bunny/mcp-server"
envVars: ["BUNNY_API_KEY"]
configExample: |
  {
    "mcpServers": { "bunny-cdn": { "command": "npx", "args": ["-y", "@bunny/mcp-server"], "env": { "BUNNY_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Bunny CDN MCP

Bunny CDN 性价比 CDN 服务 MCP，简单配置高性能内容分发，存储和 CDN 一体化方案。
