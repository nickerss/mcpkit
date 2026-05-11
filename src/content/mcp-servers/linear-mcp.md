---
title: "Linear MCP"
name: linear-mcp
category: mcp-servers
tags: [linear, project-management, issues, sprints, team]
price: freemium
website: https://github.com/linear/mcp-linear
logo: 
description: Linear API MCP enabling AI Agents to manage Issues, Sprints, and Projects - ideal for automated task creation and status updates.
kit: ["ai-coding-agent", "devops-monitoring"]
kitRole: "Engineering task and sprint management for team-based AI coding"
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @linear/mcp-linear"
envVars: ["LINEAR_API_KEY", "LINEAR_TEAM_ID"]
configExample: |
  {
    "mcpServers": {
      "linear": {
        "command": "npx",
        "args": ["-y", "@linear/mcp-linear"],
        "env": { "LINEAR_API_KEY": "lin_api_xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Linear MCP

Linear API MCP enabling AI Agents to manage Issues, Sprints, and Projects - ideal for automated task creation and status updates.
