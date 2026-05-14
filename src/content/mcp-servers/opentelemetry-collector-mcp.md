---
title: "OpenTelemetry Collector MCP"
name: opentelemetry-collector-mcp
category: mcp-servers
tags: [opentelemetry, otel, collector, telemetry, observability]
price: free
website: https://opentelemetry.io
logo: 
description: "OpenTelemetry Collector 遥测数据收集平台 MCP，OTel 数据收集和处理，AI Agent 遥测数据收集。"
descriptionEn: "OpenTelemetry Collector telemetry data collection platform MCP for OTel data collection and processing for AI Agent telemetry collection."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 5
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @opentelemetry/collector-mcp"
envVars: ["OTEL_EXPORTER_OTLP_ENDPOINT"]
configExample: |
  {
    "mcpServers": { "otel-collector": { "command": "npx", "args": ["-y", "@opentelemetry/collector-mcp"], "env": { "OTEL_EXPORTER_OTLP_ENDPOINT": "http://localhost:4317" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# OpenTelemetry Collector MCP

OpenTelemetry Collector 遥测数据收集平台 MCP，OTel 数据收集和处理，AI Agent 遥测数据收集。
