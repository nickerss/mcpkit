---
title: "AWS ECS MCP"
name: aws-ecs-mcp
category: mcp-servers
tags: [aws, ecs, containers, fargate, orchestration]
price: pay-as-you-go
website: https://aws.amazon.com/ecs
logo: 
description: "AWS ECS 容器编排平台 MCP，容器化应用编排，AI Agent AWS 容器编排。"
descriptionEn: "AWS ECS container orchestration platform MCP for containerized application orchestration for AI Agent AWS container orchestration."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @aws/ecs-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "aws-ecs": { "command": "npx", "args": ["-y", "@aws/ecs-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS ECS MCP

AWS ECS 容器编排平台 MCP，容器化应用编排，AI Agent AWS 容器编排。
