---
title: "Grafana Prometheus MCP"
name: grafana-prometheus-mcp
category: mcp-servers
tags: [grafana, prometheus, metrics, monitoring, observability]
price: free
website: https://prometheus.io
logo: 
description: "Grafana Prometheus 指标监控平台 MCP，指标查询和监控，AI Agent 指标监控。"
descriptionEn: "Grafana Prometheus metrics monitoring platform MCP for metrics querying and monitoring for AI Agent metrics monitoring."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @grafana/prometheus-mcp"
envVars: ["PROMETHEUS_URL"]
configExample: |
  {
    "mcpServers": { "grafana-prometheus": { "command": "npx", "args": ["-y", "@grafana/prometheus-mcp"], "env": { "PROMETHEUS_URL": "http://localhost:9090" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Grafana Prometheus MCP

Grafana Prometheus 指标监控平台 MCP，指标查询和监控，AI Agent 指标监控。
