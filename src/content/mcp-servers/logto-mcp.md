---
title: "Logto MCP"
name: logto-mcp
category: mcp-servers
tags: [logto, auth, open-source, identity, clerk-alternative]
price: free
website: https://logto.io
logo: 
description: "Logto 开源认证平台 MCP，Clerk 替代开源方案，AI Agent 开源 Auth。"
descriptionEn: "Logto open-source authentication platform MCP as Clerk alternative open-source solution for AI Agent open-source Auth."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @logto/mcp-server"
envVars: ["LOGTO_ENDPOINT"]
configExample: |
  {
    "mcpServers": { "logto": { "command": "npx", "args": ["-y", "@logto/mcp-server"], "env": { "LOGTO_ENDPOINT": "http://localhost:3001" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Logto MCP

Logto 开源认证平台 MCP，Clerk 替代开源方案，AI Agent 开源 Auth。
