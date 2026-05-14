---
title: "Smartsheet MCP"
name: smartsheet-mcp
category: mcp-servers
tags: [smartsheet, sheets, project-management, collaboration, enterprise]
price: freemium
website: https://smartsheet.com
logo: 
description: "Smartsheet 企业表格和项目管理平台 MCP，表格和项目管理一体化，AI Agent 企业表格。"
descriptionEn: "Smartsheet enterprise sheets and project management platform MCP for integrated sheets and project management for AI Agent enterprise sheets."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @smartsheet/mcp-server"
envVars: ["SMARTSHEET_API_KEY"]
configExample: |
  {
    "mcpServers": { "smartsheet": { "command": "npx", "args": ["-y", "@smartsheet/mcp-server"], "env": { "SMARTSHEET_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Smartsheet MCP

Smartsheet 企业表格和项目管理平台 MCP，表格和项目管理一体化，AI Agent 企业表格。
