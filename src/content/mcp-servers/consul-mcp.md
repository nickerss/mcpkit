---
title: "Consul MCP"
name: consul-mcp
category: mcp-servers
tags: [consul, service, mesh, discovery, hashicorp]
price: free
website: https://consul.io
logo: 
description: "Consul 服务发现和配置平台 MCP，服务网格和健康检查，AI Agent 服务治理。"
descriptionEn: "Consul service discovery and configuration platform MCP for service mesh and health checks for AI Agent service governance."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @hashicorp/consul-mcp"
envVars: ["CONSUL_HTTP_ADDR"]
configExample: |
  {
    "mcpServers": { "consul": { "command": "npx", "args": ["-y", "@hashicorp/consul-mcp"], "env": { "CONSUL_HTTP_ADDR": "http://localhost:8500" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Consul MCP

Consul 服务发现和配置平台 MCP，服务网格和健康检查，AI Agent 服务治理。
