---
title: "Rollbar MCP"
name: rollbar-mcp
category: mcp-servers
tags: [rollbar, error-tracking, debugging, monitoring, stack]
price: freemium
website: https://rollbar.com
logo: 
description: "Rollbar 错误追踪平台 MCP，实时错误收集和根源分析，AI Agent 生产问题诊断。"
descriptionEn: "Rollbar error tracking platform MCP for real-time error collection and root cause analysis for AI Agent production issue diagnosis."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @rollbar/mcp-server"
envVars: ["ROLLBAR_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "rollbar": { "command": "npx", "args": ["-y", "@rollbar/mcp-server"], "env": { "ROLLBAR_ACCESS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Rollbar MCP

Rollbar 错误追踪平台 MCP，实时错误收集和根源分析，AI Agent 生产问题诊断。
