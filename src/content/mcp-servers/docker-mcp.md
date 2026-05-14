---
title: "Docker MCP"
name: docker-mcp
category: mcp-servers
tags: [docker, containers, devops, images, registry]
price: free
website: https://docker.com
logo: 
description: "Docker 容器平台 MCP，镜像管理和容器操作，AI Agent 容器管理。"
descriptionEn: "Docker container platform MCP for image management and container operations for AI Agent container management."
evaluation:
  easeOfUse: 4
  security: 3
  activity: 5
  scenarioFit: 5
  overall: 4.2
certificationStatus: "certified"
installCommand: "npx @docker/mcp-server"
envVars: ["DOCKER_HOST"]
configExample: |
  {
    "mcpServers": { "docker": { "command": "npx", "args": ["-y", "@docker/mcp-server"], "env": { "DOCKER_HOST": "unix:///var/run/docker.sock" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Docker MCP

Docker 容器平台 MCP，镜像管理和容器操作，AI Agent 容器管理。
