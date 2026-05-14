---
title: "AWS EKS MCP"
name: aws-eks-mcp
category: mcp-servers
tags: [aws, eks, kubernetes, containers, orchestration]
price: pay-as-you-go
website: https://aws.amazon.com/eks
logo: 
description: "AWS EKS Kubernetes 容器平台 MCP，托管 Kubernetes，AI Agent AWS Kubernetes。"
descriptionEn: "AWS EKS Kubernetes container platform MCP for managed Kubernetes for AI Agent AWS Kubernetes."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @aws/eks-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "aws-eks": { "command": "npx", "args": ["-y", "@aws/eks-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS EKS MCP

AWS EKS Kubernetes 容器平台 MCP，托管 Kubernetes，AI Agent AWS Kubernetes。
