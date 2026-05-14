---
title: "Process Street MCP"
name: process-street-mcp
category: mcp-servers
tags: [process-street, workflow, checklist, procedures, automation]
price: freemium
website: https://process.st
logo: 
description: "Process Street 工作流和清单平台 MCP，流程检查清单和程序管理，AI Agent SOP 自动化。"
descriptionEn: "Process Street workflow and checklist platform MCP for process checklists and procedure management for AI Agent SOP automation."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @processstreet/mcp-server"
envVars: ["PROCESSSTREET_API_KEY"]
configExample: |
  {
    "mcpServers": { "process-street": { "command": "npx", "args": ["-y", "@processstreet/mcp-server"], "env": { "PROCESSSTREET_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Process Street MCP

Process Street 工作流和清单平台 MCP，流程检查清单和程序管理，AI Agent SOP 自动化。
