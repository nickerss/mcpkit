---
title: "PostHog MCP"
name: posthog-mcp
category: mcp-servers
tags: [posthog, analytics, product-analytics, session-replay, feature-flags]
price: freemium
website: https://posthog.com
logo: 
description: "PostHog 产品分析平台 MCP，事件分析、会话录制和特性开关，AI Agent 产品洞察。"
descriptionEn: "PostHog product analytics platform MCP with event analysis, session replay and feature flags for AI Agent product insights."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @posthog/mcp-server"
envVars: ["POSTHOG_API_KEY"]
configExample: |
  {
    "mcpServers": { "posthog": { "command": "npx", "args": ["-y", "@posthog/mcp-server"], "env": { "POSTHOG_API_KEY": "phc_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# PostHog MCP

PostHog 产品分析平台 MCP，事件分析、会话录制和特性开关，AI Agent 产品洞察。
