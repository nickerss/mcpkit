---
title: "Flagsmith MCP"
name: flagsmith-mcp
category: mcp-servers
tags: [flagsmith, feature-flags, open-source, a-b-testing]
price: freemium
website: https://flagsmith.com
logo: 
description: "Flagsmith 开源特性开关平台 MCP，自托管选项，支持特性开关、用户Traits和 A/B 测试。"
descriptionEn: "Flagsmith open-source feature flag platform MCP with self-hosting option supporting feature flags, user traits and A/B testing."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @flagsmith/mcp-server"
envVars: ["FLAGSMITH_API_KEY"]
configExample: |
  {
    "mcpServers": { "flagsmith": { "command": "npx", "args": ["-y", "@flagsmith/mcp-server"], "env": { "FLAGSMITH_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Flagsmith MCP

Flagsmith 开源特性开关平台 MCP，自托管选项，支持特性开关、用户Traits和 A/B 测试。
