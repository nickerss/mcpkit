---
title: "Netlify MCP"
name: netlify-mcp
category: mcp-servers
tags: [netlify, deployment, hosting, jamstack, cdn]
price: free
website: https://netlify.com
logo: 
description: "Netlify JAMstack 部署平台 MCP，静态网站和 Serverless 函数，AI Agent Web 部署。"
descriptionEn: "Netlify JAMstack deployment platform MCP for static sites and serverless functions for AI Agent web deployment."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @netlify/mcp-server"
envVars: ["NETLIFY_AUTH_TOKEN"]
configExample: |
  {
    "mcpServers": { "netlify": { "command": "npx", "args": ["-y", "@netlify/mcp-server"], "env": { "NETLIFY_AUTH_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Netlify MCP

Netlify JAMstack 部署平台 MCP，静态网站和 Serverless 函数，AI Agent Web 部署。
