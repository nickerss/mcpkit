---
title: "Plane MCP"
name: plane-mcp
category: mcp-servers
tags: [plane, project-management, open-source, self-hosted, issues]
price: free
website: https://plane.so
logo: 
description: "Plane 开源项目管理平台 MCP，Jira 替代品，支持 Issue、 Cycles 和 Pages，自托管选项。"
descriptionEn: "Plane open-source project management platform MCP — Jira alternative supporting Issues, Cycles and Pages with self-hosting option."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @plane/mcp-server"
envVars: ["PLANE_URL", "PLANE_API_KEY"]
configExample: |
  {
    "mcpServers": { "plane": { "command": "npx", "args": ["-y", "@plane/mcp-server"], "env": { "PLANE_URL": "https://plane.mycompany.com", "PLANE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Plane MCP

Plane 开源项目管理平台 MCP，Jira 替代品，支持 Issue、 Cycles 和 Pages，自托管选项。
