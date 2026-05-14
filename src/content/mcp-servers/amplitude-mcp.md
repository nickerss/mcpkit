---
title: "Amplitude MCP"
name: amplitude-mcp
category: mcp-servers
tags: [amplitude, analytics, product-analytics, events, cohorts]
price: freemium
website: https://amplitude.com
logo: 
description: "Amplitude 产品分析 MCP，用户行为分析、保留率分析和 A/B 测试，适合数据驱动的产品优化。"
descriptionEn: "Amplitude product analytics MCP for user behavior analysis, retention analysis and A/B testing for data-driven product optimization."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "reviewed"
installCommand: "npx @amplitude/mcp-server"
envVars: ["AMPLITUDE_API_KEY", "AMPLITUDE_SECRET_KEY"]
configExample: |
  {
    "mcpServers": { "amplitude": { "command": "npx", "args": ["-y", "@amplitude/mcp-server"], "env": { "AMPLITUDE_API_KEY": "xxx", "AMPLITUDE_SECRET_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Amplitude MCP

Amplitude 产品分析 MCP，用户行为分析、保留率分析和 A/B 测试，适合数据驱动的产品优化。
