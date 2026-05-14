---
title: "Puppet MCP"
name: puppet-mcp
category: mcp-servers
tags: [puppet, configuration, management, infrastructure, declarative]
price: free
website: https://puppet.com
logo: 
description: "Puppet 配置管理平台 MCP，声明式基础设施管理，AI Agent Puppet 配置管理。"
descriptionEn: "Puppet configuration management platform MCP for declarative infrastructure management for AI Agent Puppet configuration management."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @puppet/mcp-server"
envVars: ["PUPPET_MASTER_URL"]
configExample: |
  {
    "mcpServers": { "puppet": { "command": "npx", "args": ["-y", "@puppet/mcp-server"], "env": { "PUPPET_MASTER_URL": "puppet://puppetmaster:8140" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Puppet MCP

Puppet 配置管理平台 MCP，声明式基础设施管理，AI Agent Puppet 配置管理。
