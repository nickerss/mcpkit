---
title: "Clerk Webhooks MCP"
name: clerk-webhooks-mcp
category: mcp-servers
tags: [clerk, webhooks, auth, users, events]
price: freemium
website: https://clerk.com
logo: 
description: "Clerk Webhooks 认证事件平台 MCP，用户认证 Webhook 事件，AI Agent 认证事件。"
descriptionEn: "Clerk Webhooks authentication events platform MCP for user authentication webhook events for AI Agent auth events."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @clerk/webhooks-mcp"
envVars: ["CLERK_PUBLISHABLE_KEY"]
configExample: |
  {
    "mcpServers": { "clerk-webhooks": { "command": "npx", "args": ["-y", "@clerk/webhooks-mcp"], "env": { "CLERK_PUBLISHABLE_KEY": "pk_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Clerk Webhooks MCP

Clerk Webhooks 认证事件平台 MCP，用户认证 Webhook 事件，AI Agent 认证事件。
