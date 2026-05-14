---
title: "Predibase MCP"
name: predibase-mcp
category: mcp-servers
tags: [predibase, llm, fine-tuning, inference, low-rank]
price: paid
website: https://predibase.com
logo: 
description: "Predibase 低秩适配微调平台 MCP，LoRA 微调和推理，AI Agent 微调模型。"
descriptionEn: "Predibase low-rank adaptation fine-tuning platform MCP for LoRA fine-tuning and inference for AI Agent fine-tuned models."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @predibase/mcp-server"
envVars: ["PREDIBASE_API_KEY"]
configExample: |
  {
    "mcpServers": { "predibase": { "command": "npx", "args": ["-y", "@predibase/mcp-server"], "env": { "PREDIBASE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Predibase MCP

Predibase 低秩适配微调平台 MCP，LoRA 微调和推理，AI Agent 微调模型。
