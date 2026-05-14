---
title: "AWS Bedrock MCP"
name: aws-bedrock-mcp
category: mcp-servers
tags: [aws, bedrock, llm, claude, ai21]
price: pay-as-you-go
website: https://aws.amazon.com/bedrock
logo: 
description: "AWS Bedrock 平台 MCP，Claude/Titan 等模型，AI Agent AWS AI 集成。"
descriptionEn: "AWS Bedrock platform MCP for Claude, Titan and other models for AI Agent AWS AI integration."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.4
certificationStatus: "certified"
installCommand: "npx @aws/bedrock-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "aws-bedrock": { "command": "npx", "args": ["-y", "@aws/bedrock-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS Bedrock MCP

AWS Bedrock 平台 MCP，Claude/Titan 等模型，AI Agent AWS AI 集成。
