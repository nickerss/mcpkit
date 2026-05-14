---
title: "GitHub Secrets MCP"
name: github-secrets-mcp
category: mcp-servers
tags: [github, secrets, security, actions, encrypted]
price: free
website: https://docs.github.com/en/actions/security-guides
logo: 
description: "GitHub Secrets 管理 MCP，安全存储和检索密钥，AI Agent 安全密钥管理。"
descriptionEn: "GitHub Secrets management MCP for securely storing and retrieving keys for AI Agent secure key management."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @github/secrets-mcp"
envVars: ["GITHUB_TOKEN"]
configExample: |
  {
    "mcpServers": { "github-secrets": { "command": "npx", "args": ["-y", "@github/secrets-mcp"], "env": { "GITHUB_TOKEN": "ghp_xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GitHub Secrets MCP

GitHub Secrets 管理 MCP，安全存储和检索密钥，AI Agent 安全密钥管理。
