---
title: "Readwise MCP"
name: readwise-mcp
category: mcp-servers
tags: [readwise, highlights, notes, reading, knowledge]
price: freemium
website: https://readwise.io
logo: 
description: "Readwise 阅读高亮管理 MCP，聚合电子书/文章高亮，间隔重复记忆，AI Agent 知识管理。"
descriptionEn: "Readwise reading highlights management MCP aggregating ebook/article highlights with spaced repetition for AI Agent knowledge management."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @readwise/mcp-server"
envVars: ["READWISE_API_KEY"]
configExample: |
  {
    "mcpServers": { "readwise": { "command": "npx", "args": ["-y", "@readwise/mcp-server"], "env": { "READWISE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Readwise MCP

Readwise 阅读高亮管理 MCP，聚合电子书/文章高亮，间隔重复记忆，AI Agent 知识管理。
