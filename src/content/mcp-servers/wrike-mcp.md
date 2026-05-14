---
title: "Wrike MCP"
name: wrike-mcp
category: mcp-servers
tags: [wrike, project-management, collaboration, enterprise, workflow]
price: freemium
website: https://wrike.com
logo: 
description: "Wrike 企业项目管理平台 MCP，企业级项目管理和协作，AI Agent 企业项目管理。"
descriptionEn: "Wrike enterprise project management platform MCP for enterprise project management and collaboration for AI Agent enterprise project management."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @wrike/mcp-server"
envVars: ["WRIKE_API_KEY"]
configExample: |
  {
    "mcpServers": { "wrike": { "command": "npx", "args": ["-y", "@wrike/mcp-server"], "env": { "WRIKE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Wrike MCP

Wrike 企业项目管理平台 MCP，企业级项目管理和协作，AI Agent 企业项目管理。
