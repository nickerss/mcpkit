---
title: "Joplin MCP"
name: joplin-mcp
category: mcp-servers
tags: [joplin, notes, open-source, markdown, self-hosted]
price: free
website: https://joplinapp.org
logo: 
description: "Joplin 开源笔记平台 MCP，Markdown 笔记和待办事项，AI Agent 开源笔记。"
descriptionEn: "Joplin open-source notes platform MCP for Markdown notes and to-dos for AI Agent open-source notes."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @joplin/mcp-server"
envVars: ["JOPLIN_TOKEN"]
configExample: |
  {
    "mcpServers": { "joplin": { "command": "npx", "args": ["-y", "@joplin/mcp-server"], "env": { "JOPLIN_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Joplin MCP

Joplin 开源笔记平台 MCP，Markdown 笔记和待办事项，AI Agent 开源笔记。
