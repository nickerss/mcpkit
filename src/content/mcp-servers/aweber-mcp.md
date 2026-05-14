---
title: "AWeber MCP"
name: aweber-mcp
category: mcp-servers
tags: [aweber, email, marketing, automation, small-business]
price: freemium
website: https://aweber.com
logo: 
description: "AWeber 邮件营销平台 MCP，中小企业邮件营销，AI Agent 邮件自动化。"
descriptionEn: "AWeber email marketing platform MCP for small and medium business email marketing for AI Agent email automation."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @aweber/mcp-server"
envVars: ["AWEBER_API_KEY"]
configExample: |
  {
    "mcpServers": { "aweber": { "command": "npx", "args": ["-y", "@aweber/mcp-server"], "env": { "AWEBER_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWeber MCP

AWeber 邮件营销平台 MCP，中小企业邮件营销，AI Agent 邮件自动化。
