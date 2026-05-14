---
title: "Cloudflare Tunnel MCP"
name: cloudflare-tunnel-mcp
category: mcp-servers
tags: [cloudflare, tunnel, zero-trust, localhost, networking]
price: free
website: https://developers.cloudflare.com/cloudflare-one
logo: 
description: "Cloudflare Tunnel 安全隧道 MCP，将本地服务通过 Cloudflare 安全暴露到互联网，无需公网 IP。"
descriptionEn: "Cloudflare Tunnel secure tunnel MCP exposing local services via Cloudflare without requiring a public IP."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "reviewed"
installCommand: "npx @cloudflare/tunnel-mcp"
envVars: ["CLOUDFLARE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "cloudflare-tunnel": { "command": "npx", "args": ["-y", "@cloudflare/tunnel-mcp"], "env": { "CLOUDFLARE_API_TOKEN": "cf_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloudflare Tunnel MCP

Cloudflare Tunnel 安全隧道 MCP，将本地服务通过 Cloudflare 安全暴露到互联网，无需公网 IP。
