---
title: "MongoDB Atlas MCP"
name: mongodb-atlas-mcp
category: mcp-servers
tags: [mongodb, atlas, database, nosql, cloud]
price: freemium
website: https://mongodb.com/atlas
logo: 
description: "MongoDB Atlas 云数据库平台 MCP，文档数据库和向量搜索，AI Agent 数据存储。"
descriptionEn: "MongoDB Atlas cloud database platform MCP with document database and vector search for AI Agent data storage."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @mongodb/atlas-mcp"
envVars: ["MONGODB_URI"]
configExample: |
  {
    "mcpServers": { "mongodb-atlas": { "command": "npx", "args": ["-y", "@mongodb/atlas-mcp"], "env": { "MONGODB_URI": "mongodb+srv://user:pass@cluster.xxx.mongodb.net" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# MongoDB Atlas MCP

MongoDB Atlas 云数据库平台 MCP，文档数据库和向量搜索，AI Agent 数据存储。
