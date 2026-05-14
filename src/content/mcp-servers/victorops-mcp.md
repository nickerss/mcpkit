---
title: "VictorOps MCP"
name: victorops-mcp
category: mcp-servers
tags: [victorops, incident, alerting, splunk, on-call]
price: paid
website: https://victorops.com
logo: 
description: "Splunk VictorOps 事件响应平台 MCP，实时告警和事件管理，AI Agent 事件管理。"
descriptionEn: "Splunk VictorOps incident response platform MCP for real-time alerting and incident management for AI Agent incident management."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @victorops/mcp-server"
envVars: ["VICTOROPS_API_KEY"]
configExample: |
  {
    "mcpServers": { "victorops": { "command": "npx", "args": ["-y", "@victorops/mcp-server"], "env": { "VICTOROPS_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# VictorOps MCP

Splunk VictorOps 事件响应平台 MCP，实时告警和事件管理，AI Agent 事件管理。
