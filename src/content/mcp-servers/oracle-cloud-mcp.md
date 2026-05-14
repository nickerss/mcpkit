---
title: "Oracle Cloud MCP"
name: oracle-cloud-mcp
category: mcp-servers
tags: [oracle, cloud, oci, infrastructure, compute]
price: freemium
website: https://oracle.com/cloud
logo: 
description: "Oracle Cloud Infrastructure (OCI) MCP，计算、存储和数据库管理，AI Agent 企业云自动化。"
descriptionEn: "Oracle Cloud Infrastructure (OCI) MCP for compute, storage and database management for AI Agent enterprise cloud automation."
evaluation:
  easeOfUse: 2
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @oracle/mcp-server"
envVars: ["OCI_COMPARTMENT_ID", "OCI_CONFIG"]
configExample: |
  {
    "mcpServers": { "oracle-cloud": { "command": "npx", "args": ["-y", "@oracle/mcp-server"], "env": { "OCI_COMPARTMENT_ID": "ocid1.xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Oracle Cloud MCP

Oracle Cloud Infrastructure (OCI) MCP，计算、存储和数据库管理，AI Agent 企业云自动化。
