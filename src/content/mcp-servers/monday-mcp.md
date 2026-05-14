---
title: "Monday.com MCP"
name: monday-mcp
category: mcp-servers
tags: [monday, workos, boards, tasks, automation]
price: freemium
website: https://monday.com
logo: 
description: "Monday.com 工作操作系统 MCP，可视化工作区和自动化流程，AI Agent 团队协作。"
descriptionEn: "Monday.com Work OS MCP with visual workspaces and automation flows for AI Agent team collaboration."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @monday/mcp-server"
envVars: ["MONDAY_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "monday": { "command": "npx", "args": ["-y", "@monday/mcp-server"], "env": { "MONDAY_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Monday.com MCP

Monday.com 工作操作系统 MCP，可视化工作区和自动化流程，AI Agent 团队协作。
