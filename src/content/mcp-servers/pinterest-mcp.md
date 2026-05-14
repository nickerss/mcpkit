---
title: "Pinterest MCP"
name: pinterest-mcp
category: mcp-servers
tags: [pinterest, social, visual, discovery, api]
price: freemium
website: https://developers.pinterest.com
logo: 
description: "Pinterest 发现平台 MCP，视觉发现和内容管理，AI Agent 视觉内容管理。"
descriptionEn: "Pinterest discovery platform MCP for visual discovery and content management for AI Agent visual content management."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @pinterest/mcp-server"
envVars: ["PINTEREST_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "pinterest": { "command": "npx", "args": ["-y", "@pinterest/mcp-server"], "env": { "PINTEREST_ACCESS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Pinterest MCP

Pinterest 发现平台 MCP，视觉发现和内容管理，AI Agent 视觉内容管理。
