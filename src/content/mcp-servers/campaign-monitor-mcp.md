---
title: "Campaign Monitor MCP"
name: campaign-monitor-mcp
category: mcp-servers
tags: [campaign-monitor, email, marketing, templates, automation]
price: freemium
website: https://campaignmonitor.com
logo: 
description: "Campaign Monitor 邮件营销平台 MCP，精致模板和自动化，AI Agent 专业邮件营销。"
descriptionEn: "Campaign Monitor email marketing platform MCP with elegant templates and automation for AI Agent professional email marketing."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @campaignmonitor/mcp-server"
envVars: ["CM_API_KEY"]
configExample: |
  {
    "mcpServers": { "campaign-monitor": { "command": "npx", "args": ["-y", "@campaignmonitor/mcp-server"], "env": { "CM_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Campaign Monitor MCP

Campaign Monitor 邮件营销平台 MCP，精致模板和自动化，AI Agent 专业邮件营销。
