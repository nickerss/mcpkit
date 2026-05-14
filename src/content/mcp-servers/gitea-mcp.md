---
title: "Gitea MCP"
name: gitea-mcp
category: mcp-servers
tags: [gitea, git, self-hosted, open-source, code-hosting]
price: free
website: https://gitea.io
logo: 
description: "Gitea 开源自托管 Git 平台 MCP，轻量级自托管代码托管，AI Agent 自托管 Git。"
descriptionEn: "Gitea open-source self-hosted Git platform MCP for lightweight self-hosted code hosting for AI Agent self-hosted Git."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @gitea/mcp-server"
envVars: ["GITEA_HOST", "GITEA_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "gitea": { "command": "npx", "args": ["-y", "@gitea/mcp-server"], "env": { "GITEA_HOST": "https://gitea.mycompany.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Gitea MCP

Gitea 开源自托管 Git 平台 MCP，轻量级自托管代码托管，AI Agent 自托管 Git。
