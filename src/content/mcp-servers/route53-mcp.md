---
title: "AWS Route53 MCP"
name: route53-mcp
category: mcp-servers
tags: [aws, route53, dns, domains, routing]
price: pay-as-you-go
website: https://aws.amazon.com/route53
logo: 
description: "AWS Route53 DNS 服务 MCP，管理域名解析和路由策略，支持健康检查和故障转移。"
descriptionEn: "AWS Route53 DNS service MCP for managing domain name resolution and routing policies with health checks and failover support."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @aws/route53-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "route53": { "command": "npx", "args": ["-y", "@aws/route53-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx", "AWS_SECRET_ACCESS_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS Route53 MCP

AWS Route53 DNS 服务 MCP，管理域名解析和路由策略，支持健康检查和故障转移。
