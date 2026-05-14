---
title: "Notion MCP"
name: notion-mcp
category: mcp-servers
tags: [notion, wiki, docs, database, productivity]
price: freemium
website: https://notion.so
logo: 
description: "Notion 知识管理和文档平台 MCP，笔记、数据库和团队知识库，AI Agent 知识管理。"
descriptionEn: "Notion knowledge management and documentation platform MCP for notes, databases and team knowledge bases for AI Agent knowledge management."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.7
certificationStatus: "certified"
installCommand: "npx @notion/mcp-server"
envVars: ["NOTION_API_KEY"]
configExample: |
  {
    "mcpServers": { "notion": { "command": "npx", "args": ["-y", "@notion/mcp-server"], "env": { "NOTION_API_KEY": "secret_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Notion MCP

Notion 知识管理和文档平台 MCP，笔记、数据库和团队知识库，AI Agent 知识管理。
