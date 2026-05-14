---
title: "Monday.com MCP"
name: monday-com-mcp
category: mcp-servers
tags: [monday, project-management, workflow, boards, automation]
price: freemium
website: https://monday.com
logo: 
description: "Monday.com 工作操作系统 MCP，灵活看板和工作流管理，AI Agent 灵活项目管理。"
descriptionEn: "Monday.com work operating system MCP for flexible board and workflow management for AI Agent flexible project management."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.5
certificationStatus: "pending"
installCommand: "npx @monday/mcp-server"
envVars: ["MONDAY_API_KEY"]
configExample: |
  {
    "mcpServers": { "monday-com": { "command": "npx", "args": ["-y", "@monday/mcp-server"], "env": { "MONDAY_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Monday.com MCP

Monday.com 工作操作系统 MCP，灵活看板和工作流管理，AI Agent 灵活项目管理。
