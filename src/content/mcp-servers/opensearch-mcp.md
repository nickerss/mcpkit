---
title: "OpenSearch MCP"
name: opensearch-mcp
category: mcp-servers
tags: [opensearch, search, aws, open-source, analytics]
price: free
website: https://opensearch.org
logo: 
description: "OpenSearch 开源搜索和分析引擎 MCP，Elasticsearch 分支，AWS 托管，AI Agent 搜索平台。"
descriptionEn: "OpenSearch open-source search and analytics engine MCP as Elasticsearch fork with AWS托管 for AI Agent search platform."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @opensearch/mcp-server"
envVars: ["OPENSEARCH_URL"]
configExample: |
  {
    "mcpServers": { "opensearch": { "command": "npx", "args": ["-y", "@opensearch/mcp-server"], "env": { "OPENSEARCH_URL": "https://search.mycluster.amazonaws.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# OpenSearch MCP

OpenSearch 开源搜索和分析引擎 MCP，Elasticsearch 分支，AWS 托管，AI Agent 搜索平台。
