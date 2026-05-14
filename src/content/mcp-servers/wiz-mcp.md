---
title: "Wiz MCP"
name: wiz-mcp
category: mcp-servers
tags: [wiz, security, cloud-security, cspm, vulnerabilities]
price: paid
website: https://wiz.io
logo: 
description: "Wiz 云安全态势管理（CSPM）MCP，检测云环境和基础设施中的安全风险和配置错误。"
descriptionEn: "Wiz Cloud Security Posture Management (CSPM) MCP detecting security risks and misconfigurations in cloud environments and infrastructure."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @wiz/mcp-server"
envVars: ["WIZ_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "wiz": { "command": "npx", "args": ["-y", "@wiz/mcp-server"], "env": { "WIZ_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Wiz MCP

Wiz 云安全态势管理（CSPM）MCP，检测云环境和基础设施中的安全风险和配置错误。
