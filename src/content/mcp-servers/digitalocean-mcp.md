---
title: "DigitalOcean MCP"
name: digitalocean-mcp
category: mcp-servers
tags: [digitalocean, cloud, droplets, infrastructure, vps]
price: pay-as-you-go
website: https://digitalocean.com
logo: 
description: "DigitalOcean 云平台 MCP，管理 Droplets、Docker、Kubernetes 和 Spaces 对象存储。"
descriptionEn: "DigitalOcean cloud platform MCP managing Droplets, Docker, Kubernetes and Spaces object storage."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "reviewed"
installCommand: "npx @digitalocean/mcp-server"
envVars: ["DO_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "digitalocean": { "command": "npx", "args": ["-y", "@digitalocean/mcp-server"], "env": { "DO_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# DigitalOcean MCP

DigitalOcean 云平台 MCP，管理 Droplets、Docker、Kubernetes 和 Spaces 对象存储。
