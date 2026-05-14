---
title: "SaltStack MCP"
name: saltstack-mcp
category: mcp-servers
tags: [saltstack, configuration, management, automation, python]
price: free
website: https://saltproject.io
logo: 
description: "SaltStack 配置管理和自动化平台 MCP，Python 驱动的配置管理，AI Agent SaltStack 自动化。"
descriptionEn: "SaltStack configuration management and automation platform MCP for Python-driven configuration management for AI Agent SaltStack automation."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.8
certificationStatus: "pending"
installCommand: "npx @saltstack/mcp-server"
envVars: ["SALT_MASTER_URL"]
configExample: |
  {
    "mcpServers": { "saltstack": { "command": "npx", "args": ["-y", "@saltstack/mcp-server"], "env": { "SALT_MASTER_URL": "salt://master" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# SaltStack MCP

SaltStack 配置管理和自动化平台 MCP，Python 驱动的配置管理，AI Agent SaltStack 自动化。
