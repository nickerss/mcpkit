---
title: "Terraform MCP"
name: terraform-mcp
category: mcp-servers
tags: [terraform, iac, infrastructure, aws, hcl]
price: free
website: https://www.terraform.io
logo: 
description: "HashiCorp Terraform IaC 工具 MCP，AI Agent 可自动化基础设施创建、更新和销毁，支持多云管理。"
descriptionEn: "HashiCorp Terraform IaC tool MCP for AI Agent automated infrastructure creation, update and destruction with multi-cloud management."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.9
certificationStatus: "recommended"
installCommand: "npx @terraform/mcp-server"
envVars: ["TF_STATE_BACKEND"]
configExample: |
  {
    "mcpServers": { "terraform": { "command": "npx", "args": ["-y", "@terraform/mcp-server"], "env": { "TF_STATE_BACKEND": "s3" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Terraform MCP

HashiCorp Terraform IaC 工具 MCP，AI Agent 可自动化基础设施创建、更新和销毁，支持多云管理。
