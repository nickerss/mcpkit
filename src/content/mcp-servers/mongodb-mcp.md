---
title: "MongoDB MCP"
name: mongodb-mcp
category: mcp-servers
tags: [mongodb, database, nosql, document, backend]
price: freemium
website: https://www.mongodb.com
logo: 
description: "MongoDB 文档数据库 MCP，支持聚合管道和 CRUD 操作，适合处理非结构化数据的 AI 应用。"
descriptionEn: "MongoDB document database MCP with aggregation pipeline and CRUD support for AI applications handling unstructured data."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @mongodb/mcp-server"
envVars: ["MONGODB_URI"]
configExample: |
  {
    "mcpServers": { "mongodb": { "command": "npx", "args": ["-y", "@mongodb/mcp-server"], "env": { "MONGODB_URI": "mongodb://localhost:27017" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# MongoDB MCP

MongoDB 文档数据库 MCP，支持聚合管道和 CRUD 操作，适合处理非结构化数据的 AI 应用。
