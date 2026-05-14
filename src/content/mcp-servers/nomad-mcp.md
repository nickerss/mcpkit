---
title: "Nomad MCP"
name: nomad-mcp
category: mcp-servers
tags: [nomad, scheduler, workloads, hashicorp, containers]
price: free
website: https://nomadproject.io
logo: 
description: "Nomad 工作负载调度器 MCP，容器和单体应用调度，AI Agent 工作负载管理。"
descriptionEn: "Nomad workload scheduler MCP for container and monolith workload scheduling for AI Agent workload management."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @hashicorp/nomad-mcp"
envVars: ["NOMAD_ADDR"]
configExample: |
  {
    "mcpServers": { "nomad": { "command": "npx", "args": ["-y", "@hashicorp/nomad-mcp"], "env": { "NOMAD_ADDR": "http://localhost:4646" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Nomad MCP

Nomad 工作负载调度器 MCP，容器和单体应用调度，AI Agent 工作负载管理。
