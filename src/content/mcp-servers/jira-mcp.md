---
title: "Jira MCP"
name: jira-mcp
category: mcp-servers
tags: [jira, project-management, issues, agile, tickets]
price: freemium
website: https://jira.atlassian.com
logo: 
description: "Atlassian Jira MCP，支持 Issue 创建、更新、查询和工作流管理，AI Agent 可自动化敏捷开发流程。"
descriptionEn: "Atlassian Jira MCP supporting Issue creation, updates, queries and workflow management for AI Agent agile automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.9
certificationStatus: "recommended"
installCommand: "npx @jira/mcp-server"
envVars: ["JIRA_URL", "JIRA_EMAIL", "JIRA_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "jira": { "command": "npx", "args": ["-y", "@jira/mcp-server"], "env": { "JIRA_URL": "https://xxx.atlassian.net", "JIRA_EMAIL": "me@company.com", "JIRA_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Jira MCP

Atlassian Jira MCP，支持 Issue 创建、更新、查询和工作流管理，AI Agent 可自动化敏捷开发流程。
