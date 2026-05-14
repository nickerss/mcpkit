---
title: "Splunk HEC MCP"
name: splunk-hec-mcp
category: mcp-servers
tags: [splunk, hec, logging, siem, enterprise]
price: paid
website: https://splunk.com
logo: 
description: "Splunk HEC 日志平台 MCP，企业日志和 SIEM，AI Agent 企业日志。"
descriptionEn: "Splunk HEC log platform MCP for enterprise logging and SIEM for AI Agent enterprise logging."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @splunk/hec-mcp"
envVars: ["SPLUNK_HEC_URL", "SPLUNK_HEC_TOKEN"]
configExample: |
  {
    "mcpServers": { "splunk-hec": { "command": "npx", "args": ["-y", "@splunk/hec-mcp"], "env": { "SPLUNK_HEC_URL": "https://myserver.splunk.com:8088" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Splunk HEC MCP

Splunk HEC 日志平台 MCP，企业日志和 SIEM，AI Agent 企业日志。
