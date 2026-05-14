---
title: "CrowdStrike Falcon MCP"
name: crowdstrike-falcon-mcp
category: mcp-servers
tags: [crowdstrike, falcon, endpoint, security, edr]
price: paid
website: https://crowdstrike.com
logo: 
description: "CrowdStrike Falcon 端点安全平台 MCP，EDR 和威胁检测，AI Agent 企业安全运营。"
descriptionEn: "CrowdStrike Falcon endpoint security platform MCP with EDR and threat detection for AI Agent enterprise security operations."
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @crowdstrike/falcon-mcp"
envVars: ["CROWDSTRIKE_CLIENT_ID", "CROWDSTRIKE_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "crowdstrike-falcon": { "command": "npx", "args": ["-y", "@crowdstrike/falcon-mcp"], "env": { "CROWDSTRIKE_CLIENT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# CrowdStrike Falcon MCP

CrowdStrike Falcon 端点安全平台 MCP，EDR 和威胁检测，AI Agent 企业安全运营。
