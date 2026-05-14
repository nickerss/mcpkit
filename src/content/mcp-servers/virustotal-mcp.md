---
title: "VirusTotal MCP"
name: virustotal-mcp
category: mcp-servers
tags: [virustotal, security, malware, scanning, threat-intelligence]
price: freemium
website: https://virustotal.com
logo: 
description: "VirusTotal 恶意软件分析平台 MCP，文件和 URL 安全扫描，AI Agent 安全威胁情报。"
descriptionEn: "VirusTotal malware analysis platform MCP for file and URL security scanning for AI Agent security threat intelligence."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @virustotal/mcp-server"
envVars: ["VIRUSTOTAL_API_KEY"]
configExample: |
  {
    "mcpServers": { "virustotal": { "command": "npx", "args": ["-y", "@virustotal/mcp-server"], "env": { "VIRUSTOTAL_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# VirusTotal MCP

VirusTotal 恶意软件分析平台 MCP，文件和 URL 安全扫描，AI Agent 安全威胁情报。
