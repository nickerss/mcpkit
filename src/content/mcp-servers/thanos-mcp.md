---
title: "Thanos MCP"
name: thanos-mcp
category: mcp-servers
tags: [thanos, prometheus, metrics, global-views, storage]
price: free
website: https://thanos.io
logo: 
description: "Thanos Prometheus 长存储平台 MCP，跨集群指标聚合，AI Agent 长存储监控。"
descriptionEn: "Thanos Prometheus long-term storage platform MCP for cross-cluster metrics aggregation for AI Agent long-term storage monitoring."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @thanos/mcp-server"
envVars: ["THANOS_STORE_URL"]
configExample: |
  {
    "mcpServers": { "thanos": { "command": "npx", "args": ["-y", "@thanos/mcp-server"], "env": { "THANOS_STORE_URL": "http://localhost:10901" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Thanos MCP

Thanos Prometheus 长存储平台 MCP，跨集群指标聚合，AI Agent 长存储监控。
