---
title: "Contentful MCP"
name: contentful-mcp
category: mcp-servers
tags: [contentful, cms, content, api, enterprise]
price: paid
website: https://contentful.com
logo: 
description: "Contentful 企业 CMS 平台 MCP，结构化内容和 API，AI Agent 企业内容管理。"
descriptionEn: "Contentful enterprise CMS platform MCP for structured content and API for AI Agent enterprise content management."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @contentful/mcp-server"
envVars: ["CONTENTFUL_SPACE_ID", "CONTENTFUL_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "contentful": { "command": "npx", "args": ["-y", "@contentful/mcp-server"], "env": { "CONTENTFUL_SPACE_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Contentful MCP

Contentful 企业 CMS 平台 MCP，结构化内容和 API，AI Agent 企业内容管理。
