---
title: "Bitwarden MCP"
name: bitwarden-mcp
category: mcp-servers
tags: [bitwarden, password, secrets, open-source, security]
price: free
website: https://bitwarden.com
logo: 
description: "Bitwarden 开源密码管理 MCP，安全的密码和 Secrets 存储，开源自托管选项。"
descriptionEn: "Bitwarden open-source password management MCP for secure password and secrets storage with self-hosting option."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "reviewed"
installCommand: "npx @bitwarden/mcp-server"
envVars: ["BITWARDEN_MASTER_PASSWORD"]
configExample: |
  {
    "mcpServers": { "bitwarden": { "command": "npx", "args": ["-y", "@bitwarden/mcp-server"], "env": { "BITWARDEN_MASTER_PASSWORD": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Bitwarden MCP

Bitwarden 开源密码管理 MCP，安全的密码和 Secrets 存储，开源自托管选项。
