---
title: "Ghost MCP"
name: ghost-mcp
category: mcp-servers
tags: [ghost, cms, blog, publishing, newsletter]
price: free
website: https://ghost.org
logo: 
description: "Ghost 内容发布平台 MCP，专业博客和Newsletter，AI Agent 内容发布。"
descriptionEn: "Ghost content publishing platform MCP for professional blogging and newsletters for AI Agent content publishing."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @ghost/mcp-server"
envVars: ["GHOST_ADMIN_URL", "GHOST_ADMIN_API_KEY"]
configExample: |
  {
    "mcpServers": { "ghost": { "command": "npx", "args": ["-y", "@ghost/mcp-server"], "env": { "GHOST_ADMIN_URL": "https://myblog.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Ghost MCP

Ghost 内容发布平台 MCP，专业博客和Newsletter，AI Agent 内容发布。
