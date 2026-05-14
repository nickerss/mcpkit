---
title: "CircleCI MCP"
name: circleci-mcp
category: mcp-servers
tags: [circleci, ci, cd, pipeline, automation]
price: freemium
website: https://circleci.com
logo: 
description: "CircleCI 持续集成平台 MCP，自动化构建、测试和部署，支持 Docker 和 macOS 构建环境。"
descriptionEn: "CircleCI continuous integration platform MCP automating build, test and deploy with Docker and macOS build environments."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @circleci/mcp-server"
envVars: ["CIRCLECI_TOKEN"]
configExample: |
  {
    "mcpServers": { "circleci": { "command": "npx", "args": ["-y", "@circleci/mcp-server"], "env": { "CIRCLECI_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# CircleCI MCP

CircleCI 持续集成平台 MCP，自动化构建、测试和部署，支持 Docker 和 macOS 构建环境。
