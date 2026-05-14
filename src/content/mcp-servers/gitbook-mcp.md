---
title: "GitBook MCP"
name: gitbook-mcp
category: mcp-servers
tags: [gitbook, docs, documentation, collaboration, api]
price: freemium
website: https://gitbook.com
logo: 
description: "GitBook 协作文档平台 MCP，协作文档和知识库，AI Agent 协作文档。"
descriptionEn: "GitBook collaborative documentation platform MCP for collaborative docs and knowledge base for AI Agent collaborative documentation."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @gitbook/mcp-server"
envVars: ["GITBOOK_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "gitbook": { "command": "npx", "args": ["-y", "@gitbook/mcp-server"], "env": { "GITBOOK_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitBook MCP

GitBook 协作文档平台 MCP，协作文档和知识库，AI Agent 协作文档。
