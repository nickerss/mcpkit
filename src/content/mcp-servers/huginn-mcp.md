---
title: "Huginn MCP"
name: huginn-mcp
category: mcp-servers
tags: [huginn, automation, agents, open-source, self-hosted]
price: free
website: https://huginn.github.io
logo: 
description: "Huginn 开源自动化代理平台 MCP，Ruby 自动化代理，AI Agent 开源代理。"
descriptionEn: "Huginn open-source automation agent platform MCP for Ruby automation agents for AI Agent open-source agents."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.6
certificationStatus: "pending"
installCommand: "npx @huginn/mcp-server"
envVars: ["HUGINN_URL"]
configExample: |
  {
    "mcpServers": { "huginn": { "command": "npx", "args": ["-y", "@huginn/mcp-server"], "env": { "HUGINN_URL": "http://localhost:3000" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Huginn MCP

Huginn 开源自动化代理平台 MCP，Ruby 自动化代理，AI Agent 开源代理。
