---
title: "Boulder MCP"
name: boulder-mcp
category: mcp-servers
tags: [boulder, lets-encrypt, acme, tls, certificates]
price: free
website: https://github.com/letsencrypt/boulder
logo: 
description: "Boulder ACME 证书服务 MCP，Let's Encrypt CA 实现，AI Agent TLS 证书自动化。"
descriptionEn: "Boulder ACME certificate service MCP as Let's Encrypt CA implementation for AI Agent TLS certificate automation."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @letsencrypt/boulder-mcp"
envVars: ["BOULDER_URL"]
configExample: |
  {
    "mcpServers": { "boulder": { "command": "npx", "args": ["-y", "@letsencrypt/boulder-mcp"], "env": { "BOULDER_URL": "https://acme-v02.api.letsencrypt.org" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Boulder MCP

Boulder ACME 证书服务 MCP，Let's Encrypt CA 实现，AI Agent TLS 证书自动化。
