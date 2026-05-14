---
title: "Cloudflare Tunnels MCP"
name: cloudflare-tunnels-mcp
category: mcp-servers
tags: [cloudflare, tunnels, tunnel, expose, zero-config]
price: free
website: https://cloudflare.com
logo: 
description: "Cloudflare Tunnels 零配置穿透平台 MCP，零配置暴露本地服务，AI Agent 零配置隧道。"
descriptionEn: "Cloudflare Tunnels zero-config tunnel platform MCP for zero-config exposing local services for AI Agent zero-config tunnels."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @cloudflare/tunnels-mcp"
envVars: ["CLOUDFLARE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "cloudflare-tunnels": { "command": "npx", "args": ["-y", "@cloudflare/tunnels-mcp"], "env": { "CLOUDFLARE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloudflare Tunnels MCP

Cloudflare Tunnels 零配置穿透平台 MCP，零配置暴露本地服务，AI Agent 零配置隧道。
