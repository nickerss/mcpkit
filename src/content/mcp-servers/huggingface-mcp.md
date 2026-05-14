---
title: "HuggingFace MCP"
name: huggingface-mcp
category: mcp-servers
tags: [huggingface, ai, llm, models, inference]
price: freemium
website: https://huggingface.co
logo: 
description: "HuggingFace Hub MCP，访问数万预训练模型和 Spaces，支持模型推理、微调和部署。"
descriptionEn: "HuggingFace Hub MCP for accessing thousands of pre-trained models and Spaces, supporting inference, fine-tuning and deployment."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.9
certificationStatus: "reviewed"
installCommand: "npx @huggingface/mcp-server"
envVars: ["HF_TOKEN"]
configExample: |
  {
    "mcpServers": { "huggingface": { "command": "npx", "args": ["-y", "@huggingface/mcp-server"], "env": { "HF_TOKEN": "hf_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# HuggingFace MCP

HuggingFace Hub MCP，访问数万预训练模型和 Spaces，支持模型推理、微调和部署。
