---
title: "EMQX MCP"
name: emqx-mcp
category: mcp-servers
tags: [emqx, mqtt, iot, messages, broker]
price: free
website: https://emqx.io
logo: 
description: "EMQX MQTT 消息代理平台 MCP，开源 MQTT 代理和规则引擎，AI Agent MQTT 代理。"
descriptionEn: "EMQX MQTT messaging broker platform MCP as open-source MQTT broker and rules engine for AI Agent MQTT broker."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @emqx/mcp-server"
envVars: ["EMQX_URL"]
configExample: |
  {
    "mcpServers": { "emqx": { "command": "npx", "args": ["-y", "@emqx/mcp-server"], "env": { "EMQX_URL": "http://localhost:8081" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# EMQX MCP

EMQX MQTT 消息代理平台 MCP，开源 MQTT 代理和规则引擎，AI Agent MQTT 代理。
