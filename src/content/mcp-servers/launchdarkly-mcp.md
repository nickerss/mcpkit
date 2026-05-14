---
title: "LaunchDarkly MCP"
name: launchdarkly-mcp
category: mcp-servers
tags: [launchdarkly, feature-flags, decisions, a-b-testing, rollouts]
price: paid
website: https://launchdarkly.com
logo: 
description: "LaunchDarkly 特性开关管理 MCP，控制特性开关、A/B 测试和渐进式发布，AI Agent 实验自动化。"
descriptionEn: "LaunchDarkly feature flag management MCP controlling feature flags, A/B tests and progressive rollouts for AI Agent experimentation automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @launchdarkly/mcp-server"
envVars: ["LD_SDK_TOKEN"]
configExample: |
  {
    "mcpServers": { "launchdarkly": { "command": "npx", "args": ["-y", "@launchdarkly/mcp-server"], "env": { "LD_SDK_TOKEN": "sdk-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# LaunchDarkly MCP

LaunchDarkly 特性开关管理 MCP，控制特性开关、A/B 测试和渐进式发布，AI Agent 实验自动化。
