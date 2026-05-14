---
title: "Lark Suite MCP"
name: lark-suite-mcp
category: mcp-servers
tags: [lark, feishu, bytedance, productivity, collaboration]
price: freemium
website: https://larksuite.com
logo: 
description: "飞书/Lark Suite MCP，字节跳动企业协作平台，AI Agent 企业协作集成。"
descriptionEn: "Lark Suite (Feishu) MCP for ByteDance enterprise collaboration platform for AI Agent enterprise collaboration integration."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @lark-suite/mcp-server"
envVars: ["LARK_APP_ID", "LARK_APP_SECRET"]
configExample: |
  {
    "mcpServers": { "lark-suite": { "command": "npx", "args": ["-y", "@lark-suite/mcp-server"], "env": { "LARK_APP_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Lark Suite MCP

飞书/Lark Suite MCP，字节跳动企业协作平台，AI Agent 企业协作集成。
