---
title: "Chef Infra MCP"
name: chef-infra-mcp
category: mcp-servers
tags: [chef, configuration, management, infrastructure, ruby]
price: free
website: https://chef.io
logo: 
description: "Chef Infra 配置管理平台 MCP，Ruby 配置即代码，AI Agent Chef 配置管理。"
descriptionEn: "Chef Infra configuration management platform MCP for Ruby configuration-as-code for AI Agent Chef configuration management."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 3.7
certificationStatus: "pending"
installCommand: "npx @chef/infra-mcp"
envVars: ["CHEF_SERVER_URL"]
configExample: |
  {
    "mcpServers": { "chef-infra": { "command": "npx", "args": ["-y", "@chef/infra-mcp"], "env": { "CHEF_SERVER_URL": "https://chef-server.example.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Chef Infra MCP

Chef Infra 配置管理平台 MCP，Ruby 配置即代码，AI Agent Chef 配置管理。
