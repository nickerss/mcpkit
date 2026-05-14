---
title: "Grafana OnCall MCP"
name: grafana-oncall-mcp
category: mcp-servers
tags: [grafana, oncall, alerting, incident, on-call]
price: free
website: https://grafana.com/docs/oncall
logo: 
description: "Grafana OnCall 告警和值班平台 MCP，开源告警和值班管理，AI Agent 开源告警。"
descriptionEn: "Grafana OnCall alerting and on-call platform MCP for open-source alerting and on-call management for AI Agent open-source alerting."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @grafana/oncall-mcp"
envVars: ["GRAFANA_ONCALL_URL"]
configExample: |
  {
    "mcpServers": { "grafana-oncall": { "command": "npx", "args": ["-y", "@grafana/oncall-mcp"], "env": { "GRAFANA_ONCALL_URL": "http://localhost:8080" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Grafana OnCall MCP

Grafana OnCall 告警和值班平台 MCP，开源告警和值班管理，AI Agent 开源告警。
