---
title: "Datadog MCP"
name: datadog-mcp
category: mcp-servers
tags: [datadog, monitoring, logs, metrics, apm]
price: paid
website: https://datadoghq.com
logo: 
description: "Datadog 全栈监控 MCP，查询指标、日志和 APM 数据，AI Agent 可自动化性能分析和告警处理。"
descriptionEn: "Datadog full-stack monitoring MCP querying metrics, logs and APM data for AI Agent performance analysis and alerting."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.8
certificationStatus: "reviewed"
installCommand: "npx @datadog/mcp-server"
envVars: ["DATADOG_API_KEY", "DATADOG_APP_KEY"]
configExample: |
  {
    "mcpServers": { "datadog": { "command": "npx", "args": ["-y", "@datadog/mcp-server"], "env": { "DATADOG_API_KEY": "xxx", "DATADOG_APP_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Datadog MCP

Datadog 全栈监控 MCP，查询指标、日志和 APM 数据，AI Agent 可自动化性能分析和告警处理。
