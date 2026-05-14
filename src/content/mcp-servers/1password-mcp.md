---
title: "1Password MCP"
name: 1password-mcp
category: mcp-servers
tags: [1password, password, secrets, credentials, security]
price: paid
website: https://1password.com
logo: 
description: "1Password 密码和 Secrets 管理 MCP，安全存储和访问密码、API 密钥和证书，团队共享凭据。"
descriptionEn: "1Password password and secrets management MCP for secure storage and access to passwords, API keys and certificates with team sharing."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.5
certificationStatus: "recommended"
installCommand: "npx @1password/mcp-server"
envVars: ["OP_SERVICE_ACCOUNT_TOKEN"]
configExample: |
  {
    "mcpServers": { "1password": { "command": "npx", "args": ["-y", "@1password/mcp-server"], "env": { "OP_SERVICE_ACCOUNT_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# 1Password MCP

1Password 密码和 Secrets 管理 MCP，安全存储和访问密码、API 密钥和证书，团队共享凭据。
