---
title: "Apache Druid MCP"
name: apache-druid-mcp
category: mcp-servers
tags: [druid, olap, analytics, real-time, columnar]
price: free
website: https://druid.apache.org
logo: 
description: "Apache Druid 实时分析数据库平台 MCP，实时 OLAP 分析，AI Agent 实时分析。"
descriptionEn: "Apache Druid real-time analytics database platform MCP for real-time OLAP analytics for AI Agent real-time analytics."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @apache/druid-mcp"
envVars: ["DRUID_ROUTER_URL"]
configExample: |
  {
    "mcpServers": { "druid": { "command": "npx", "args": ["-y", "@apache/druid-mcp"], "env": { "DRUID_ROUTER_URL": "http://localhost:8888" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Apache Druid MCP

Apache Druid 实时分析数据库平台 MCP，实时 OLAP 分析，AI Agent 实时分析。
