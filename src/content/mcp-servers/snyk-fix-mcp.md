---
title: "Snyk Fix MCP"
name: snyk-fix-mcp
category: mcp-servers
tags: [snyk, security, fix, vulnerabilities, automation]
price: freemium
website: https://snyk.io
logo: 
description: "Snyk Fix 自动化漏洞修复 MCP，一键修复安全漏洞，AI Agent 安全自动化。"
descriptionEn: "Snyk Fix automated vulnerability fix MCP for one-click security vulnerability fixes for AI Agent security automation."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @snyk/fix-mcp"
envVars: ["SNYK_TOKEN"]
configExample: |
  {
    "mcpServers": { "snyk-fix": { "command": "npx", "args": ["-y", "@snyk/fix-mcp"], "env": { "SNYK_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Snyk Fix MCP

Snyk Fix 自动化漏洞修复 MCP，一键修复安全漏洞，AI Agent 安全自动化。
