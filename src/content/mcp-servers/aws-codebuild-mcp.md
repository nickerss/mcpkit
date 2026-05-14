---
title: "AWS CodeBuild MCP"
name: aws-codebuild-mcp
category: mcp-servers
tags: [aws, codebuild, ci-cd, build, compilation]
price: pay-as-you-go
website: https://aws.amazon.com/codebuild
logo: 
description: "AWS CodeBuild 构建平台 MCP，托管构建服务，AI Agent AWS 构建。"
descriptionEn: "AWS CodeBuild build platform MCP for managed build service for AI Agent AWS builds."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @aws/codebuild-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "aws-codebuild": { "command": "npx", "args": ["-y", "@aws/codebuild-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS CodeBuild MCP

AWS CodeBuild 构建平台 MCP，托管构建服务，AI Agent AWS 构建。
