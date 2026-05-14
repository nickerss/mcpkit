---
title: "CouchDB MCP"
name: couchdb-mcp
category: mcp-servers
tags: [couchdb, nosql, document, database, sync]
price: free
website: https://couchdb.apache.org
logo: 
description: "Apache CouchDB 文档数据库平台 MCP，文档同步和离线优先，AI Agent CouchDB。"
descriptionEn: "Apache CouchDB document database platform MCP for document sync and offline-first for AI Agent CouchDB."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @couchdb/mcp-server"
envVars: ["COUCHDB_URL"]
configExample: |
  {
    "mcpServers": { "couchdb": { "command": "npx", "args": ["-y", "@couchdb/mcp-server"], "env": { "COUCHDB_URL": "http://localhost:5984" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# CouchDB MCP

Apache CouchDB 文档数据库平台 MCP，文档同步和离线优先，AI Agent CouchDB。
