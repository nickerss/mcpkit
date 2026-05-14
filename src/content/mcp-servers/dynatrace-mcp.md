---
title: "Dynatrace MCP"
name: dynatrace-mcp
category: mcp-servers
tags: [dynatrace, apm, monitoring, ai, performance]
price: paid
website: https://www.dynatrace.com
logo: 
description: "Dynatrace AI 驱动 APM 平台 MCP，AI 性能分析和自动化，AI Agent AI 驱动监控。"
descriptionEn: "Dynatrace AI-driven APM platform MCP for AI performance analysis and automation for AI Agent AI-driven monitoring."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @dynatrace/mcp-server"
envVars: ["DYNATRACE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "dynatrace": { "command": "npx", "args": ["-y", "@dynatrace/mcp-server"], "env": { "DYNATRACE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Dynatrace MCP

Dynatrace AI 驱动 APM 平台 MCP，AI 性能分析和自动化，AI Agent AI 驱动监控。
