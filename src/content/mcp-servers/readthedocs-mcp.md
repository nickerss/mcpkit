---
title: "Read the Docs MCP"
name: readthedocs-mcp
category: mcp-servers
tags: [readthedocs, docs, documentation, sphinx, hosting]
price: free
website: https://readthedocs.org
logo: 
description: "Read the Docs 文档托管平台 MCP，Sphinx 文档托管，AI Agent 开源文档。"
descriptionEn: "Read the Docs documentation hosting platform MCP for Sphinx documentation hosting for AI Agent open-source documentation."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @readthedocs/mcp-server"
envVars: ["RTD_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "readthedocs": { "command": "npx", "args": ["-y", "@readthedocs/mcp-server"], "env": { "RTD_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Read the Docs MCP

Read the Docs 文档托管平台 MCP，Sphinx 文档托管，AI Agent 开源文档。
