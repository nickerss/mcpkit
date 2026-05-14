---
title: "Upstash MCP"
name: upstash-mcp
category: mcp-servers
tags: [upstash, redis, serverless, edge, caching]
price: freemium
website: https://upstash.com
logo: 
description: "Upstash 无服务器 Redis 平台 MCP，边缘缓存和消息队列，AI Agent 高速缓存服务。"
descriptionEn: "Upstash serverless Redis platform MCP for edge caching and message queues for AI Agent high-speed cache services."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @upstash/mcp-server"
envVars: ["UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN"]
configExample: |
  {
    "mcpServers": { "upstash": { "command": "npx", "args": ["-y", "@upstash/mcp-server"], "env": { "UPSTASH_REDIS_REST_URL": "https://xxx.upstash.io" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Upstash MCP

Upstash 无服务器 Redis 平台 MCP，边缘缓存和消息队列，AI Agent 高速缓存服务。
