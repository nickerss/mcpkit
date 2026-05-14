---
title: "CloudWatch Logs MCP"
name: cloudwatch-logs-mcp
category: mcp-servers
tags: [aws, cloudwatch, logs, monitoring, observability]
price: pay-as-you-go
website: https://aws.amazon.com/cloudwatch
logo: 
description: "AWS CloudWatch 日志平台 MCP，云端日志监控，AI Agent AWS 日志。"
descriptionEn: "AWS CloudWatch log platform MCP for cloud log monitoring for AI Agent AWS logging."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @aws/cloudwatch-logs-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "cloudwatch-logs": { "command": "npx", "args": ["-y", "@aws/cloudwatch-logs-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# CloudWatch Logs MCP

AWS CloudWatch 日志平台 MCP，云端日志监控，AI Agent AWS 日志。
