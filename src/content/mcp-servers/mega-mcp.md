---
title: "Mega MCP"
name: mega-mcp
category: mcp-servers
tags: [mega, storage, privacy, end-to-end, encrypted]
price: freemium
website: https://mega.nz
logo: 
description: "MEGA 端对端加密云存储平台 MCP，隐私优先加密存储，AI Agent 私密存储。"
descriptionEn: "MEGA end-to-end encrypted cloud storage platform MCP with privacy-first encrypted storage for AI Agent private storage."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 3
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @mega/mcp-server"
envVars: ["MEGA_EMAIL", "MEGA_PASSWORD"]
configExample: |
  {
    "mcpServers": { "mega": { "command": "npx", "args": ["-y", "@mega/mcp-server"], "env": { "MEGA_EMAIL": "user@example.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Mega MCP

MEGA 端对端加密云存储平台 MCP，隐私优先加密存储，AI Agent 私密存储。
