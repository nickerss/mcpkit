---
title: "Pinot MCP"
name: pinot-mcp
category: mcp-servers
tags: [pinot, olap, analytics, real-time, linkedin]
price: free
website: https://pinot.apache.org
logo: 
description: "LinkedIn Pinot OLAP 分析平台 MCP，实时分析解决方案，AI Agent LinkedIn 分析。"
descriptionEn: "LinkedIn Pinot OLAP analytics platform MCP for real-time analytics solutions for AI Agent LinkedIn analytics."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @pinot/mcp-server"
envVars: ["PINOT_BROKER_URL"]
configExample: |
  {
    "mcpServers": { "pinot": { "command": "npx", "args": ["-y", "@pinot/mcp-server"], "env": { "PINOT_BROKER_URL": "http://localhost:8099" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Pinot MCP

LinkedIn Pinot OLAP 分析平台 MCP，实时分析解决方案，AI Agent LinkedIn 分析。
