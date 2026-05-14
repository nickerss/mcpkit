---
title: "HuggingFace Inference MCP"
name: huggingface-inference-mcp
category: mcp-servers
tags: [huggingface, inference, api, models, ai]
price: freemium
website: https://huggingface.co/inference-api
logo: 
description: "HuggingFace Inference API MCP，通过简单 API 调用数千个托管模型，无需本地 GPU。"
descriptionEn: "HuggingFace Inference API MCP calling thousands of hosted models via simple API without local GPU requirements."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "recommended"
installCommand: "npx @huggingface/inference-mcp"
envVars: ["HF_TOKEN"]
configExample: |
  {
    "mcpServers": { "hf-inference": { "command": "npx", "args": ["-y", "@huggingface/inference-mcp"], "env": { "HF_TOKEN": "hf_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# HuggingFace Inference MCP

HuggingFace Inference API MCP，通过简单 API 调用数千个托管模型，无需本地 GPU。
