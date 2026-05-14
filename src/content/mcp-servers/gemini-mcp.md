---
title: "Gemini MCP"
name: gemini-mcp
category: mcp-servers
tags: [google, gemini, ai, multimodal, long-context]
price: pay-as-you-go
website: https://ai.google.dev
logo: 
description: "Google Gemini API MCP，支持 100 万 token 超长上下文和多模态理解（图片、视频、音频），适合复杂长文档处理。"
descriptionEn: "Google Gemini API MCP with 1M token long context and multimodal understanding (images, video, audio) for complex long document processing."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.6
certificationStatus: "certified"
installCommand: "npx @google/mcp-server-gemini"
envVars: ["GOOGLE_API_KEY"]
configExample: |
  {
    "mcpServers": { "gemini": { "command": "npx", "args": ["-y", "@google/mcp-server-gemini"], "env": { "GOOGLE_API_KEY": "AIza.xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Gemini MCP

Google Gemini API MCP，支持 100 万 token 超长上下文和多模态理解（图片、视频、音频），适合复杂长文档处理。
