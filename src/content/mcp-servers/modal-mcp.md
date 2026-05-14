---
title: "Modal MCP"
name: modal-mcp
category: mcp-servers
tags: [modal, ai, inference, serverless, python]
price: pay-as-you-go
website: https://modal.com
logo: 
description: "Modal 快速 AI 模型部署平台 MCP，用 Python 几行代码即可部署可扩展的 AI 推理服务。"
descriptionEn: "Modal fast AI model deployment platform MCP — deploy scalable AI inference services with just a few lines of Python."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @modal/mcp-server"
envVars: ["MODAL_API_KEY"]
configExample: |
  {
    "mcpServers": { "modal": { "command": "npx", "args": ["-y", "@modal/mcp-server"], "env": { "MODAL_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Modal MCP

Modal 快速 AI 模型部署平台 MCP，用 Python 几行代码即可部署可扩展的 AI 推理服务。
