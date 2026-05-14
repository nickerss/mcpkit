---
title: "Apache Pulsar MCP"
name: pulsar-mcp
category: mcp-servers
tags: [pulsar, messaging, streaming, events, real-time]
price: free
website: https://pulsar.apache.org
logo: 
description: "Apache Pulsar 消息和流平台 MCP，多租户消息和流处理，AI Agent 多租户消息。"
descriptionEn: "Apache Pulsar messaging and streaming platform MCP for multi-tenant messaging and stream processing for AI Agent multi-tenant messaging."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @apache/pulsar-mcp"
envVars: ["PULSAR_URL"]
configExample: |
  {
    "mcpServers": { "pulsar": { "command": "npx", "args": ["-y", "@apache/pulsar-mcp"], "env": { "PULSAR_URL": "pulsar://localhost:6650" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Apache Pulsar MCP

Apache Pulsar 消息和流平台 MCP，多租户消息和流处理，AI Agent 多租户消息。
