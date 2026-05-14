---
title: "LinkedIn MCP"
name: linkedin-mcp
category: mcp-servers
tags: [linkedin, social, professional, network, api]
price: freemium
website: https://developer.linkedin.com
logo: 
description: "LinkedIn 职业社交平台 MCP，职业网络和内容发布，AI Agent 职业社交管理。"
descriptionEn: "LinkedIn professional social platform MCP for professional networking and content posting for AI Agent professional social management."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @linkedin/mcp-server"
envVars: ["LINKEDIN_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "linkedin": { "command": "npx", "args": ["-y", "@linkedin/mcp-server"], "env": { "LINKEDIN_ACCESS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# LinkedIn MCP

LinkedIn 职业社交平台 MCP，职业网络和内容发布，AI Agent 职业社交管理。
