---
title: "Grafana MCP"
name: grafana-mcp
category: mcp-servers
tags: [grafana, monitoring, metrics, dashboards, observability]
price: free
website: https://grafana.com
logo: 
description: "Grafana 可观测性平台 MCP，查询指标、日志和面板数据，AI Agent 自动化监控仪表盘管理。"
descriptionEn: "Grafana observability platform MCP querying metrics, logs and panel data for AI Agent automated monitoring dashboard management."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @grafana/mcp-server"
envVars: ["GRAFANA_URL", "GRAFANA_TOKEN"]
configExample: |
  {
    "mcpServers": { "grafana": { "command": "npx", "args": ["-y", "@grafana/mcp-server"], "env": { "GRAFANA_URL": "http://localhost:3000", "GRAFANA_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Grafana MCP

Grafana 可观测性平台 MCP，查询指标、日志和面板数据，AI Agent 自动化监控仪表盘管理。
