---
title: "Jenkins X MCP"
name: jenkins-x-mcp
category: mcp-servers
tags: [jenkinsx, ci-cd, kubernetes, jenkins, gitops]
price: free
website: https://jenkins-x.io
logo: 
description: "Jenkins X 云原生 CI/CD 平台 MCP，K8s 原生 Jenkins，AI Agent Jenkins X。"
descriptionEn: "Jenkins X cloud-native CI/CD platform MCP for K8s native Jenkins for AI Agent Jenkins X."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @jenkinsx/mcp-server"
envVars: ["JX_GIT_URL"]
configExample: |
  {
    "mcpServers": { "jenkins-x": { "command": "npx", "args": ["-y", "@jenkinsx/mcp-server"], "env": { "JX_GIT_URL": "https://github.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Jenkins X MCP

Jenkins X 云原生 CI/CD 平台 MCP，K8s 原生 Jenkins，AI Agent Jenkins X。
