---
title: "GitHub MCP"
name: github-mcp
category: mcp-servers
tags: [github, pr, issues, ci, code-review]
price: free
website: https://github.com/modelcontextprotocol/servers
logo: 
description: Official GitHub MCP server connecting AI Agents to GitHub APIs for repository management, PR reviews, and Issue tracking.
kit: ["ship-a-saas", "ai-coding-agent", "devops-monitoring"]
kitRole: "Code storage + CI/CD + PR review automation"
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "certified"
installCommand: "npx @modelcontextprotocol/server-github"
envVars: ["GITHUB_TOKEN"]
configExample: |
  {
    "mcpServers": {
      "github": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-github"],
        "env": { "GITHUB_TOKEN": "ghp_xxxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# GitHub MCP

Official GitHub MCP server connecting AI Agents to GitHub APIs for repository management, PR reviews, and Issue tracking.
