---
title: "Auth0 MCP"
name: auth0-mcp
category: mcp-servers
tags: [auth0, auth, identity, oauth, sso]
price: freemium
website: https://auth0.com
logo: 
description: "Auth0 身份认证平台 MCP，管理用户、角色、权限和 OAuth 连接，企业级身份认证自动化。"
descriptionEn: "Auth0 identity platform MCP managing users, roles, permissions and OAuth connections for enterprise identity automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @auth0/mcp-server"
envVars: ["AUTH0_DOMAIN", "AUTH0_CLIENT_ID", "AUTH0_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "auth0": { "command": "npx", "args": ["-y", "@auth0/mcp-server"], "env": { "AUTH0_DOMAIN": "mycompany.auth0.com", "AUTH0_CLIENT_ID": "xxx", "AUTH0_CLIENT_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Auth0 MCP

Auth0 身份认证平台 MCP，管理用户、角色、权限和 OAuth 连接，企业级身份认证自动化。
