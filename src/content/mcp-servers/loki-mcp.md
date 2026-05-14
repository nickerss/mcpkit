---
title: "Loki MCP"
name: loki-mcp
category: mcp-servers
tags: [loki, logs, grafana, observability, aggregation]
price: free
website: https://grafana.com/oss/loki
logo: 
description: "Grafana Loki 日志聚合系统 MCP，查询和聚合大规模日志数据，与 Grafana 无缝集成。"
descriptionEn: "Grafana Loki log aggregation system MCP for querying and aggregating large-scale log data, seamlessly integrated with Grafana."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "reviewed"
installCommand: "npx @grafana/loki-mcp"
envVars: ["LOKI_URL"]
configExample: |
  {
    "mcpServers": { "loki": { "command": "npx", "args": ["-y", "@grafana/loki-mcp"], "env": { "LOKI_URL": "http://localhost:3100" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Loki MCP

Grafana Loki 日志聚合系统 MCP，查询和聚合大规模日志数据，与 Grafana 无缝集成。
