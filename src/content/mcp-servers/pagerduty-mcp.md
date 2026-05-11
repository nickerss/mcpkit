---
title: "PagerDuty MCP"
name: pagerduty-mcp
category: mcp-servers
tags: [pagerduty, alerting, incident, monitoring, devops]
price: paid
website: https://github.com/PagerDuty/mcp-pagerduty
logo: 
description: PagerDuty MCP for AI Agents to manage incidents, send alerts, and trigger automated remediation workflows in enterprise DevOps.
kit: ["ship-a-saas", "devops-monitoring"]
kitRole: "Incident alerting and on-call management for production systems"
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @pagerduty/mcp-server"
envVars: ["PAGERDUTY_API_KEY", "PAGERDUTY_SERVICE_ID"]
configExample: |
  {
    "mcpServers": {
      "pagerduty": {
        "command": "npx",
        "args": ["-y", "@pagerduty/mcp-server"],
        "env": {
          "PAGERDUTY_API_KEY": "xxx",
          "PAGERDUTY_SERVICE_ID": "PSERVICEID"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# PagerDuty MCP

PagerDuty MCP for AI Agents to manage incidents, send alerts, and trigger automated remediation workflows in enterprise DevOps.
