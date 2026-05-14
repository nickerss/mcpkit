---
title: "Datadog APM MCP"
name: datadog-apm-mcp
category: mcp-servers
tags: [datadog, apm, monitoring, performance, tracing]
price: paid
website: https://datadoghq.com
logo: 
description: "Datadog APM 应用性能监控平台 MCP，APM 和性能追踪，AI Agent 应用性能监控。"
descriptionEn: "Datadog APM application performance monitoring platform MCP for APM and performance tracing for AI Agent application performance monitoring."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.3
certificationStatus: "certified"
installCommand: "npx @datadog/apm-mcp"
envVars: ["DATADOG_API_KEY", "DATADOG_APP_KEY"]
configExample: |
  {
    "mcpServers": { "datadog-apm": { "command": "npx", "args": ["-y", "@datadog/apm-mcp"], "env": { "DATADOG_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Datadog APM MCP

Datadog APM 应用性能监控平台 MCP，APM 和性能追踪，AI Agent 应用性能监控。
