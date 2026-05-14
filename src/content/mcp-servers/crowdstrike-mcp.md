---
title: "CrowdStrike MCP"
name: crowdstrike-mcp
category: mcp-servers
tags: [crowdstrike, endpoint, security, threat-detection, edr]
price: paid
website: https://crowdstrike.com
logo: 
description: "CrowdStrike 端点检测与响应（EDR）MCP，威胁检测和事件响应自动化，企业安全运维。"
descriptionEn: "CrowdStrike Endpoint Detection and Response (EDR) MCP for threat detection and incident response automation — enterprise security operations."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 3
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @crowdstrike/mcp-server"
envVars: ["CROWDSTRIKE_CLIENT_ID", "CROWDSTRIKE_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "crowdstrike": { "command": "npx", "args": ["-y", "@crowdstrike/mcp-server"], "env": { "CROWDSTRIKE_CLIENT_ID": "xxx", "CROWDSTRIKE_CLIENT_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# CrowdStrike MCP

CrowdStrike 端点检测与响应（EDR）MCP，威胁检测和事件响应自动化，企业安全运维。
