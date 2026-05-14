---
title: "Jenkins MCP"
name: jenkins-mcp
category: mcp-servers
tags: [jenkins, ci, cd, automation, devops]
price: free
website: https://www.jenkins.io
logo: 
description: "Jenkins 自动化服务器 MCP，支持构建、测试和部署任务管理，AI Agent 可自动化 DevOps 流水线。"
descriptionEn: "Jenkins automation server MCP supporting build, test and deployment task management for AI Agent DevOps pipeline automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 3.3
certificationStatus: "pending"
installCommand: "npx @jenkins/mcp-server"
envVars: ["JENKINS_URL", "JENKINS_USER", "JENKINS_TOKEN"]
configExample: |
  {
    "mcpServers": { "jenkins": { "command": "npx", "args": ["-y", "@jenkins/mcp-server"], "env": { "JENKINS_URL": "http://localhost:8080", "JENKINS_USER": "admin", "JENKINS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Jenkins MCP

Jenkins 自动化服务器 MCP，支持构建、测试和部署任务管理，AI Agent 可自动化 DevOps 流水线。
