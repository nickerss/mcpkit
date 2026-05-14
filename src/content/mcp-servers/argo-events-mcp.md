---
title: "Argo Events MCP"
name: argo-events-mcp
category: mcp-servers
tags: [argo, events, kubernetes, webhooks, event-driven]
price: free
website: https://argoproj.github.io
logo: 
description: "Argo Events 事件驱动平台 MCP，K8s 事件驱动自动化，AI Agent Argo 事件。"
descriptionEn: "Argo Events event-driven platform MCP for K8s event-driven automation for AI Agent Argo events."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @argo/events-mcp"
envVars: ["ARGO_EVENTS_URL"]
configExample: |
  {
    "mcpServers": { "argo-events": { "command": "npx", "args": ["-y", "@argo/events-mcp"], "env": { "ARGO_EVENTS_URL": "http://localhost:12000" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Argo Events MCP

Argo Events 事件驱动平台 MCP，K8s 事件驱动自动化，AI Agent Argo 事件。
