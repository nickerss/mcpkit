---
title: "Brave Search MCP"
name: brave-search-mcp
category: mcp-servers
tags: [brave, search, web, privacy, research]
price: freemium
website: https://github.com/mcp-community/brave-search-mcp
logo: 
descriptionEn: "Brave Search API MCP providing privacy-first web search for AI research Agents - no tracking, clean results for knowledge gathering."
description: "Brave Search API MCP，提供隐私优先的网页搜索服务 - 无追踪，干净结果，为 AI 研究 Agent 收集知识。"
kit: ["rag-research", "browser-automation"]
kitRole: "Multi-source web search for research data collection"
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 5
  overall: 4.5
certificationStatus: "recommended"
installCommand: "npx @modelcontextprotocol/server-brave-search"
envVars: ["BRAVE_API_KEY"]
configExample: |
  {
    "mcpServers": {
      "brave-search": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-brave-search"],
        "env": { "BRAVE_API_KEY": "BSA.xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Brave Search MCP

Brave Search API MCP providing privacy-first web search for AI research Agents - no tracking, clean results for knowledge gathering.
