---
title: "AWS CodeDeploy MCP"
name: aws-codedeploy-mcp
category: mcp-servers
tags: [aws, codedeploy, deployment, ec2, lambda]
price: pay-as-you-go
website: https://aws.amazon.com/codedeploy
logo: 
description: "AWS CodeDeploy 部署平台 MCP，EC2 和 Lambda 部署，AI Agent AWS 部署。"
descriptionEn: "AWS CodeDeploy deployment platform MCP for EC2 and Lambda deployment for AI Agent AWS deployment."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @aws/codedeploy-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "aws-codedeploy": { "command": "npx", "args": ["-y", "@aws/codedeploy-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS CodeDeploy MCP

AWS CodeDeploy 部署平台 MCP，EC2 和 Lambda 部署，AI Agent AWS 部署。
