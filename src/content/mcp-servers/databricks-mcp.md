---
title: "Databricks MCP"
name: databricks-mcp
category: mcp-servers
tags: [databricks, spark, dataengineering, ml, lakehouse]
price: paid
website: https://databricks.com
logo: 
description: "Databricks Lakehouse 平台 MCP，基于 Apache Spark 的数据工程和机器学习平台，AI Agent 数据处理自动化。"
descriptionEn: "Databricks Lakehouse platform MCP based on Apache Spark for data engineering and ML — AI Agent data processing automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @databricks/mcp-server"
envVars: ["DATABRICKS_HOST", "DATABRICKS_TOKEN"]
configExample: |
  {
    "mcpServers": { "databricks": { "command": "npx", "args": ["-y", "@databricks/mcp-server"], "env": { "DATABRICKS_HOST": "https://xxx.cloud.databricks.com", "DATABRICKS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Databricks MCP

Databricks Lakehouse 平台 MCP，基于 Apache Spark 的数据工程和机器学习平台，AI Agent 数据处理自动化。
