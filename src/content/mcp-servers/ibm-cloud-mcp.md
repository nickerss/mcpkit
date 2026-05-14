---
title: "IBM Cloud MCP"
name: ibm-cloud-mcp
category: mcp-servers
tags: [ibm, cloud, watson, infrastructure, ai]
price: freemium
website: https://ibm.com/cloud
logo: 
description: "IBM Cloud 平台 MCP，Watson AI 服务和基础设施管理，AI Agent 认知计算集成。"
descriptionEn: "IBM Cloud platform MCP for Watson AI services and infrastructure management for AI Agent cognitive computing integration."
evaluation:
  easeOfUse: 2
  security: 5
  activity: 3
  scenarioFit: 4
  overall: 3.3
certificationStatus: "pending"
installCommand: "npx @ibm/mcp-server"
envVars: ["IBM_CLOUD_API_KEY"]
configExample: |
  {
    "mcpServers": { "ibm-cloud": { "command": "npx", "args": ["-y", "@ibm/mcp-server"], "env": { "IBM_CLOUD_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# IBM Cloud MCP

IBM Cloud 平台 MCP，Watson AI 服务和基础设施管理，AI Agent 认知计算集成。
