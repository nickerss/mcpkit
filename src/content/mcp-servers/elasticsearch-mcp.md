---
title: "Elasticsearch MCP"
name: elasticsearch-mcp
category: mcp-servers
tags: [elasticsearch, search, elk, logs, enterprise]
price: free
website: https://www.elastic.co/elasticsearch
logo: 
description: "Elasticsearch 搜索和分析引擎 MCP，全文搜索和日志分析，ELK Stack 核心。"
descriptionEn: "Elasticsearch search and analytics engine MCP for full-text search and log analysis — core of ELK Stack."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "recommended"
installCommand: "npx @elasticsearch/mcp-server"
envVars: ["ELASTICSEARCH_URL"]
configExample: |
  {
    "mcpServers": { "elasticsearch": { "command": "npx", "args": ["-y", "@elasticsearch/mcp-server"], "env": { "ELASTICSEARCH_URL": "http://localhost:9200" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Elasticsearch MCP

Elasticsearch 搜索和分析引擎 MCP，全文搜索和日志分析，ELK Stack 核心。
