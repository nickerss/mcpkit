---
title: "Clerk MCP"
name: clerk-mcp
category: mcp-servers
tags: [clerk, auth, authentication, user-management, nextjs]
price: freemium
website: https://clerk.com
logo: 
description: "Clerk 现代身份认证 MCP，管理用户、会话和 Webhook，专为现代 Web 应用设计。"
descriptionEn: "Clerk modern authentication MCP managing users, sessions and webhooks, designed for modern web applications."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.7
certificationStatus: "recommended"
installCommand: "npx @clerk/mcp-server"
envVars: ["CLERK_PUBLISHABLE_KEY", "CLERK_SECRET_KEY"]
configExample: |
  {
    "mcpServers": { "clerk": { "command": "npx", "args": ["-y", "@clerk/mcp-server"], "env": { "CLERK_PUBLISHABLE_KEY": "pk_xxx", "CLERK_SECRET_KEY": "sk_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Clerk MCP

Clerk 现代身份认证 MCP，管理用户、会话和 Webhook，专为现代 Web 应用设计。
