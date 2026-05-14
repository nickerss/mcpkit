---
title: "Grafana Loki MCP"
name: grafana-loki-mcp
category: mcp-servers
tags: [grafana, loki, logging, logs, observability]
price: free
website: https://grafana.com/oss/loki
logo: 
description: "Grafana Loki 日志聚合平台 MCP，高效日志聚合和查询，AI Agent 日志分析。"
descriptionEn: "Grafana Loki log aggregation platform MCP for efficient log aggregation and querying for AI Agent log analysis."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @grafana/loki-mcp"
envVars: ["LOKI_URL"]
configExample: |
  {
    "mcpServers": { "grafana-loki": { "command": "npx", "args": ["-y", "@grafana/loki-mcp"], "env": { "LOKI_URL": "http://localhost:3100" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Grafana Loki MCP

Grafana Loki 日志聚合平台 MCP，高效日志聚合和查询，AI Agent 日志分析。
