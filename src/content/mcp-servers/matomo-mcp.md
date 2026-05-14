---
title: "Matomo MCP"
name: matomo-mcp
category: mcp-servers
tags: [matomo, analytics, privacy, self-hosted, open-source]
price: free
website: https://matomo.org
logo: 
description: "Matomo 开源网站分析平台 MCP，自托管隐私分析，AI Agent 自托管分析。"
descriptionEn: "Matomo open-source web analytics platform MCP for self-hosted privacy analytics for AI Agent self-hosted analytics."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @matomo/mcp-server"
envVars: ["MATOMO_URL", "MATOMO_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "matomo": { "command": "npx", "args": ["-y", "@matomo/mcp-server"], "env": { "MATOMO_URL": "https://matomo.mycompany.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Matomo MCP

Matomo 开源网站分析平台 MCP，自托管隐私分析，AI Agent 自托管分析。
