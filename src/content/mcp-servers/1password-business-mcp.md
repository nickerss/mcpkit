---
title: "1Password Business MCP"
name: 1password-business-mcp
category: mcp-servers
tags: [1password, password, secrets, business, team]
price: paid
website: https://1password.com
logo: 
description: "1Password Business 团队密码管理平台 MCP，密码和密钥管理，AI Agent 团队密码。"
descriptionEn: "1Password Business team password management platform MCP for passwords and secrets for AI Agent team passwords."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.6
certificationStatus: "recommended"
installCommand: "npx @1password/mcp-server"
envVars: ["OP_CONNECT_TOKEN"]
configExample: |
  {
    "mcpServers": { "1password": { "command": "npx", "args": ["-y", "@1password/mcp-server"], "env": { "OP_CONNECT_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# 1Password Business MCP

1Password Business 团队密码管理平台 MCP，密码和密钥管理，AI Agent 团队密码。
