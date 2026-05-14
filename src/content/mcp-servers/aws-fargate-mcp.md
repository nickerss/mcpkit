---
title: "AWS Fargate MCP"
name: aws-fargate-mcp
category: mcp-servers
tags: [aws, fargate, serverless, containers, ecs]
price: pay-as-you-go
website: https://aws.amazon.com/fargate
logo: 
description: "AWS Fargate 无服务器容器平台 MCP，Serverless 容器运行，AI Agent AWS 无服务器容器。"
descriptionEn: "AWS Fargate serverless container platform MCP for serverless container running for AI Agent AWS serverless containers."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @aws/fargate-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "aws-fargate": { "command": "npx", "args": ["-y", "@aws/fargate-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS Fargate MCP

AWS Fargate 无服务器容器平台 MCP，Serverless 容器运行，AI Agent AWS 无服务器容器。
