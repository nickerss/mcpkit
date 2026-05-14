---
title: "Salesforce MCP"
name: salesforce-mcp
category: mcp-servers
tags: [salesforce, crm, enterprise, sales, automation]
price: paid
website: https://salesforce.com
logo: 
description: "Salesforce 企业级 CRM MCP，管理 Leads、Opportunities 和 Accounts，适合大型企业销售自动化。"
descriptionEn: "Salesforce enterprise CRM MCP managing Leads, Opportunities and Accounts for large enterprise sales automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.8
certificationStatus: "reviewed"
installCommand: "npx @salesforce/mcp-server"
envVars: ["SALESFORCE_CLIENT_ID", "SALESFORCE_CLIENT_SECRET", "SALESFORCE_INSTANCE_URL"]
configExample: |
  {
    "mcpServers": { "salesforce": { "command": "npx", "args": ["-y", "@salesforce/mcp-server"], "env": { "SALESFORCE_CLIENT_ID": "xxx", "SALESFORCE_CLIENT_SECRET": "xxx", "SALESFORCE_INSTANCE_URL": "https://mycompany.salesforce.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Salesforce MCP

Salesforce 企业级 CRM MCP，管理 Leads、Opportunities 和 Accounts，适合大型企业销售自动化。
