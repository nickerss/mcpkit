---
title: "Kafka MCP"
name: kafka-mcp
category: mcp-servers
tags: [kafka, messaging, streaming, events, real-time]
price: free
website: https://kafka.apache.org
logo: 
description: "Apache Kafka 分布式事件流平台 MCP，实时数据管道和事件驱动架构的核心组件。"
descriptionEn: "Apache Kafka distributed event streaming platform MCP — core component for real-time data pipelines and event-driven architecture."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @kafka/mcp-server"
envVars: ["KAFKA_BROKERS"]
configExample: |
  {
    "mcpServers": { "kafka": { "command": "npx", "args": ["-y", "@kafka/mcp-server"], "env": { "KAFKA_BROKERS": "localhost:9092" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Kafka MCP

Apache Kafka 分布式事件流平台 MCP，实时数据管道和事件驱动架构的核心组件。
