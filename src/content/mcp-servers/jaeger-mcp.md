---
title: "Jaeger MCP"
name: jaeger-mcp
category: mcp-servers
tags: [jaeger, tracing, distributed-tracing, opentelemetry, observability]
price: free
website: https://www.jaegertracing.io
logo: 
description: "Jaeger 分布式追踪平台 MCP，OpenTelemetry 追踪，AI Agent 分布式追踪。"
descriptionEn: "Jaeger distributed tracing platform MCP for OpenTelemetry tracing for AI Agent distributed tracing."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @jaeger/mcp-server"
envVars: ["JAEGER_URL"]
configExample: |
  {
    "mcpServers": { "jaeger": { "command": "npx", "args": ["-y", "@jaeger/mcp-server"], "env": { "JAEGER_URL": "http://localhost:16686" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Jaeger MCP

Jaeger 分布式追踪平台 MCP，OpenTelemetry 追踪，AI Agent 分布式追踪。
