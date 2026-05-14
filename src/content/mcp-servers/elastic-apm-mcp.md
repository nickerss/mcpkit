---
title: "Elastic APM MCP"
name: elastic-apm-mcp
category: mcp-servers
tags: [elastic, apm, monitoring, elasticsearch, observability]
price: free
website: https://www.elastic.co/observability
logo: 
description: "Elastic APM 应用性能监控平台 MCP，Elasticsearch APM 解决方案，AI Agent Elastic 性能监控。"
descriptionEn: "Elastic APM application performance monitoring platform MCP for Elasticsearch APM solutions for AI Agent Elastic performance monitoring."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @elastic/apm-mcp"
envVars: ["ELASTIC_APM_SERVER_URL"]
configExample: |
  {
    "mcpServers": { "elastic-apm": { "command": "npx", "args": ["-y", "@elastic/apm-mcp"], "env": { "ELASTIC_APM_SERVER_URL": "http://localhost:8200" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Elastic APM MCP

Elastic APM 应用性能监控平台 MCP，Elasticsearch APM 解决方案，AI Agent Elastic 性能监控。
