---
title: "AWS EC2 MCP"
name: aws-ec2-mcp
category: mcp-servers
tags: [aws, ec2, compute, cloud, virtual-machine]
price: pay-as-you-go
website: https://aws.amazon.com/ec2
logo: 
description: "AWS EC2 虚拟服务器 MCP，创建和管理云服务器实例，支持 Auto Scaling 和负载均衡。"
descriptionEn: "AWS EC2 virtual server MCP for creating and managing cloud server instances with Auto Scaling and load balancing support."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 3
  activity: 5
  scenarioFit: 3
  overall: 3.1
certificationStatus: "pending"
installCommand: "npx @aws/ec2-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_REGION"]
configExample: |
  {
    "mcpServers": { "ec2": { "command": "npx", "args": ["-y", "@aws/ec2-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx", "AWS_SECRET_ACCESS_KEY": "xxx", "AWS_REGION": "us-east-1" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS EC2 MCP

AWS EC2 虚拟服务器 MCP，创建和管理云服务器实例，支持 Auto Scaling 和负载均衡。
