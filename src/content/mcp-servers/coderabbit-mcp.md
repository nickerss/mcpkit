---
title: "CodeRabbit MCP"
name: coderabbit-mcp
category: mcp-servers
tags: [coderabbit, code-review, ai, automation, quality]
price: freemium
website: https://coderabbit.ai
logo: 
description: "CodeRabbit AI 代码审查工具 MCP，自动化代码审查和质量分析，AI Agent 代码质量。"
descriptionEn: "CodeRabbit AI code review tool MCP for automated code review and quality analysis for AI Agent code quality."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @coderabbit/mcp-server"
envVars: ["CODERABBIT_API_KEY"]
configExample: |
  {
    "mcpServers": { "coderabbit": { "command": "npx", "args": ["-y", "@coderabbit/mcp-server"], "env": { "CODERABBIT_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# CodeRabbit MCP

CodeRabbit AI 代码审查工具 MCP，自动化代码审查和质量分析，AI Agent 代码质量。
