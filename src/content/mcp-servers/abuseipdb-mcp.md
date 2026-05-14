---
title: "AbuseIPDB MCP"
name: abuseipdb-mcp
category: mcp-servers
tags: [abuseipdb, ip, security, blacklist, api]
price: free
website: https://abuseipdb.com
logo: 
description: "AbuseIPDB IP 黑名单数据库 MCP，检查 IP 信誉和黑名单，AI Agent 安全检查。"
descriptionEn: "AbuseIPDB IP blacklist database MCP for checking IP reputation and blacklist for AI Agent security checks."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @abuseipdb/mcp-server"
envVars: ["ABUSEIPDB_API_KEY"]
configExample: |
  {
    "mcpServers": { "abuseipdb": { "command": "npx", "args": ["-y", "@abuseipdb/mcp-server"], "env": { "ABUSEIPDB_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# AbuseIPDB MCP

AbuseIPDB IP 黑名单数据库 MCP，检查 IP 信誉和黑名单，AI Agent 安全检查。
