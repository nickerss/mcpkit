---
title: "Checkly MCP"
name: checkly-mcp
category: mcp-servers
tags: [checkly, synthetics, monitoring, api-testing, playwright]
price: freemium
website: https://checklyhq.com
logo: 
description: "Checkly 合成监控平台 MCP，API 和浏览器监控，AI Agent 合成测试。"
descriptionEn: "Checkly synthetic monitoring platform MCP for API and browser monitoring for AI Agent synthetic testing."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @checkly/mcp-server"
envVars: ["CHECKLY_API_KEY"]
configExample: |
  {
    "mcpServers": { "checkly": { "command": "npx", "args": ["-y", "@checkly/mcp-server"], "env": { "CHECKLY_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Checkly MCP

Checkly 合成监控平台 MCP，API 和浏览器监控，AI Agent 合成测试。
