---
title: "Zipkin MCP"
name: zipkin-mcp
category: mcp-servers
tags: [zipkin, tracing, distributed-tracing, twitter, observability]
price: free
website: https://zipkin.io
logo: 
description: "Zipkin 分布式追踪平台 MCP，Twitter 开源追踪系统，AI Agent 链路追踪。"
descriptionEn: "Zipkin distributed tracing platform MCP as Twitter open-source tracing system for AI Agent trace analysis."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @zipkin/mcp-server"
envVars: ["ZIPKIN_URL"]
configExample: |
  {
    "mcpServers": { "zipkin": { "command": "npx", "args": ["-y", "@zipkin/mcp-server"], "env": { "ZIPKIN_URL": "http://localhost:9411" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Zipkin MCP

Zipkin 分布式追踪平台 MCP，Twitter 开源追踪系统，AI Agent 链路追踪。
