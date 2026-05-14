---
title: "Redis Streams MCP"
name: redis-streams-mcp
category: mcp-servers
tags: [redis, streams, messaging, real-time, queue]
price: free
website: https://redis.io
logo: 
description: "Redis Streams 消息流 MCP，实时消息处理和队列管理，利用 Redis 实现高性能事件流。"
descriptionEn: "Redis Streams message stream MCP for real-time message processing and queue management using Redis for high-performance event streaming."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "reviewed"
installCommand: "npx @redis/streams-mcp"
envVars: ["REDIS_URL"]
configExample: |
  {
    "mcpServers": { "redis-streams": { "command": "npx", "args": ["-y", "@redis/streams-mcp"], "env": { "REDIS_URL": "redis://localhost:6379" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Redis Streams MCP

Redis Streams 消息流 MCP，实时消息处理和队列管理，利用 Redis 实现高性能事件流。
