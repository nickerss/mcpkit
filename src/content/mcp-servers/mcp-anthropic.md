---
title: "Anthropic Claude MCP"
name: anthropic-mcp
category: mcp-servers
tags: [anthropic, claude, llm, ai, reasoning]
price: pay-as-you-go
website: https://anthropic.com
logo: 
descriptionEn: "Anthropic Claude API MCP for AI analysis and report synthesis in RAG workflows - top-tier reasoning and long-context for research."
description: "Anthropic Claude API MCP，用于 RAG 工作流中的 AI 分析和报告合成 - 一流推理能力和长上下文，适合深度研究。"
kit: ["rag-research", "browser-automation"]
kitRole: "AI analysis and report synthesis from gathered research data"
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.8
certificationStatus: "certified"
installCommand: "npx @anthropic/mcp-server-anthropic"
envVars: ["ANTHROPIC_API_KEY"]
configExample: |
  {
    "mcpServers": {
      "anthropic": {
        "command": "npx",
        "args": ["-y", "@anthropic/mcp-server-anthropic"],
        "env": { "ANTHROPIC_API_KEY": "sk-ant-xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Anthropic Claude MCP

Anthropic Claude API MCP for AI analysis and report synthesis in RAG workflows - top-tier reasoning and long-context for research.
