---
title: "New Relic MCP"
name: newrelic-mcp
category: mcp-servers
tags: [newrelic, monitoring, apm, metrics, alerts]
price: freemium
website: https://newrelic.com
logo: 
description: "New Relic 应用性能监控 MCP，查询 APM、基础设施和日志数据，AI Agent 自动化性能告警。"
descriptionEn: "New Relic APM MCP querying application, infrastructure and log data for AI Agent automated performance alerting."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @newrelic/mcp-server"
envVars: ["NEW_RELIC_API_KEY", "NEW_RELIC_ACCOUNT_ID"]
configExample: |
  {
    "mcpServers": { "newrelic": { "command": "npx", "args": ["-y", "@newrelic/mcp-server"], "env": { "NEW_RELIC_API_KEY": "xxx", "NEW_RELIC_ACCOUNT_ID": "1234567" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# New Relic MCP

New Relic 应用性能监控 MCP，查询 APM、基础设施和日志数据，AI Agent 自动化性能告警。
