---
title: "Mailchimp MCP"
name: mailchimp-mcp
category: mcp-servers
tags: [mailchimp, email, marketing, automation, campaigns]
price: freemium
website: https://mailchimp.com
logo: 
description: "Mailchimp 邮件营销平台 MCP，管理订阅者、创建营销活动和自动化邮件序列。"
descriptionEn: "Mailchimp email marketing platform MCP managing subscribers, creating campaigns and automating email sequences."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "reviewed"
installCommand: "npx @mailchimp/mcp-server"
envVars: ["MAILCHIMP_API_KEY"]
configExample: |
  {
    "mcpServers": { "mailchimp": { "command": "npx", "args": ["-y", "@mailchimp/mcp-server"], "env": { "MAILCHIMP_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Mailchimp MCP

Mailchimp 邮件营销平台 MCP，管理订阅者、创建营销活动和自动化邮件序列。
