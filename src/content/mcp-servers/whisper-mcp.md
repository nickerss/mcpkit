---
title: "Whisper MCP"
name: whisper-mcp
category: mcp-servers
tags: [whisper, openai, speech, transcription, audio]
price: pay-as-you-go
website: https://platform.openai.com/docs/api-reference/audio
logo: 
description: "OpenAI Whisper 语音转文字 MCP，高精度多语言语音识别，支持音频文件转录。"
descriptionEn: "OpenAI Whisper speech-to-text MCP with high-precision multilingual speech recognition supporting audio file transcription."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.5
certificationStatus: "recommended"
installCommand: "npx @openai/whisper-mcp"
envVars: ["OPENAI_API_KEY"]
configExample: |
  {
    "mcpServers": { "whisper": { "command": "npx", "args": ["-y", "@openai/whisper-mcp"], "env": { "OPENAI_API_KEY": "sk-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Whisper MCP

OpenAI Whisper 语音转文字 MCP，高精度多语言语音识别，支持音频文件转录。
