---
title: "Dnsimple MCP"
name: dnsimple-mcp
category: mcp-servers
tags: [dnsimple, dns, domains, registrar, api]
price: freemium
website: https://dnsimple.com
logo: 
description: "DNSimple 域名和 DNS 平台 MCP，域名注册和 DNS 管理，AI Agent 域名管理。"
descriptionEn: "DNSimple domain and DNS platform MCP for domain registration and DNS management for AI Agent domain management."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @dnsimple/mcp-server"
envVars: ["DNSIMPLE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "dnsimple": { "command": "npx", "args": ["-y", "@dnsimple/mcp-server"], "env": { "DNSIMPLE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Dnsimple MCP

DNSimple 域名和 DNS 平台 MCP，域名注册和 DNS 管理，AI Agent 域名管理。
