---
title: "Lightstep MCP"
name: lightstep-mcp
category: mcp-servers
tags: [lightstep, observability, tracing, microservices, correlation]
price: paid
website: https://lightstep.com
logo: 
description: "Lightstep 微服务可观测性平台 MCP，链路追踪和关联分析，AI Agent 微服务诊断。"
descriptionEn: "Lightstep microservices observability platform MCP for trace tracking and correlation analysis for AI Agent microservice diagnostics."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @lightstep/mcp-server"
envVars: ["LIGHTSTEP_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "lightstep": { "command": "npx", "args": ["-y", "@lightstep/mcp-server"], "env": { "LIGHTSTEP_ACCESS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Lightstep MCP

Lightstep 微服务可观测性平台 MCP，链路追踪和关联分析，AI Agent 微服务诊断。
