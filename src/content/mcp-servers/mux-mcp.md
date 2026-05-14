---
title: "Mux MCP"
name: mux-mcp
category: mcp-servers
tags: [mux, video, streaming, api, platform]
price: paid
website: https://mux.com
logo: 
description: "Mux 视频流平台 MCP，视频托管和流媒体 API，AI Agent 视频基础设施。"
descriptionEn: "Mux video streaming platform MCP for video hosting and streaming API for AI Agent video infrastructure."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @mux/mcp-server"
envVars: ["MUX_TOKEN_ID", "MUX_TOKEN_SECRET"]
configExample: |
  {
    "mcpServers": { "mux": { "command": "npx", "args": ["-y", "@mux/mcp-server"], "env": { "MUX_TOKEN_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Mux MCP

Mux 视频流平台 MCP，视频托管和流媒体 API，AI Agent 视频基础设施。
