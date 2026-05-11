---
title: "Fetch MCP"
name: fetch-mcp
category: mcp-servers
tags: [http, api, fetch, web, network]
price: free
website: https://github.com/modelcontextprotocol/servers
logo: 
description: HTTP request MCP for AI Agents to call REST APIs and fetch data from research sources - the universal API connector for RAG data pipelines.
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
