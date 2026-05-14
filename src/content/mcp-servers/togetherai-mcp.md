---
title: "Together AI MCP"
name: togetherai-mcp
category: mcp-servers
tags: [together, llm, ai, inference, open]
price: pay-as-you-go
website: https://together.xyz
logo: 
description: "Together AI 去中心化推理平台 MCP，支持开源大模型集合，提供高性价比推理服务。"
descriptionEn: "Together AI decentralized inference platform MCP supporting a collection of open-source LLMs with cost-effective inference."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @together/mcp-server"
envVars: ["TOGETHER_API_KEY"]
configExample: |
  {
    "mcpServers": { "together": { "command": "npx", "args": ["-y", "@together/mcp-server"], "env": { "TOGETHER_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Together AI MCP

Together AI 去中心化推理平台 MCP，支持开源大模型集合，提供高性价比推理服务。
