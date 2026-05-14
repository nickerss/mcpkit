---
title: "DataDog Synthetics MCP"
name: datadog-synthetics-mcp
category: mcp-servers
tags: [datadog, synthetics, monitoring, api-testing, uptime]
price: paid
website: https://datadoghq.com
logo: 
description: "Datadog Synthetics 合成监控平台 MCP，API 和浏览器合成测试，AI Agent 合成监控。"
descriptionEn: "Datadog Synthetics synthetic monitoring platform MCP for API and browser synthetic testing for AI Agent synthetic monitoring."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @datadog/synthetics-mcp"
envVars: ["DATADOG_API_KEY", "DATADOG_APP_KEY"]
configExample: |
  {
    "mcpServers": { "datadog-synthetics": { "command": "npx", "args": ["-y", "@datadog/synthetics-mcp"], "env": { "DATADOG_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# DataDog Synthetics MCP

Datadog Synthetics 合成监控平台 MCP，API 和浏览器合成测试，AI Agent 合成监控。
