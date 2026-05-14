---
title: "Upstash Redis MCP"
name: upstash-redis-mcp
category: mcp-servers
tags: [upstash, redis, serverless, edge, kv]
price: freemium
website: https://upstash.com
logo: 
description: "Upstash Redis 无服务器平台 MCP，边缘 Redis 和 Kafka，AI Agent 无服务器缓存。"
descriptionEn: "Upstash Redis serverless platform MCP for edge Redis and Kafka for AI Agent serverless caching."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @upstash/redis-mcp"
envVars: ["UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN"]
configExample: |
  {
    "mcpServers": { "upstash-redis": { "command": "npx", "args": ["-y", "@upstash/redis-mcp"], "env": { "UPSTASH_REDIS_REST_URL": "https://xxx.upstash.io" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Upstash Redis MCP

Upstash Redis 无服务器平台 MCP，边缘 Redis 和 Kafka，AI Agent 无服务器缓存。
