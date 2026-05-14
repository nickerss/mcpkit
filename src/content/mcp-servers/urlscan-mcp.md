---
title: "UrlScan MCP"
name: urlscan-mcp
category: mcp-servers
tags: [urlscan, security, scanning, malware, analysis]
price: free
website: https://urlscan.io
logo: 
description: "UrlScan URL 安全扫描平台 MCP，URL 安全分析和沙箱，AI Agent URL 安全评估。"
descriptionEn: "UrlScan URL security scanning platform MCP for URL security analysis and sandboxing for AI Agent URL security assessment."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.2
certificationStatus: "pending"
installCommand: "npx @urlscan/mcp-server"
envVars: ["URLSCAN_API_KEY"]
configExample: |
  {
    "mcpServers": { "urlscan": { "command": "npx", "args": ["-y", "@urlscan/mcp-server"], "env": { "URLSCAN_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# UrlScan MCP

UrlScan URL 安全扫描平台 MCP，URL 安全分析和沙箱，AI Agent URL 安全评估。
