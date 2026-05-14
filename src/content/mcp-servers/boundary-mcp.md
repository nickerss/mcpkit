---
title: "Boundary MCP"
name: boundary-mcp
category: mcp-servers
tags: [boundary, access, security, hashicorp, zero-trust]
price: free
website: https://boundaryproject.io
logo: 
description: "HashiCorp Boundary 零信任访问平台 MCP，安全远程访问，AI Agent 安全访问。"
descriptionEn: "HashiCorp Boundary zero-trust access platform MCP for secure remote access for AI Agent secure access."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @hashicorp/boundary-mcp"
envVars: ["BOUNDARY_ADDR"]
configExample: |
  {
    "mcpServers": { "boundary": { "command": "npx", "args": ["-y", "@hashicorp/boundary-mcp"], "env": { "BOUNDARY_ADDR": "http://localhost:9200" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Boundary MCP

HashiCorp Boundary 零信任访问平台 MCP，安全远程访问，AI Agent 安全访问。
