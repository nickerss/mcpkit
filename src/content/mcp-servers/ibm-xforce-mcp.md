---
title: "IBM X-Force MCP"
name: ibm-xforce-mcp
category: mcp-servers
tags: [ibm, xforce, threat-intelligence, security, watson]
price: paid
website: https://exchange.xforce.ibmcloud.com
logo: 
description: "IBM X-Force 威胁情报平台 MCP，企业威胁情报和风险评估，AI Agent 企业安全情报。"
descriptionEn: "IBM X-Force threat intelligence platform MCP for enterprise threat intelligence and risk assessment for AI Agent enterprise security intelligence."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @ibm/xforce-mcp"
envVars: ["IBM_XFORCE_API_KEY"]
configExample: |
  {
    "mcpServers": { "ibm-xforce": { "command": "npx", "args": ["-y", "@ibm/xforce-mcp"], "env": { "IBM_XFORCE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# IBM X-Force MCP

IBM X-Force 威胁情报平台 MCP，企业威胁情报和风险评估，AI Agent 企业安全情报。
