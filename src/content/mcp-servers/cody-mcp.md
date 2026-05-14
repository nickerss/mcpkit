---
title: "Sourcegraph Cody MCP"
name: cody-mcp
category: mcp-servers
tags: [sourcegraph, cody, code-generation, chat, context]
price: free
website: https://sourcegraph.com/cody
logo: 
description: "Sourcegraph Cody AI 编程助手 MCP，代码上下文感知生成和解释，AI Agent 代码理解。"
descriptionEn: "Sourcegraph Cody AI coding assistant MCP with code context-aware generation and explanation for AI Agent code comprehension."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 5
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @sourcegraph/cody-mcp"
envVars: ["SRC_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "cody": { "command": "npx", "args": ["-y", "@sourcegraph/cody-mcp"], "env": { "SRC_ACCESS_TOKEN": "sgp_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Sourcegraph Cody MCP

Sourcegraph Cody AI 编程助手 MCP，代码上下文感知生成和解释，AI Agent 代码理解。
