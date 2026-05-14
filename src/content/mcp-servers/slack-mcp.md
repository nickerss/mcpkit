---
title: "Slack MCP"
name: slack-mcp
category: mcp-servers
tags: [slack, messaging, team, automation, channels]
price: freemium
website: https://slack.com
logo: 
description: "Slack 团队消息平台 MCP，频道消息、搜索和文件共享，AI Agent 团队协作自动化。"
descriptionEn: "Slack team messaging platform MCP for channel messages, search and file sharing for AI Agent team collaboration automation."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @slack/mcp-server"
envVars: ["SLACK_BOT_TOKEN"]
configExample: |
  {
    "mcpServers": { "slack": { "command": "npx", "args": ["-y", "@slack/mcp-server"], "env": { "SLACK_BOT_TOKEN": "xoxb-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Slack MCP

Slack 团队消息平台 MCP，频道消息、搜索和文件共享，AI Agent 团队协作自动化。
