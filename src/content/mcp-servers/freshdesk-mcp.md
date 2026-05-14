---
title: "Freshdesk MCP"
name: freshdesk-mcp
category: mcp-servers
tags: [freshdesk, support, tickets, crm, helpdesk]
price: freemium
website: https://freshdesk.com
logo: 
description: "Freshdesk 客户服务平台 MCP，工单管理和客户支持自动化，中小企业首选。"
descriptionEn: "Freshdesk customer service platform MCP for ticket management and customer support automation — top choice for SMBs."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @freshdesk/mcp-server"
envVars: ["FRESHDESK_API_KEY"]
configExample: |
  {
    "mcpServers": { "freshdesk": { "command": "npx", "args": ["-y", "@freshdesk/mcp-server"], "env": { "FRESHDESK_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Freshdesk MCP

Freshdesk 客户服务平台 MCP，工单管理和客户支持自动化，中小企业首选。
