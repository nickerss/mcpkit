---
title: "Pipedrive MCP"
name: pipedrive-mcp
category: mcp-servers
tags: [pipedrive, crm, sales, pipeline, smb]
price: freemium
website: https://pipedrive.com
logo: 
description: "Pipedrive CRM 平台 MCP，可视化销售管道和交易管理，中小企业销售团队首选。"
descriptionEn: "Pipedrive CRM platform MCP with visual sales pipeline and deal management — top choice for SMB sales teams."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @pipedrive/mcp-server"
envVars: ["PIPEDRIVE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "pipedrive": { "command": "npx", "args": ["-y", "@pipedrive/mcp-server"], "env": { "PIPEDRIVE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Pipedrive MCP

Pipedrive CRM 平台 MCP，可视化销售管道和交易管理，中小企业销售团队首选。
