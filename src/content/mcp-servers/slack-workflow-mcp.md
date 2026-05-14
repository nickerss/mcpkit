---
title: "Slack Workflow MCP"
name: slack-workflow-mcp
category: mcp-servers
tags: [slack, workflow, automation, workflow-builder, events]
price: freemium
website: https://slack.com
logo: 
description: "Slack Workflow Builder MCP，创建和管理 Slack 工作流自动化，无需代码的简单自动化。"
descriptionEn: "Slack Workflow Builder MCP for creating and managing Slack workflow automation without code — simple workflow automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @slack/workflow-mcp"
envVars: ["SLACK_BOT_TOKEN"]
configExample: |
  {
    "mcpServers": { "slack-workflow": { "command": "npx", "args": ["-y", "@slack/workflow-mcp"], "env": { "SLACK_BOT_TOKEN": "xoxb-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Slack Workflow MCP

Slack Workflow Builder MCP，创建和管理 Slack 工作流自动化，无需代码的简单自动化。
