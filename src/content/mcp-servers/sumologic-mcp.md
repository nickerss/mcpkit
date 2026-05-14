---
title: "Sumo Logic MCP"
name: sumologic-mcp
category: mcp-servers
tags: [sumologic, logs, siem, observability, enterprise]
price: paid
website: https://sumologic.com
logo: 
description: "Sumo Logic 云端日志和 SIEM 平台 MCP，企业级日志分析和安全信息管理。"
descriptionEn: "Sumo Logic cloud log and SIEM platform MCP for enterprise-grade log analysis and security information management."
evaluation:
  easeOfUse: 2
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.6
certificationStatus: "pending"
installCommand: "npx @sumologic/mcp-server"
envVars: ["SUMO_LOGIC_ENDPOINT", "SUMO_LOGIC_ACCESS_ID"]
configExample: |
  {
    "mcpServers": { "sumologic": { "command": "npx", "args": ["-y", "@sumologic/mcp-server"], "env": { "SUMO_LOGIC_ENDPOINT": "https://endpoint.xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Sumo Logic MCP

Sumo Logic 云端日志和 SIEM 平台 MCP，企业级日志分析和安全信息管理。
