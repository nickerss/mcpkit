---
title: "Splunk MCP"
name: splunk-mcp
category: mcp-servers
tags: [splunk, logs, observability, siem, enterprise]
price: paid
website: https://splunk.com
logo: 
description: "Splunk 企业可观测性平台 MCP，搜索日志和监控数据，企业安全信息与事件管理（SIEM）。"
descriptionEn: "Splunk enterprise observability platform MCP searching logs and monitoring data for enterprise Security Information and Event Management (SIEM)."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @splunk/mcp-server"
envVars: ["SPLUNK_URL", "SPLUNK_TOKEN"]
configExample: |
  {
    "mcpServers": { "splunk": { "command": "npx", "args": ["-y", "@splunk/mcp-server"], "env": { "SPLUNK_URL": "https://localhost:8089", "SPLUNK_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Splunk MCP

Splunk 企业可观测性平台 MCP，搜索日志和监控数据，企业安全信息与事件管理（SIEM）。
