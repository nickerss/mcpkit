---
title: "Sentry MCP"
name: sentry-mcp
category: mcp-servers
tags: [sentry, error-tracking, monitoring, devops, alerts]
price: freemium
website: https://sentry.io
logo: 
description: "Sentry 错误追踪 MCP，查询错误事件、管理 Issues 和配置告警，生产环境监控必备。"
descriptionEn: "Sentry error tracking MCP querying error events, managing Issues and configuring alerts — essential for production monitoring."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "recommended"
installCommand: "npx @sentry/mcp-server"
envVars: ["SENTRY_AUTH_TOKEN", "SENTRY_ORGANIZATION", "SENTRY_PROJECT"]
configExample: |
  {
    "mcpServers": { "sentry": { "command": "npx", "args": ["-y", "@sentry/mcp-server"], "env": { "SENTRY_AUTH_TOKEN": "sntrys_xxx", "SENTRY_ORGANIZATION": "myorg", "SENTRY_PROJECT": "myproject" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Sentry MCP

Sentry 错误追踪 MCP，查询错误事件、管理 Issues 和配置告警，生产环境监控必备。
