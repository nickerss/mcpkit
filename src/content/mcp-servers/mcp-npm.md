---
title: "npm MCP"
name: npm-mcp
category: mcp-servers
tags: [npm, javascript, package, security, devops]
price: free
website: https://github.com/modelcontextprotocol/servers
logo: 
description: NPM package management MCP for AI Agents to search packages, audit security vulnerabilities, and manage dependencies during CI/CD.
kit: ["devops-monitoring"]
kitRole: "Package security auditing and dependency management in CI pipelines"
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @modelcontextprotocol/server-npm"
envVars: ["NPM_TOKEN"]
configExample: |
  {
    "mcpServers": {
      "npm": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-npm"],
        "env": { "NPM_TOKEN": "npm_xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# npm MCP

NPM package management MCP for AI Agents to search packages, audit security vulnerabilities, and manage dependencies during CI/CD.
