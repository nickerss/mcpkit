---
title: "Workday MCP"
name: workday-mcp
category: mcp-servers
tags: [workday, hr, enterprise, human-resources, planning]
price: paid
website: https://workday.com
logo: 
description: "Workday 企业 HR 和财务平台 MCP，企业级人力资源和规划，AI Agent 企业 HR。"
descriptionEn: "Workday enterprise HR and finance platform MCP for enterprise-grade HR and planning for AI Agent enterprise HR."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @workday/mcp-server"
envVars: ["WORKDAY_API_KEY"]
configExample: |
  {
    "mcpServers": { "workday": { "command": "npx", "args": ["-y", "@workday/mcp-server"], "env": { "WORKDAY_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Workday MCP

Workday 企业 HR 和财务平台 MCP，企业级人力资源和规划，AI Agent 企业 HR。
