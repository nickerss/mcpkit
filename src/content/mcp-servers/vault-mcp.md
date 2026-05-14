---
title: "HashiCorp Vault MCP"
name: vault-mcp
category: mcp-servers
tags: [vault, secrets, security, iam, infrastructure]
price: free
website: https://www.vaultproject.io
logo: 
description: "HashiCorp Vault 密钥管理 MCP，安全存储和访问密钥、密码和证书，企业级 secrets 管理。"
descriptionEn: "HashiCorp Vault secrets management MCP for secure storage and access to keys, passwords and certificates — enterprise secrets management."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 3
  overall: 3.5
certificationStatus: "reviewed"
installCommand: "npx @vault/mcp-server"
envVars: ["VAULT_ADDR", "VAULT_TOKEN"]
configExample: |
  {
    "mcpServers": { "vault": { "command": "npx", "args": ["-y", "@vault/mcp-server"], "env": { "VAULT_ADDR": "http://localhost:8200", "VAULT_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# HashiCorp Vault MCP

HashiCorp Vault 密钥管理 MCP，安全存储和访问密钥、密码和证书，企业级 secrets 管理。
