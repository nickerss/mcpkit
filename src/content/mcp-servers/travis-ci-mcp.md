---
title: "Travis CI MCP"
name: travis-ci-mcp
category: mcp-servers
tags: [travis, ci-cd, open-source, github, testing]
price: free
website: https://travis-ci.com
logo: 
description: "Travis CI 开源 CI/CD 平台 MCP，开源项目 CI/CD，AI Agent Travis CI。"
descriptionEn: "Travis CI open-source CI/CD platform MCP for open-source project CI/CD for AI Agent Travis CI."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @travisci/mcp-server"
envVars: ["TRAVIS_API_TOKEN"]
configExample: |
  {
    "mcpServers": { "travis-ci": { "command": "npx", "args": ["-y", "@travisci/mcp-server"], "env": { "TRAVIS_API_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Travis CI MCP

Travis CI 开源 CI/CD 平台 MCP，开源项目 CI/CD，AI Agent Travis CI。
