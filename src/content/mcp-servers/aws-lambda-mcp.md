---
title: "AWS Lambda MCP"
name: aws-lambda-mcp
category: mcp-servers
tags: [aws, lambda, serverless, functions, compute]
price: pay-as-you-go
website: https://aws.amazon.com/lambda
logo: 
description: "AWS Lambda 无服务器函数 MCP，上传和调用 Lambda 函数，无需管理服务器。"
descriptionEn: "AWS Lambda serverless functions MCP for uploading and invoking Lambda functions without managing servers."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.8
certificationStatus: "recommended"
installCommand: "npx @aws/lambda-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"]
configExample: |
  {
    "mcpServers": { "lambda": { "command": "npx", "args": ["-y", "@aws/lambda-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx", "AWS_SECRET_ACCESS_KEY": "xxx", "AWS_REGION": "us-east-1" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS Lambda MCP

AWS Lambda 无服务器函数 MCP，上传和调用 Lambda 函数，无需管理服务器。
