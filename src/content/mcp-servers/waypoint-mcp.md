---
title: "Waypoint MCP"
name: waypoint-mcp
category: mcp-servers
tags: [waypoint, deployment, hashicorp, workflow, cd]
price: free
website: https://waypointproject.io
logo: 
description: "Waypoint 应用部署平台 MCP，从构建到部署的统一工作流，AI Agent 应用部署。"
descriptionEn: "Waypoint application deployment platform MCP for unified build-to-deploy workflow for AI Agent application deployment."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @hashicorp/waypoint-mcp"
envVars: ["WAYPOINT_SERVER"]
configExample: |
  {
    "mcpServers": { "waypoint": { "command": "npx", "args": ["-y", "@hashicorp/waypoint-mcp"], "env": { "WAYPOINT_SERVER": "https://waypoint.mycompany.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Waypoint MCP

Waypoint 应用部署平台 MCP，从构建到部署的统一工作流，AI Agent 应用部署。
