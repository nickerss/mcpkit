---
title: "AWS MCP"
name: aws-mcp
category: mcp-servers
tags: [aws, ec2, lambda, iam, cloud, infrastructure]
price: pay-as-you-go
website: https://aws.amazon.com/mcp
logo: 
description: AWS MCP connecting AI Agents to full AWS service suite - S3, EC2, Lambda, IAM, CloudWatch for complete enterprise cloud infrastructure management.
kit: ["ship-a-saas", "devops-monitoring"]
kitRole: "Enterprise cloud infrastructure - EC2, Lambda, IAM, CloudWatch management"
evaluation:
  easeOfUse: 2
  security: 3
  activity: 4
  scenarioFit: 4
  overall: 3.2
certificationStatus: "pending"
installCommand: "npx @aws/mcp-server-aws"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"]
configExample: |
  {
    "mcpServers": {
      "aws": {
        "command": "npx",
        "args": ["-y", "@aws/mcp-server-aws"],
        "env": {
          "AWS_ACCESS_KEY_ID": "AKIAxxx",
          "AWS_SECRET_ACCESS_KEY": "xxx",
          "AWS_REGION": "us-east-1"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# AWS MCP

AWS MCP connecting AI Agents to full AWS service suite - S3, EC2, Lambda, IAM, CloudWatch for complete enterprise cloud infrastructure management.
