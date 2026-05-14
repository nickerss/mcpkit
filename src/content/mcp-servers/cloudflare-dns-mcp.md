---
title: "Cloudflare DNS MCP"
name: cloudflare-dns-mcp
category: mcp-servers
tags: [cloudflare, dns, domains, ddns, cdn]
price: free
website: https://developers.cloudflare.com/dns
logo: 
description: "Cloudflare DNS 管理 MCP，配置域名解析、DNS 记录和流量管理，全球高可用 DNS 服务。"
descriptionEn: "Cloudflare DNS management MCP for configuring domain resolution, DNS records and traffic management with global high-availability DNS service."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @cloudflare/dns-mcp"
envVars: ["CLOUDFLARE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "cloudflare-dns": { "command": "npx", "args": ["-y", "@cloudflare/dns-mcp"], "env": { "CLOUDFLARE_API_TOKEN": "cf_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloudflare DNS MCP

Cloudflare DNS 管理 MCP，配置域名解析、DNS 记录和流量管理，全球高可用 DNS 服务。
