---
title: "Fathom MCP"
name: fathom-mcp
category: mcp-servers
tags: [fathom, analytics, privacy, simple, gdpr]
price: freemium
website: https://usefathom.com
logo: 
description: "Fathom 隐私优先分析平台 MCP，GDPR 友好无追踪，AI Agent 合规分析。"
descriptionEn: "Fathom privacy-first analytics platform MCP as GDPR-friendly tracker-free for AI Agent compliant analytics."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @fathom/mcp-server"
envVars: ["FATHOM_SITE_ID"]
configExample: |
  {
    "mcpServers": { "fathom": { "command": "npx", "args": ["-y", "@fathom/mcp-server"], "env": { "FATHOM_SITE_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Fathom MCP

Fathom 隐私优先分析平台 MCP，GDPR 友好无追踪，AI Agent 合规分析。
