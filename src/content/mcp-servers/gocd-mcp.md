---
title: "GoCD MCP"
name: gocd-mcp
category: mcp-servers
tags: [gocd, ci-cd, cd, open-source, thoughtworks]
price: free
website: https://gocd.org
logo: 
description: "GoCD 开源 CI/CD 平台 MCP，持续交付流水线，AI Agent 企业级 CI/CD。"
descriptionEn: "GoCD open-source CI/CD platform MCP for continuous delivery pipelines for AI Agent enterprise CI/CD."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @gocd/mcp-server"
envVars: ["GOCD_SERVER"]
configExample: |
  {
    "mcpServers": { "gocd": { "command": "npx", "args": ["-y", "@gocd/mcp-server"], "env": { "GOCD_SERVER": "https://go.mycompany.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# GoCD MCP

GoCD 开源 CI/CD 平台 MCP，持续交付流水线，AI Agent 企业级 CI/CD。
