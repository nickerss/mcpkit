---
title: "HubSpot MCP"
name: hubspot-mcp
category: mcp-servers
tags: [hubspot, crm, marketing, sales, automation]
price: freemium
website: https://hubspot.com
logo: 
description: "HubSpot CRM MCP，管理联系人、公司、交易和营销自动化，AI Agent 销售和营销工作流。"
descriptionEn: "HubSpot CRM MCP managing contacts, companies, deals and marketing automation for AI Agent sales and marketing workflows."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "recommended"
installCommand: "npx @hubspot/mcp-server"
envVars: ["HUBSPOT_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "hubspot": { "command": "npx", "args": ["-y", "@hubspot/mcp-server"], "env": { "HUBSPOT_ACCESS_TOKEN": "pat-na1-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# HubSpot MCP

HubSpot CRM MCP，管理联系人、公司、交易和营销自动化，AI Agent 销售和营销工作流。
