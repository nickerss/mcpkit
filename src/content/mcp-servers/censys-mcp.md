---
title: "Censys MCP"
name: censys-mcp
category: mcp-servers
tags: [censys, internet, search, ssl, certificates]
price: freemium
website: https://censys.io
logo: 
description: "Censys 互联网资产搜索引擎 MCP，SSL 证书和互联网资产发现，AI Agent 互联网资产测绘。"
descriptionEn: "Censys internet asset search engine MCP for SSL certificate and internet asset discovery for AI Agent internet asset mapping."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @censys/mcp-server"
envVars: ["CENSYS_API_ID", "CENSYS_API_SECRET"]
configExample: |
  {
    "mcpServers": { "censys": { "command": "npx", "args": ["-y", "@censys/mcp-server"], "env": { "CENSYS_API_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Censys MCP

Censys 互联网资产搜索引擎 MCP，SSL 证书和互联网资产发现，AI Agent 互联网资产测绘。
