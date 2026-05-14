---
title: "Bitbucket MCP"
name: bitbucket-mcp
category: mcp-servers
tags: [bitbucket, git, atlassian, repository, api]
price: free
website: https://bitbucket.org
logo: 
description: "Bitbucket Git 代码托管平台 MCP，Atlassian 系列代码托管，AI Agent Bitbucket 集成。"
descriptionEn: "Bitbucket Git code hosting platform MCP as Atlassian series code hosting for AI Agent Bitbucket integration."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @bitbucket/mcp-server"
envVars: ["BITBUCKET_USERNAME", "BITBUCKET_APP_PASSWORD"]
configExample: |
  {
    "mcpServers": { "bitbucket": { "command": "npx", "args": ["-y", "@bitbucket/mcp-server"], "env": { "BITBUCKET_USERNAME": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Bitbucket MCP

Bitbucket Git 代码托管平台 MCP，Atlassian 系列代码托管，AI Agent Bitbucket 集成。
