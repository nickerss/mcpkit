---
title: "SonarQube MCP"
name: sonarqube-mcp
category: mcp-servers
tags: [sonarqube, code-quality, static-analysis, security, bugs]
price: free
website: https://sonarsource.com
logo: 
description: "SonarQube 代码质量管理平台 MCP，分析代码质量、安全漏洞和技术债务，AI Agent 自动化代码审查。"
descriptionEn: "SonarQube code quality management platform MCP analyzing code quality, security vulnerabilities and technical debt for AI Agent code review."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @sonarsource/mcp-server"
envVars: ["SONARQUBE_URL", "SONARQUBE_TOKEN"]
configExample: |
  {
    "mcpServers": { "sonarqube": { "command": "npx", "args": ["-y", "@sonarsource/mcp-server"], "env": { "SONARQUBE_URL": "http://localhost:9000", "SONARQUBE_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# SonarQube MCP

SonarQube 代码质量管理平台 MCP，分析代码质量、安全漏洞和技术债务，AI Agent 自动化代码审查。
