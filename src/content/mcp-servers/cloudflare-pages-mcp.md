---
title: "Cloudflare Pages MCP"
name: cloudflare-pages-mcp
category: mcp-servers
tags: [cloudflare, pages, deployment, frontend, global-cdn]
price: free
website: https://pages.cloudflare.com
logo: 
description: "Cloudflare Pages 前端部署平台 MCP，全球 CDN 和边缘计算，AI Agent 极速部署。"
descriptionEn: "Cloudflare Pages frontend deployment platform MCP with global CDN and edge computing for AI Agent ultra-fast deployment."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @cloudflare/pages-mcp"
envVars: ["CLOUDFLARE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "cloudflare-pages": { "command": "npx", "args": ["-y", "@cloudflare/pages-mcp"], "env": { "CLOUDFLARE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloudflare Pages MCP

Cloudflare Pages 前端部署平台 MCP，全球 CDN 和边缘计算，AI Agent 极速部署。
