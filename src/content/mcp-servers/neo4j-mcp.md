---
title: "Neo4j MCP"
name: neo4j-mcp
category: mcp-servers
tags: [neo4j, graph, database, cypher, knowledge-graph]
price: freemium
website: https://neo4j.com
logo: 
description: "Neo4j 图数据库 MCP，支持 Cypher 查询语言，适合知识图谱构建和关系推理。"
descriptionEn: "Neo4j graph database MCP supporting Cypher query language for knowledge graph construction and relationship reasoning."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.6
certificationStatus: "pending"
installCommand: "npx @neo4j/mcp-server"
envVars: ["NEO4J_URI", "NEO4J_USER", "NEO4J_PASSWORD"]
configExample: |
  {
    "mcpServers": { "neo4j": { "command": "npx", "args": ["-y", "@neo4j/mcp-server"], "env": { "NEO4J_URI": "bolt://localhost:7687", "NEO4J_USER": "neo4j", "NEO4J_PASSWORD": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Neo4j MCP

Neo4j 图数据库 MCP，支持 Cypher 查询语言，适合知识图谱构建和关系推理。
