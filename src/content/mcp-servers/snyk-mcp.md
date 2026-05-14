---
title: "Snyk MCP"
name: snyk-mcp
category: mcp-servers
tags: [snyk, security, vulnerability, scanning, devops]
price: freemium
website: https://snyk.io
logo: 
description: "Snyk 安全扫描 MCP，检测代码和依赖中的漏洞，AI Agent 安全左移自动化。"
descriptionEn: "Snyk security scanning MCP detecting vulnerabilities in code and dependencies for AI Agent security shift-left automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @snyk/mcp-server"
envVars: ["SNYK_TOKEN"]
configExample: |
  {
    "mcpServers": { "snyk": { "command": "npx", "args": ["-y", "@snyk/mcp-server"], "env": { "SNYK_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Snyk MCP

Snyk 安全扫描 MCP，检测代码和依赖中的漏洞，AI Agent 安全左移自动化。
