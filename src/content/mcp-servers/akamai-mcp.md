---
title: "Akamai MCP"
name: akamai-mcp
category: mcp-servers
tags: [akamai, cdn, edge, security, performance]
price: paid
website: https://akamai.com
logo: 
description: "Akamai 全球 CDN 和安全平台 MCP，超大规模内容分发和企业级安全，适合大型全球化应用。"
descriptionEn: "Akamai global CDN and security platform MCP for ultra-large-scale content delivery and enterprise security for large global applications."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @akamai/mcp-server"
envVars: ["AKAMAI_CLIENT_SECRET", "AKAMAI_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "akamai": { "command": "npx", "args": ["-y", "@akamai/mcp-server"], "env": { "AKAMAI_CLIENT_SECRET": "xxx", "AKAMAI_ACCESS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Akamai MCP

Akamai 全球 CDN 和安全平台 MCP，超大规模内容分发和企业级安全，适合大型全球化应用。
