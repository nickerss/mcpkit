---
title: "HiveMQ MCP"
name: hivemq-mcp
category: mcp-servers
tags: [hivemq, mqtt, iot, enterprise, broker]
price: paid
website: https://hivemq.com
logo: 
description: "HiveMQ MQTT 企业消息平台 MCP，企业级 MQTT 代理，AI Agent 企业 MQTT。"
descriptionEn: "HiveMQ MQTT enterprise messaging platform MCP for enterprise MQTT broker for AI Agent enterprise MQTT."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @hivemq/mcp-server"
envVars: ["HIVEMQ_HOST"]
configExample: |
  {
    "mcpServers": { "hivemq": { "command": "npx", "args": ["-y", "@hivemq/mcp-server"], "env": { "HIVEMQ_HOST": "localhost" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# HiveMQ MCP

HiveMQ MQTT 企业消息平台 MCP，企业级 MQTT 代理，AI Agent 企业 MQTT。
