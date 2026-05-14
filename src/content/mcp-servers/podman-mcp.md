---
title: "Podman MCP"
name: podman-mcp
category: mcp-servers
tags: [podman, container, docker, rootless, infrastructure]
price: free
website: https://podman.io
logo: 
description: "Podman 无根容器引擎 MCP，Docker 替代品，无需守护进程运行容器，更安全。"
descriptionEn: "Podman rootless container engine MCP — Docker alternative running containers without a daemon for better security."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @podman/mcp-server"
envVars: []
configExample: |
  {
    "mcpServers": { "podman": { "command": "npx", "args": ["-y", "@podman/mcp-server"] } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Podman MCP

Podman 无根容器引擎 MCP，Docker 替代品，无需守护进程运行容器，更安全。
