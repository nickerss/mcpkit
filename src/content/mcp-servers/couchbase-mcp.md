---
title: "CouchBase MCP"
name: couchbase-mcp
category: mcp-servers
tags: [couchbase, nosql, document, database, sync]
price: freemium
website: https://couchbase.com
logo: 
description: "Couchbase 文档数据库平台 MCP，内存优先 NoSQL，AI Agent Couchbase。"
descriptionEn: "Couchbase document database platform MCP for in-memory-first NoSQL for AI Agent Couchbase."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @couchbase/mcp-server"
envVars: ["COUCHBASE_HOST"]
configExample: |
  {
    "mcpServers": { "couchbase": { "command": "npx", "args": ["-y", "@couchbase/mcp-server"], "env": { "COUCHBASE_HOST": "localhost" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# CouchBase MCP

Couchbase 文档数据库平台 MCP，内存优先 NoSQL，AI Agent Couchbase。
