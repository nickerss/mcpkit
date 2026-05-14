---
title: "Astra DB MCP"
name: astradb-mcp
category: mcp-servers
tags: [astra, cassandra, vector, database, astra-db]
price: freemium
website: https://datastax.com/astra
logo: 
description: "Astra DB（DataStax）向量数据库 MCP，基于 Apache Cassandra，支持向量搜索和关系数据。"
descriptionEn: "Astra DB (DataStax) vector database MCP based on Apache Cassandra supporting vector search and relational data."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @datastax/astradb-mcp"
envVars: ["ASTRA_DB_TOKEN", "ASTRA_DB_ID"]
configExample: |
  {
    "mcpServers": { "astradb": { "command": "npx", "args": ["-y", "@datastax/astradb-mcp"], "env": { "ASTRA_DB_TOKEN": "xxx", "ASTRA_DB_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Astra DB MCP

Astra DB（DataStax）向量数据库 MCP，基于 Apache Cassandra，支持向量搜索和关系数据。
