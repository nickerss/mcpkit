---
title: "RabbitMQ MCP"
name: rabbitmq-mcp
category: mcp-servers
tags: [rabbitmq, messaging, queue, amqp, events]
price: free
website: https://rabbitmq.com
logo: 
description: "RabbitMQ 消息队列 MCP，AMQP 协议实现，支持多种消息模式，适合微服务间异步通信。"
descriptionEn: "RabbitMQ message queue MCP implementing AMQP protocol with multiple messaging patterns — ideal for async inter-service communication."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @rabbitmq/mcp-server"
envVars: ["RABBITMQ_URL"]
configExample: |
  {
    "mcpServers": { "rabbitmq": { "command": "npx", "args": ["-y", "@rabbitmq/mcp-server"], "env": { "RABBITMQ_URL": "amqp://guest:guest@localhost:5672" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# RabbitMQ MCP

RabbitMQ 消息队列 MCP，AMQP 协议实现，支持多种消息模式，适合微服务间异步通信。
