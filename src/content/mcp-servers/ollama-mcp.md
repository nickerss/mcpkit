---
title: "Ollama MCP"
name: ollama-mcp
category: mcp-servers
tags: [ollama, llm, local, inference, ai]
price: free
website: https://ollama.com
logo: 
description: "本地大模型运行平台 MCP，支持 Llama、Mistral、Qwen 等开源模型，无需联网即可在本地运行 AI 推理。"
descriptionEn: "Local LLM runtime MCP supporting llama, mistral, qwen and other open-source models for offline AI inference."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "reviewed"
installCommand: "npx @modelcontextprotocol/server-ollama"
envVars: ["OLLAMA_HOST"]
configExample: |
  {
    "mcpServers": {
      "ollama": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-ollama"],
        "env": { "OLLAMA_HOST": "http://localhost:11434" }
      }
    }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Ollama MCP

本地大模型运行平台 MCP，支持 Llama、Mistral、Qwen 等开源模型，无需联网即可在本地运行 AI 推理。
