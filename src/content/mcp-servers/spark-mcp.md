---
title: "Spark MCP"
name: spark-mcp
category: mcp-servers
tags: [spark, big-data, analytics, distributed, processing]
price: free
website: https://spark.apache.org
logo: 
description: "Apache Spark 大数据处理平台 MCP，分布式数据处理和分析，AI Agent 大数据分析。"
descriptionEn: "Apache Spark big data processing platform MCP for distributed data processing and analytics for AI Agent big data analytics."
evaluation:
  easeOfUse: 2
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @apache/spark-mcp"
envVars: ["SPARK_MASTER_URL"]
configExample: |
  {
    "mcpServers": { "spark": { "command": "npx", "args": ["-y", "@apache/spark-mcp"], "env": { "SPARK_MASTER_URL": "spark://localhost:7077" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Spark MCP

Apache Spark 大数据处理平台 MCP，分布式数据处理和分析，AI Agent 大数据分析。
