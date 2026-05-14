---
title: "Shodan MCP"
name: shodan-mcp
category: mcp-servers
tags: [shodan, security, iot, network, search-engine]
price: freemium
website: https://shodan.io
logo: 
description: "Shodan 网络安全搜索引擎 MCP，物联网设备搜索和漏洞发现，AI Agent 网络安全侦察。"
descriptionEn: "Shodan cybersecurity search engine MCP for IoT device search and vulnerability discovery for AI Agent cybersecurity reconnaissance."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @shodan/mcp-server"
envVars: ["SHODAN_API_KEY"]
configExample: |
  {
    "mcpServers": { "shodan": { "command": "npx", "args": ["-y", "@shodan/mcp-server"], "env": { "SHODAN_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Shodan MCP

Shodan 网络安全搜索引擎 MCP，物联网设备搜索和漏洞发现，AI Agent 网络安全侦察。
