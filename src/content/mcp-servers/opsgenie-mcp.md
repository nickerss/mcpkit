---
title: "OpsGenie MCP"
name: opsgenie-mcp
category: mcp-servers
tags: [opsgenie, alerting, atlassian, incident, on-call]
price: paid
website: https://atlassian.com/software/opsgenie
logo: 
description: "Atlassian OpsGenie 告警管理 MCP，告警路由和团队值班管理，AI Agent 告警处理自动化。"
descriptionEn: "Atlassian OpsGenie alert management MCP for alert routing and team on-call management for AI Agent alert processing automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @opsgenie/mcp-server"
envVars: ["OPSGENIE_API_KEY"]
configExample: |
  {
    "mcpServers": { "opsgenie": { "command": "npx", "args": ["-y", "@opsgenie/mcp-server"], "env": { "OPSGENIE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# OpsGenie MCP

Atlassian OpsGenie 告警管理 MCP，告警路由和团队值班管理，AI Agent 告警处理自动化。
