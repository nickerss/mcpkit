---
title: "Instana MCP"
name: instana-mcp
category: mcp-servers
tags: [instana, apm, monitoring, ibm, performance]
price: paid
website: https://www.instana.com
logo: 
description: "IBM Instana APM 应用性能监控平台 MCP，自动化性能监控，AI Agent 自动化 APM。"
descriptionEn: "IBM Instana APM application performance monitoring platform MCP for automated performance monitoring for AI Agent automated APM."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @instana/mcp-server"
envVars: ["INSTANA_API_URL"]
configExample: |
  {
    "mcpServers": { "instana": { "command": "npx", "args": ["-y", "@instana/mcp-server"], "env": { "INSTANA_API_URL": "https://xxx.instana.io" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Instana MCP

IBM Instana APM 应用性能监控平台 MCP，自动化性能监控，AI Agent 自动化 APM。
