---
title: "Fetch MCP"
name: fetch-mcp
category: mcp-servers
tags: [http, api, fetch, web, network]
price: free
website: https://github.com/modelcontextprotocol/servers
logo: 
descriptionEn: "HTTP request MCP for AI Agents to call REST APIs and fetch data from research sources - the universal API connector for RAG data pipelines."
description: "HTTP 请求 MCP，让 AI Agent 调用 REST API 并从数据源获取内容 - RAG 数据流水线的通用 API 连接器。"
kit: ["rag-research"]
kitRole: "API data fetching and webhook triggers for research data sources"
evaluation:
  easeOfUse: 5
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "reviewed"
installCommand: "npx @modelcontextprotocol/server-fetch"
envVars: []
configExample: |
  {
    "mcpServers": {
      "fetch": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-fetch"]
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Fetch MCP

HTTP request MCP for AI Agents to call REST APIs and fetch data from research sources - the universal API connector for RAG data pipelines.
