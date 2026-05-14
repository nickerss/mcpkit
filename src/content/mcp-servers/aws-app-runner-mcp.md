---
title: "AWS App Runner MCP"
name: aws-app-runner-mcp
category: mcp-servers
tags: [aws, app-runner, containers, serverless, deployment]
price: pay-as-you-go
website: https://aws.amazon.com/apprunner
logo: 
description: "AWS App Runner 容器部署平台 MCP，简化容器部署，AI Agent AWS 容器部署。"
descriptionEn: "AWS App Runner container deployment platform MCP for simplified container deployment for AI Agent AWS container deployment."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @aws/app-runner-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "aws-app-runner": { "command": "npx", "args": ["-y", "@aws/app-runner-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS App Runner MCP

AWS App Runner 容器部署平台 MCP，简化容器部署，AI Agent AWS 容器部署。
