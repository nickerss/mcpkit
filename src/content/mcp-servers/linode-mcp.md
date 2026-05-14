---
title: "Linode MCP"
name: linode-mcp
category: mcp-servers
tags: [linode, cloud, akamai, vps, compute]
price: pay-as-you-go
website: https://linode.com
logo: 
description: "Akamai Linode 云平台 MCP，VPS、 Kubernetes 和数据库管理，AI Agent 云端部署自动化。"
descriptionEn: "Akamai Linode cloud platform MCP for VPS, Kubernetes and database management for AI Agent cloud deployment automation."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @linode/mcp-server"
envVars: ["LINODE_API_KEY"]
configExample: |
  {
    "mcpServers": { "linode": { "command": "npx", "args": ["-y", "@linode/mcp-server"], "env": { "LINODE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Linode MCP

Akamai Linode 云平台 MCP，VPS、 Kubernetes 和数据库管理，AI Agent 云端部署自动化。
