---
title: "SingleStore MCP"
name: singlestore-mcp
category: mcp-servers
tags: [singlestore, database, mysql, analytics, in-memory]
price: paid
website: https://singlestore.com
logo: 
description: "SingleStore 数据库平台 MCP，内存分析和交易处理，HTAP 工作负载。"
descriptionEn: "SingleStore database platform MCP for in-memory analytics and transaction processing for HTAP workloads."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @singlestore/mcp-server"
envVars: ["SINGLESTORE_HOST"]
configExample: |
  {
    "mcpServers": { "singlestore": { "command": "npx", "args": ["-y", "@singlestore/mcp-server"], "env": { "SINGLESTORE_HOST": "host:port" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# SingleStore MCP

SingleStore 数据库平台 MCP，内存分析和交易处理，HTAP 工作负载。
