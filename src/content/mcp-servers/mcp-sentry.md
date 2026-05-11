---
title: "Sentry MCP"
name: sentry-mcp
category: mcp-servers
tags: [sentry, error-tracking, monitoring, devops]
price: freemium
website: https://sentry.io
logo: 
descriptionEn: "Sentry error tracking API MCP for querying error events, managing Issues, and configuring Alerts - critical for SaaS production monitoring."
description: "Sentry 错误追踪 API MCP，查询错误事件、管理 Issues、配置告警 - SaaS 生产环境监控关键组件。"
kit: ["ship-a-saas", "devops-monitoring"]
kitRole: "Production error tracking and alerting for SaaS reliability"
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
    "mcpServers": {
      "sentry": {
        "command": "npx",
        "args": ["-y", "@sentry/mcp-server"],
        "env": {
          "SENTRY_AUTH_TOKEN": "sntrys_xxx",
          "SENTRY_ORGANIZATION": "myorg",
          "SENTRY_PROJECT": "myproject"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Sentry MCP

Sentry error tracking API MCP for querying error events, managing Issues, and configuring Alerts - critical for SaaS production monitoring.
