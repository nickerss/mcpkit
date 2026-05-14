---
title: "OpenTelemetry MCP"
name: opentelemetry-mcp
category: mcp-servers
tags: [opentelemetry, traces, metrics, logs, observability]
price: free
website: https://opentelemetry.io
logo: 
description: "OpenTelemetry 可观测性框架 MCP，traces、metrics 和 logs，AI Agent 标准可观测性。"
descriptionEn: "OpenTelemetry observability framework MCP for traces, metrics and logs for AI Agent standard observability."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @opentelemetry/mcp-server"
envVars: ["OTEL_EXPORTER_OTLP_ENDPOINT"]
configExample: |
  {
    "mcpServers": { "opentelemetry": { "command": "npx", "args": ["-y", "@opentelemetry/mcp-server"], "env": { "OTEL_EXPORTER_OTLP_ENDPOINT": "http://localhost:4317" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# OpenTelemetry MCP

OpenTelemetry 可观测性框架 MCP，traces、metrics 和 logs，AI Agent 标准可观测性。
