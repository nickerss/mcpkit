---
title: "Ngrok MCP"
name: ngrok-mcp
category: mcp-servers
tags: [ngrok, tunnel, localhost, devtools, networking]
price: freemium
website: https://ngrok.com
logo: 
description: "Ngrok 本地隧道 MCP，将本地服务暴露到公网，开发 webhook 和移动端调试必备。"
descriptionEn: "Ngrok local tunnel MCP exposing local services to public internet — essential for webhook development and mobile debugging."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 5
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4.2
certificationStatus: "recommended"
installCommand: "npx @ngrok/mcp-server"
envVars: ["NGROK_AUTHTOKEN"]
configExample: |
  {
    "mcpServers": { "ngrok": { "command": "npx", "args": ["-y", "@ngrok/mcp-server"], "env": { "NGROK_AUTHTOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Ngrok MCP

Ngrok 本地隧道 MCP，将本地服务暴露到公网，开发 webhook 和移动端调试必备。
