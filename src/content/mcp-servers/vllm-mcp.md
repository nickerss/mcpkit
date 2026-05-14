---
title: "vLLM MCP"
name: vllm-mcp
category: mcp-servers
tags: [vllm, llm, inference, openai-compatible, fast]
price: free
website: https://docs.vllm.ai
logo: 
description: "vLLM 高性能 LLM 推理引擎 MCP，OpenAI 兼容 API，AI Agent 高吞吐量推理。"
descriptionEn: "vLLM high-performance LLM inference engine MCP with OpenAI-compatible API for AI Agent high-throughput inference."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 5
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @vllm/mcp-server"
envVars: ["VLLM_HOST"]
configExample: |
  {
    "mcpServers": { "vllm": { "command": "npx", "args": ["-y", "@vllm/mcp-server"], "env": { "VLLM_HOST": "http://localhost:8000" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# vLLM MCP

vLLM 高性能 LLM 推理引擎 MCP，OpenAI 兼容 API，AI Agent 高吞吐量推理。
