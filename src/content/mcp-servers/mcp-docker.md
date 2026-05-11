---
title: "Docker MCP"
name: docker-mcp
category: mcp-servers
tags: [docker, container, devops, infrastructure, ci-cd]
price: free
website: https://github.com/modelcontextprotocol/servers
logo: 
descriptionEn: "Docker container management MCP for AI Agents to control containers, images, and Docker Compose - core infrastructure tool for DevOps automation."
description: "Docker 容器管理 MCP，让 AI Agent 控制容器、镜像和 Docker Compose - DevOps 自动化的核心基础设施工具。"
kit: ["ai-coding-agent", "devops-monitoring"]
kitRole: "Container orchestration and environment management for AI coding Agents"
evaluation:
  easeOfUse: 3
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 3.7
certificationStatus: "reviewed"
installCommand: "npx @modelcontextprotocol/server-docker"
envVars: ["DOCKER_HOST"]
configExample: |
  {
    "mcpServers": {
      "docker": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-docker"]
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Docker MCP

Docker container management MCP for AI Agents to control containers, images, and Docker Compose - core infrastructure tool for DevOps automation.
