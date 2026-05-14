---
title: "Cortex MCP"
name: cortex-mcp
category: mcp-servers
tags: [cortex, prometheus, metrics, multi-tenant, storage]
price: free
website: https://cortexmetrics.io
logo: 
description: "Cortex 多租户 Prometheus 存储平台 MCP，多租户指标存储，AI Agent 多租户监控。"
descriptionEn: "Cortex multi-tenant Prometheus storage platform MCP for multi-tenant metrics storage for AI Agent multi-tenant monitoring."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @cortex/mcp-server"
envVars: ["CORTEX_URL"]
configExample: |
  {
    "mcpServers": { "cortex": { "command": "npx", "args": ["-y", "@cortex/mcp-server"], "env": { "CORTEX_URL": "http://localhost:8080" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cortex MCP

Cortex 多租户 Prometheus 存储平台 MCP，多租户指标存储，AI Agent 多租户监控。
