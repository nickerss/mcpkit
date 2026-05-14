---
title: "Anthropic Bedrock MCP"
name: anthropic-bedrock-mcp
category: mcp-servers
tags: [anthropic, bedrock, aws, claude, inference]
price: pay-as-you-go
website: https://aws.amazon.com/bedrock
logo: 
description: "AWS Bedrock Anthropic Claude MCP，通过 AWS Bedrock 访问 Claude 模型，适合已使用 AWS 的企业用户。"
descriptionEn: "AWS Bedrock Anthropic Claude MCP accessing Claude models via AWS Bedrock — ideal for enterprise AWS users."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "recommended"
installCommand: "npx @anthropic/bedrock-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"]
configExample: |
  {
    "mcpServers": { "anthropic-bedrock": { "command": "npx", "args": ["-y", "@anthropic/bedrock-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx", "AWS_SECRET_ACCESS_KEY": "xxx", "AWS_REGION": "us-east-1" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Anthropic Bedrock MCP

AWS Bedrock Anthropic Claude MCP，通过 AWS Bedrock 访问 Claude 模型，适合已使用 AWS 的企业用户。
