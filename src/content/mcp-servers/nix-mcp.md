---
title: "Nix MCP"
name: nix-mcp
category: mcp-servers
tags: [nix, package-manager, reproducible, declarative, development]
price: free
website: https://nixos.org
logo: 
description: "Nix 包管理平台 MCP，可重现声明式包管理，AI Agent 可重现开发环境。"
descriptionEn: "Nix package manager platform MCP for reproducible declarative package management for AI Agent reproducible development environments."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @nix/mcp-server"
envVars: []
configExample: |
  {
    "mcpServers": { "nix": { "command": "npx", "args": ["-y", "@nix/mcp-server"] } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Nix MCP

Nix 包管理平台 MCP，可重现声明式包管理，AI Agent 可重现开发环境。
