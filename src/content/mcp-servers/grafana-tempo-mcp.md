---
title: "Grafana Tempo MCP"
name: grafana-tempo-mcp
category: mcp-servers
tags: [grafana, tempo, tracing, distributed-tracing, observability]
price: free
website: https://grafana.com/oss/tempo
logo: 
description: "Grafana Tempo 分布式追踪平台 MCP，开源追踪解决方案，AI Agent 链路追踪。"
descriptionEn: "Grafana Tempo distributed tracing platform MCP for open-source tracing solutions for AI Agent trace analysis."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @grafana/tempo-mcp"
envVars: ["TEMPO_URL"]
configExample: |
  {
    "mcpServers": { "grafana-tempo": { "command": "npx", "args": ["-y", "@grafana/tempo-mcp"], "env": { "TEMPO_URL": "http://localhost:3200" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Grafana Tempo MCP

Grafana Tempo 分布式追踪平台 MCP，开源追踪解决方案，AI Agent 链路追踪。
