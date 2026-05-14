---
title: "Postman MCP"
name: postman-mcp
category: mcp-servers
tags: [postman, api, testing, collection, http]
price: freemium
website: https://postman.com
logo: 
description: "Postman API 测试平台 MCP，运行 API 测试、发送请求和管理 Collections，AI Agent 可自动化 API 质量保证。"
descriptionEn: "Postman API testing platform MCP for running API tests, sending requests and managing Collections for AI Agent API quality assurance."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @postman/mcp-server"
envVars: ["POSTMAN_API_KEY"]
configExample: |
  {
    "mcpServers": { "postman": { "command": "npx", "args": ["-y", "@postman/mcp-server"], "env": { "POSTMAN_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Postman MCP

Postman API 测试平台 MCP，运行 API 测试、发送请求和管理 Collections，AI Agent 可自动化 API 质量保证。
