---
title: "Hetzner MCP"
name: hetzner-mcp
category: mcp-servers
tags: [hetzner, cloud, vps, servers, infrastructure]
price: paid
website: https://hetzner.cloud
logo: 
description: "Hetzner 云服务器 MCP，提供高性价比的裸金属服务器和云服务器，适合大规模部署。"
descriptionEn: "Hetzner cloud server MCP offering cost-effective bare metal and cloud servers for large-scale deployments."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 4
  activity: 4
  scenarioFit: 3
  overall: 3.2
certificationStatus: "pending"
installCommand: "npx @hetzner/mcp-server"
envVars: ["HETZNER_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "hetzner": { "command": "npx", "args": ["-y", "@hetzner/mcp-server"], "env": { "HETZNER_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Hetzner MCP

Hetzner 云服务器 MCP，提供高性价比的裸金属服务器和云服务器，适合大规模部署。
