---
title: "Insightly MCP"
name: insightly-mcp
category: mcp-servers
tags: [insightly, crm, marketing, project, small-business]
price: freemium
website: https://insightly.com
logo: 
description: "Insightly CRM 和营销平台 MCP，CRM 和营销自动化，AI Agent 中小企业 CRM。"
descriptionEn: "Insightly CRM and marketing platform MCP for CRM and marketing automation for AI Agent SMB CRM."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @insightly/mcp-server"
envVars: ["INSIGHTLY_API_KEY"]
configExample: |
  {
    "mcpServers": { "insightly": { "command": "npx", "args": ["-y", "@insightly/mcp-server"], "env": { "INSIGHTLY_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Insightly MCP

Insightly CRM 和营销平台 MCP，CRM 和营销自动化，AI Agent 中小企业 CRM。
