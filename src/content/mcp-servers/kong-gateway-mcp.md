---
title: "Kong Gateway MCP"
name: kong-gateway-mcp
category: mcp-servers
tags: [kong, api-gateway, gateway, api-management, nginx]
price: free
website: https://konghq.com/kong-gateway
logo: 
description: "Kong API Gateway 开源版 MCP，API 管理、认证和流量控制，AI Agent API 集成。"
descriptionEn: "Kong API Gateway open-source MCP for API management, authentication and traffic control for AI Agent API integration."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @kong/mcp-server"
envVars: ["KONG_ADMIN_URL"]
configExample: |
  {
    "mcpServers": { "kong-gateway": { "command": "npx", "args": ["-y", "@kong/mcp-server"], "env": { "KONG_ADMIN_URL": "http://localhost:8001" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Kong Gateway MCP

Kong API Gateway 开源版 MCP，API 管理、认证和流量控制，AI Agent API 集成。
