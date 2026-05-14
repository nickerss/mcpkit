---
title: "Socket MCP"
name: socket-mcp
category: mcp-servers
tags: [socket, npm, security, packages, analysis]
price: freemium
website: https://socket.dev
logo: 
description: "Socket NPM 安全分析 MCP，检测恶意 npm 包，AI Agent 供应链安全。"
descriptionEn: "Socket NPM security analysis MCP for detecting malicious npm packages for AI Agent supply chain security."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @socket/mcp-server"
envVars: ["SOCKET_API_KEY"]
configExample: |
  {
    "mcpServers": { "socket": { "command": "npx", "args": ["-y", "@socket/mcp-server"], "env": { "SOCKET_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Socket MCP

Socket NPM 安全分析 MCP，检测恶意 npm 包，AI Agent 供应链安全。
