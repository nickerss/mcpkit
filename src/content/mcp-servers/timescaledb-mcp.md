---
title: "TimescaleDB MCP"
name: timescaledb-mcp
category: mcp-servers
tags: [timescaledb, postgresql, timeseries, database, iot]
price: free
website: https://timescale.com
logo: 
description: "TimescaleDB 时序数据库 MCP，基于 PostgreSQL 的时序数据扩展，适合 IoT、金融和监控数据。"
descriptionEn: "TimescaleDB time-series database MCP — PostgreSQL extension for time-series data ideal for IoT, finance and monitoring."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @timescale/mcp-server"
envVars: ["TIMESCALE_CONNECTION_STRING"]
configExample: |
  {
    "mcpServers": { "timescale": { "command": "npx", "args": ["-y", "@timescale/mcp-server"], "env": { "TIMESCALE_CONNECTION_STRING": "postgres://user:pass@localhost:5432/tsdb" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# TimescaleDB MCP

TimescaleDB 时序数据库 MCP，基于 PostgreSQL 的时序数据扩展，适合 IoT、金融和监控数据。
