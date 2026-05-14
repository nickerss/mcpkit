---
title: "Hotjar MCP"
name: hotjar-mcp
category: mcp-servers
tags: [hotjar, analytics, heatmaps, recordings, ux]
price: freemium
website: https://hotjar.com
logo: 
description: "Hotjar 用户体验分析平台 MCP，热力图和会话录制，AI Agent UX 优化。"
descriptionEn: "Hotjar user experience analytics platform MCP with heatmaps and session recordings for AI Agent UX optimization."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @hotjar/mcp-server"
envVars: ["HOTJAR_SITE_ID"]
configExample: |
  {
    "mcpServers": { "hotjar": { "command": "npx", "args": ["-y", "@hotjar/mcp-server"], "env": { "HOTJAR_SITE_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Hotjar MCP

Hotjar 用户体验分析平台 MCP，热力图和会话录制，AI Agent UX 优化。
