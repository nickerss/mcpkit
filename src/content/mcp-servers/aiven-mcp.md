---
title: "Aiven MCP"
name: aiven-mcp
category: mcp-servers
tags: [aiven, database, kafka, postgres, cloud]
price: pay-as-you-go
website: https://aiven.io
logo: 
description: "Aiven 云数据库和流平台 MCP，Kafka、PostgreSQL 和更多托管服务，AI Agent 云数据库。"
descriptionEn: "Aiven cloud database and streaming platform MCP for Kafka, PostgreSQL and more managed services for AI Agent cloud databases."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @aiven/mcp-server"
envVars: ["AIVEN_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "aiven": { "command": "npx", "args": ["-y", "@aiven/mcp-server"], "env": { "AIVEN_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Aiven MCP

Aiven 云数据库和流平台 MCP，Kafka、PostgreSQL 和更多托管服务，AI Agent 云数据库。
