---
title: "HAProxy MCP"
name: haproxy-mcp
category: mcp-servers
tags: [haproxy, load-balancer, proxy, tcp, http]
price: free
website: https://haproxy.org
logo: 
description: "HAProxy 高可用负载均衡器 MCP，TCP/HTTP 负载均衡，AI Agent 流量分发。"
descriptionEn: "HAProxy high availability load balancer MCP for TCP/HTTP load balancing for AI Agent traffic distribution."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @haproxy/mcp-server"
envVars: []
configExample: |
  {
    "mcpServers": { "haproxy": { "command": "npx", "args": ["-y", "@haproxy/mcp-server"] } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# HAProxy MCP

HAProxy 高可用负载均衡器 MCP，TCP/HTTP 负载均衡，AI Agent 流量分发。
