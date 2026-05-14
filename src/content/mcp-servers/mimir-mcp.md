---
title: "Mimir MCP"
name: mimir-mcp
category: mcp-servers
tags: [mimir, prometheus, metrics, grafana, storage]
price: free
website: https://grafana.com/oss/mimir
logo: 
description: "Grafana Mimir 指标长存储平台 MCP，高性能指标存储，AI Agent 长存储。"
descriptionEn: "Grafana Mimir metrics long-term storage platform MCP for high-performance metrics storage for AI Agent long-term storage."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @mimir/mcp-server"
envVars: ["MIMIR_URL"]
configExample: |
  {
    "mcpServers": { "mimir": { "command": "npx", "args": ["-y", "@mimir/mcp-server"], "env": { "MIMIR_URL": "http://localhost:8080" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Mimir MCP

Grafana Mimir 指标长存储平台 MCP，高性能指标存储，AI Agent 长存储。
