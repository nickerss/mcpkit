---
title: "AWS S3 MCP"
name: aws-s3-mcp
category: mcp-servers
tags: [aws, s3, storage, buckets, object-storage]
price: pay-as-you-go
website: https://aws.amazon.com/s3
logo: 
description: "AWS S3 对象存储 MCP，管理 buckets 和对象存储，适合大规模文件存储和备份场景。"
descriptionEn: "AWS S3 object storage MCP managing buckets and object storage — ideal for large-scale file storage and backup scenarios."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @aws/s3-mcp"
envVars: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": { "s3": { "command": "npx", "args": ["-y", "@aws/s3-mcp"], "env": { "AWS_ACCESS_KEY_ID": "AKIAxxx", "AWS_SECRET_ACCESS_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AWS S3 MCP

AWS S3 对象存储 MCP，管理 buckets 和对象存储，适合大规模文件存储和备份场景。
