---
title: "Vercel MCP"
name: vercel-mcp
category: mcp-servers
tags: [vercel, deployment, frontend, nextjs, edge]
price: freemium
website: https://vercel.com
logo: 
description: "Vercel 前端部署平台 MCP，支持 Next.js 等框架的一键部署，全球边缘网络加速。"
descriptionEn: "Vercel frontend deployment platform MCP with one-click deploy for Next.js and other frameworks on global edge network."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.7
certificationStatus: "certified"
installCommand: "npx @vercel/mcp-server"
envVars: ["VERCEL_TOKEN"]
configExample: |
  {
    "mcpServers": { "vercel": { "command": "npx", "args": ["-y", "@vercel/mcp-server"], "env": { "VERCEL_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Vercel MCP

Vercel 前端部署平台 MCP，支持 Next.js 等框架的一键部署，全球边缘网络加速。
