---
title: "AWS CloudFormation MCP"
name: aws-cloudformation-mcp
category: mcp-servers
tags: [aws, cloudformation, IaC, infrastructure, templates]
price: free
website: https://aws.amazon.com/cloudformation
logo: 
description: "AWS CloudFormation IaC 平台 MCP，基础设施即代码模板，AI Agent AWS IaC。"
descriptionEn: "AWS CloudFormation IaC platform MCP for infrastructure-as-code templates for AI Agent AWS IaC."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @aws/cloudformation-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "cloudformation": { "command": "npx", "args": ["-y", "@aws/cloudformation-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS CloudFormation MCP

AWS CloudFormation IaC 平台 MCP，基础设施即代码模板，AI Agent AWS IaC。
