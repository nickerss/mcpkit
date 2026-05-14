---
title: "Ory MCP"
name: ory-mcp
category: mcp-servers
tags: [ory, auth, open-source, identity, session]
price: free
website: https://www.ory.sh
logo: 
description: "Ory 开源身份和认证平台 MCP，Ory Kratos/Fosite 开源身份，AI Agent 开源身份。"
descriptionEn: "Ory open-source identity and authentication platform MCP for Ory Kratos/Fosite open-source identity for AI Agent open-source identity."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @ory/mcp-server"
envVars: ["ORY_SDK_URL"]
configExample: |
  {
    "mcpServers": { "ory": { "command": "npx", "args": ["-y", "@ory/mcp-server"], "env": { "ORY_SDK_URL": "http://localhost:4000" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Ory MCP

Ory 开源身份和认证平台 MCP，Ory Kratos/Fosite 开源身份，AI Agent 开源身份。
