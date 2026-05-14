---
title: "DynamoDB MCP"
name: dynamodb-mcp
category: mcp-servers
tags: [aws, dynamodb, nosql, database, serverless]
price: pay-as-you-go
website: https://aws.amazon.com/dynamodb
logo: 
description: "AWS DynamoDB 无服务器数据库 MCP，支持键值和文档模型，自动扩缩容。"
descriptionEn: "AWS DynamoDB serverless database MCP with key-value and document models and automatic scaling."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 3
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @aws/dynamodb-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"]
configExample: |
  {
    "mcpServers": { "dynamodb": { "command": "npx", "args": ["-y", "@aws/dynamodb-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx", "AWS_SECRET_ACCESS_KEY": "xxx", "AWS_REGION": "us-east-1" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# DynamoDB MCP

AWS DynamoDB 无服务器数据库 MCP，支持键值和文档模型，自动扩缩容。
