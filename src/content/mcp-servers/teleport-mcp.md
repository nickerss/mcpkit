---
title: "Teleport MCP"
name: teleport-mcp
category: mcp-servers
tags: [teleport, access, ssh, kubernetes, zero-trust]
price: free
website: https://goteleport.com
logo: 
description: "Teleport 零信任访问平台 MCP，SSH 和 Kubernetes 访问管理，AI Agent 安全访问。"
descriptionEn: "Teleport zero-trust access platform MCP for SSH and Kubernetes access management for AI Agent secure access."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @goteleport/mcp-server"
envVars: ["TELEPORT_PROXY"]
configExample: |
  {
    "mcpServers": { "teleport": { "command": "npx", "args": ["-y", "@goteleport/mcp-server"], "env": { "TELEPORT_PROXY": "teleport.example.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Teleport MCP

Teleport 零信任访问平台 MCP，SSH 和 Kubernetes 访问管理，AI Agent 安全访问。
