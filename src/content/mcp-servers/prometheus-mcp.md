---
title: "Prometheus MCP"
name: prometheus-mcp
category: mcp-servers
tags: [prometheus, metrics, monitoring, alerting, observability]
price: free
website: https://prometheus.io
logo: 
description: "Prometheus 监控时序数据库 MCP，查询指标数据和告警规则，支持 Kubernetes 和应用指标收集。"
descriptionEn: "Prometheus monitoring time-series database MCP querying metric data and alert rules for Kubernetes and application monitoring."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "reviewed"
installCommand: "npx @prometheus/mcp-server"
envVars: ["PROMETHEUS_URL"]
configExample: |
  {
    "mcpServers": { "prometheus": { "command": "npx", "args": ["-y", "@prometheus/mcp-server"], "env": { "PROMETHEUS_URL": "http://localhost:9090" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Prometheus MCP

Prometheus 监控时序数据库 MCP，查询指标数据和告警规则，支持 Kubernetes 和应用指标收集。
