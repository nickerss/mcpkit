---
title: "Slack MCP"
name: slack-mcp
category: mcp-servers
tags: [slack, messaging, notifications, team]
price: free
website: https://github.com/modelcontextprotocol/servers
logo: 
description: Slack API MCP for sending channel messages, managing channels, and searching history - essential for deployment and alert notifications.
kit: ["ship-a-saas", "browser-automation", "devops-monitoring", "ai-coding-agent"]
kitRole: "Team notifications for deployments, errors, and task completions"
evaluation:
  easeOfUse: 4
  security: 3
  activity: 5
  scenarioFit: 5
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @modelcontextprotocol/server-slack"
envVars: ["SLACK_BOT_TOKEN", "SLACK_TEAM_ID"]
configExample: |
  {
    "mcpServers": {
      "slack": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-slack"],
        "env": { "SLACK_BOT_TOKEN": "xoxb-xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Slack MCP

Slack API MCP for sending channel messages, managing channels, and searching history - essential for deployment and alert notifications.
