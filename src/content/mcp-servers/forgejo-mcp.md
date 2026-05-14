---
title: "Forgejo MCP"
name: forgejo-mcp
category: mcp-servers
tags: [forgejo, git, self-hosted, open-source, gitea-fork]
price: free
website: https://forgejo.org
logo: 
description: "Forgejo 开源自托管 Git 平台 MCP，Gitea 分支，AI Agent 自托管 Git。"
descriptionEn: "Forgejo open-source self-hosted Git platform MCP as Gitea fork for AI Agent self-hosted Git."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @forgejo/mcp-server"
envVars: ["FORGEJO_HOST", "FORGEJO_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "forgejo": { "command": "npx", "args": ["-y", "@forgejo/mcp-server"], "env": { "FORGEJO_HOST": "https://forgejo.mycompany.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Forgejo MCP

Forgejo 开源自托管 Git 平台 MCP，Gitea 分支，AI Agent 自托管 Git。
