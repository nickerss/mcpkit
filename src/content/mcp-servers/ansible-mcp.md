---
title: "Ansible MCP"
name: ansible-mcp
category: mcp-servers
tags: [ansible, automation, devops, configuration, ssh]
price: free
website: https://www.ansible.com
logo: 
description: "Ansible 自动化工具 MCP，配置管理、应用部署和任务执行，AI Agent 无代理自动化运维。"
descriptionEn: "Ansible automation tool MCP for configuration management, application deployment and task execution for AI Agent agentless automation."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 3.9
certificationStatus: "reviewed"
installCommand: "npx @ansible/mcp-server"
envVars: ["ANSIBLE_HOST"]
configExample: |
  {
    "mcpServers": { "ansible": { "command": "npx", "args": ["-y", "@ansible/mcp-server"], "env": { "ANSIBLE_HOST": "localhost" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Ansible MCP

Ansible 自动化工具 MCP，配置管理、应用部署和任务执行，AI Agent 无代理自动化运维。
