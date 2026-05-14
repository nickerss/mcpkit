---
title: "Greenhouse MCP"
name: greenhouse-mcp
category: mcp-servers
tags: [greenhouse, ats, recruiting, hr, hiring]
price: paid
website: https://greenhouse.io
logo: 
description: "Greenhouse ATS 招聘管理平台 MCP，招聘流程和候选人管理，AI Agent HR 招聘。"
descriptionEn: "Greenhouse ATS recruitment management platform MCP for hiring workflow and candidate management for AI Agent HR recruiting."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @greenhouse/mcp-server"
envVars: ["GREENHOUSE_API_KEY"]
configExample: |
  {
    "mcpServers": { "greenhouse": { "command": "npx", "args": ["-y", "@greenhouse/mcp-server"], "env": { "GREENHOUSE_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Greenhouse MCP

Greenhouse ATS 招聘管理平台 MCP，招聘流程和候选人管理，AI Agent HR 招聘。
