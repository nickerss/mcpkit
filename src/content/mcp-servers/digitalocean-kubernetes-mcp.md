---
title: "DigitalOcean Kubernetes MCP"
name: digitalocean-kubernetes-mcp
category: mcp-servers
tags: [digitalocean, kubernetes, containers, doks, orchestration]
price: pay-as-you-go
website: https://www.digitalocean.com/products/kubernetes
logo: 
description: "DigitalOcean Kubernetes 平台 MCP，简单 Kubernetes 集群，AI Agent DO Kubernetes。"
descriptionEn: "DigitalOcean Kubernetes platform MCP for simple Kubernetes clusters for AI Agent DO Kubernetes."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @digitalocean/kubernetes-mcp"
envVars: ["DIGITALOCEAN_TOKEN"]
configExample: |
  {
    "mcpServers": { "digitalocean-kubernetes": { "command": "npx", "args": ["-y", "@digitalocean/kubernetes-mcp"], "env": { "DIGITALOCEAN_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# DigitalOcean Kubernetes MCP

DigitalOcean Kubernetes 平台 MCP，简单 Kubernetes 集群，AI Agent DO Kubernetes。
