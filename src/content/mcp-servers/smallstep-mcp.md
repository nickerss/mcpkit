---
title: "Smallstep MCP"
name: smallstep-mcp
category: mcp-servers
tags: [smallstep, pki, certificates, zero-trust, security]
price: free
website: https://smallstep.com
logo: 
description: "Smallstep PKI 和证书管理平台 MCP，零信任 PKI 自动化，AI Agent 内部证书管理。"
descriptionEn: "Smallstep PKI and certificate management platform MCP for zero-trust PKI automation for AI Agent internal certificate management."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @smallstep/mcp-server"
envVars: ["SMALLSTEP_HOST"]
configExample: |
  {
    "mcpServers": { "smallstep": { "command": "npx", "args": ["-y", "@smallstep/mcp-server"], "env": { "SMALLSTEP_HOST": "https://smallstep.mycompany.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Smallstep MCP

Smallstep PKI 和证书管理平台 MCP，零信任 PKI 自动化，AI Agent 内部证书管理。
