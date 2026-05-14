---
title: "Buildkite MCP"
name: buildkite-mcp
category: mcp-servers
tags: [buildkite, ci-cd, pipelines, agent, automation]
price: free
website: https://buildkite.com
logo: 
description: "Buildkite CI/CD 平台 MCP，自托管 Agent 和流水线，AI Agent 灵活 CI/CD。"
descriptionEn: "Buildkite CI/CD platform MCP with self-hosted agents and pipelines for AI Agent flexible CI/CD."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @buildkite/mcp-server"
envVars: ["BUILDKITE_TOKEN"]
configExample: |
  {
    "mcpServers": { "buildkite": { "command": "npx", "args": ["-y", "@buildkite/mcp-server"], "env": { "BUILDKITE_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Buildkite MCP

Buildkite CI/CD 平台 MCP，自托管 Agent 和流水线，AI Agent 灵活 CI/CD。
