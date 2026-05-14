---
title: "Basecamp MCP"
name: basecamp-mcp
category: mcp-servers
tags: [basecamp, project-management, collaboration, to-do, messaging]
price: freemium
website: https://basecamp.com
logo: 
description: "Basecamp 项目管理和协作平台 MCP，一体化项目协作，AI Agent 一体化协作。"
descriptionEn: "Basecamp project management and collaboration platform MCP for integrated project collaboration for AI Agent integrated collaboration."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @basecamp/mcp-server"
envVars: ["BASECAMP_ACCOUNT_ID"]
configExample: |
  {
    "mcpServers": { "basecamp": { "command": "npx", "args": ["-y", "@basecamp/mcp-server"], "env": { "BASECAMP_ACCOUNT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Basecamp MCP

Basecamp 项目管理和协作平台 MCP，一体化项目协作，AI Agent 一体化协作。
