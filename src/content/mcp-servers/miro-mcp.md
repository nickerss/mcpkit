---
title: "Miro MCP"
name: miro-mcp
category: mcp-servers
tags: [miro, whiteboard, collaboration, diagrams, visual]
price: freemium
website: https://miro.com
logo: 
description: "Miro 在线白板协作平台 MCP，创建和管理白板、图表和思维导图，AI Agent 可视化协作自动化。"
descriptionEn: "Miro online whiteboard collaboration platform MCP for creating and managing whiteboards, diagrams and mind maps for AI Agent visual collaboration automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @miro/mcp-server"
envVars: ["MIRO_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "miro": { "command": "npx", "args": ["-y", "@miro/mcp-server"], "env": { "MIRO_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Miro MCP

Miro 在线白板协作平台 MCP，创建和管理白板、图表和思维导图，AI Agent 可视化协作自动化。
