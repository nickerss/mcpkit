---
title: "InfluxDB MCP"
name: influxdb-mcp
category: mcp-servers
tags: [influxdb, time-series, database, iot, metrics]
price: free
website: https://influxdata.com
logo: 
description: "InfluxDB 时间序列数据库 MCP，指标和事件存储，AI Agent 时序数据。"
descriptionEn: "InfluxDB time-series database MCP for storing metrics and events for AI Agent time-series data."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @influxdata/mcp-server"
envVars: ["INFLUXDB_URL", "INFLUXDB_TOKEN"]
configExample: |
  {
    "mcpServers": { "influxdb": { "command": "npx", "args": ["-y", "@influxdata/mcp-server"], "env": { "INFLUXDB_URL": "http://localhost:8086" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# InfluxDB MCP

InfluxDB 时间序列数据库 MCP，指标和事件存储，AI Agent 时序数据。
