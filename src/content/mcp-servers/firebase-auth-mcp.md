---
title: "Firebase Auth MCP"
name: firebase-auth-mcp
category: mcp-servers
tags: [firebase, google, auth, authentication, mobile]
price: free
website: https://firebase.google.com
logo: 
description: "Firebase Authentication MCP，支持邮箱、Google、Apple 等多种登录方式，移动端首选认证方案。"
descriptionEn: "Firebase Authentication MCP supporting email, Google, Apple and other login methods — top choice for mobile apps."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.5
certificationStatus: "recommended"
installCommand: "npx @firebase/mcp-server-auth"
envVars: ["FIREBASE_PROJECT_ID", "GOOGLE_APPLICATION_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "firebase-auth": { "command": "npx", "args": ["-y", "@firebase/mcp-server-auth"], "env": { "FIREBASE_PROJECT_ID": "myproject", "GOOGLE_APPLICATION_CREDENTIALS": "/path/to/serviceAccount.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Firebase Auth MCP

Firebase Authentication MCP，支持邮箱、Google、Apple 等多种登录方式，移动端首选认证方案。
