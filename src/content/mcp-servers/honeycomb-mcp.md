---
title: "Honeycomb MCP"
name: honeycomb-mcp
category: mcp-servers
tags: [honeycomb, observability, tracing, debugging, ml]
price: paid
website: https://honeycomb.io
logo: 
description: "Honeycomb 可观测性平台 MCP，ML 驱动的分布式追踪，AI Agent 智能调试。"
descriptionEn: "Honeycomb observability platform MCP with ML-powered distributed tracing for AI Agent intelligent debugging."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @honeycombio/mcp-server"
envVars: ["HONEYCOMB_API_KEY"]
configExample: |
  {
    "mcpServers": { "honeycomb": { "command": "npx", "args": ["-y", "@honeycombio/mcp-server"], "env": { "HONEYCOMB_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Honeycomb MCP

Honeycomb 可观测性平台 MCP，ML 驱动的分布式追踪，AI Agent 智能调试。
