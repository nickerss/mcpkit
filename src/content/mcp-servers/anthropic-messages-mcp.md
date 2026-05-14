---
title: "Anthropic Messages MCP"
name: anthropic-messages-mcp
category: mcp-servers
tags: [anthropic, claude, messages, ai, reasoning]
price: pay-as-you-go
website: https://anthropic.com
logo: 
description: "Anthropic Messages API MCP，提供带系统提示和工具调用的多轮对话管理，适合构建复杂 Agent 工作流。"
descriptionEn: "Anthropic Messages API MCP with multi-turn conversation management via system prompts and tool calls for complex Agent workflows."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.7
certificationStatus: "certified"
installCommand: "npx @anthropic/mcp-server-messages"
envVars: ["ANTHROPIC_API_KEY"]
configExample: |
  {
    "mcpServers": { "anthropic": { "command": "npx", "args": ["-y", "@anthropic/mcp-server-messages"], "env": { "ANTHROPIC_API_KEY": "sk-ant-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Anthropic Messages MCP

Anthropic Messages API MCP，提供带系统提示和工具调用的多轮对话管理，适合构建复杂 Agent 工作流。
