---
title: "Redis MCP"
name: redis-mcp
category: mcp-servers
tags: [redis, cache, nosql, pub-sub, session]
price: free
website: https://redis.io
logo: 
description: "Redis 键值存储 MCP，支持缓存、会话管理和 Pub/Sub，高性能 AI 应用必备。"
descriptionEn: "Redis key-value store MCP supporting caching, sessions, and Pub/Sub — essential for high-performance AI applications."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "recommended"
installCommand: "npx @redis/mcp-server"
envVars: ["REDIS_URL"]
configExample: |
  {
    "mcpServers": { "redis": { "command": "npx", "args": ["-y", "@redis/mcp-server"], "env": { "REDIS_URL": "redis://localhost:6379" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Redis MCP

Redis 键值存储 MCP，支持缓存、会话管理和 Pub/Sub，高性能 AI 应用必备。
