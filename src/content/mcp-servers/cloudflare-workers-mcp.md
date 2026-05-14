---
title: "Cloudflare Workers MCP"
name: cloudflare-workers-mcp
category: mcp-servers
tags: [cloudflare, workers, edge, serverless, javascript]
price: free
website: https://workers.cloudflare.com
logo: 
description: "Cloudflare Workers 边缘计算平台 MCP，JavaScript/TypeScript 边缘运行，AI Agent 边缘计算。"
descriptionEn: "Cloudflare Workers edge computing platform MCP for running JavaScript/TypeScript at the edge for AI Agent edge computing."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @cloudflare/workers-mcp"
envVars: ["CLOUDFLARE_API_TOKEN", "CF_ACCOUNT_ID"]
configExample: |
  {
    "mcpServers": { "cf-workers": { "command": "npx", "args": ["-y", "@cloudflare/workers-mcp"], "env": { "CLOUDFLARE_API_TOKEN": "xxx", "CF_ACCOUNT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloudflare Workers MCP

Cloudflare Workers 边缘计算平台 MCP，JavaScript/TypeScript 边缘运行，AI Agent 边缘计算。
