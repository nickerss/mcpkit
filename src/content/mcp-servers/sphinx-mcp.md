---
title: "Sphinx MCP"
name: sphinx-mcp
category: mcp-servers
tags: [sphinx, search, full-text, python, documentation]
price: free
website: https://sphinx-search.org
logo: 
description: "Sphinx 全文搜索引擎 MCP，高性能全文搜索，AI Agent 全文搜索。"
descriptionEn: "Sphinx full-text search engine MCP for high-performance full-text search for AI Agent full-text search."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.6
certificationStatus: "pending"
installCommand: "npx @sphinx/mcp-server"
envVars: ["SPHINX_HOST"]
configExample: |
  {
    "mcpServers": { "sphinx": { "command": "npx", "args": ["-y", "@sphinx/mcp-server"], "env": { "SPHINX_HOST": "localhost" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Sphinx MCP

Sphinx 全文搜索引擎 MCP，高性能全文搜索，AI Agent 全文搜索。
