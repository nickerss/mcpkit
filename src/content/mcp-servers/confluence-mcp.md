---
title: "Confluence MCP"
name: confluence-mcp
category: mcp-servers
tags: [confluence, atlassian, wiki, documentation, knowledge]
price: freemium
website: https://confluence.atlassian.com
logo: 
description: "Atlassian Confluence MCP，读写页面、博客和管理空间，AI Agent 可自动生成和维护项目文档。"
descriptionEn: "Atlassian Confluence MCP for reading/writing pages, blogs and managing spaces — AI Agents can auto-generate and maintain project docs."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.8
certificationStatus: "recommended"
installCommand: "npx @confluence/mcp-server"
envVars: ["CONFLUENCE_URL", "CONFLUENCE_EMAIL", "CONFLUENCE_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "confluence": { "command": "npx", "args": ["-y", "@confluence/mcp-server"], "env": { "CONFLUENCE_URL": "https://xxx.atlassian.net", "CONFLUENCE_EMAIL": "me@company.com", "CONFLUENCE_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Confluence MCP

Atlassian Confluence MCP，读写页面、博客和管理空间，AI Agent 可自动生成和维护项目文档。
