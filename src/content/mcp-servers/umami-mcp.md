---
title: "Umami MCP"
name: umami-mcp
category: mcp-servers
tags: [umami, analytics, simple, privacy, self-hosted]
price: free
website: https://umami.is
logo: 
description: "Umami 简单隐私分析平台 MCP，轻量自托管分析，AI Agent 轻量分析。"
descriptionEn: "Umami simple privacy analytics platform MCP as lightweight self-hosted analytics for AI Agent lightweight analytics."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @umami/mcp-server"
envVars: ["UMAMI_API_KEY", "UMAMI_HOST"]
configExample: |
  {
    "mcpServers": { "umami": { "command": "npx", "args": ["-y", "@umami/mcp-server"], "env": { "UMAMI_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Umami MCP

Umami 简单隐私分析平台 MCP，轻量自托管分析，AI Agent 轻量分析。
