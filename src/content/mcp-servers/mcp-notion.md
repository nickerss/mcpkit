---
title: "Notion MCP"
name: notion-mcp
category: mcp-servers
tags: [notion, notes, knowledge-base, documentation]
price: freemium
website: https://github.com/modelcontextprotocol/servers
logo: 
descriptionEn: "Notion API MCP for reading/writing pages, managing databases, and searching knowledge bases - AI coding Agent documentation partner."
description: "Notion API MCP，读写页面、管理数据库、搜索知识库 - AI 编程 Agent 的文档协作伙伴。"
kit: ["ai-coding-agent", "rag-research"]
kitRole: "Technical documentation and knowledge base management for AI coding"
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @modelcontextprotocol/server-notion"
envVars: ["NOTION_API_KEY"]
configExample: |
  {
    "mcpServers": {
      "notion": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-notion"],
        "env": { "NOTION_API_KEY": "secret_xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Notion MCP

Notion API MCP for reading/writing pages, managing databases, and searching knowledge bases - AI coding Agent documentation partner.
