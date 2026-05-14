---
title: "Kind MCP"
name: kind-mcp
category: mcp-servers
tags: [kind, kubernetes, local, testing, docker]
price: free
website: https://kind.sigs.k8s.io
logo: 
description: "Kind Kubernetes 本地测试集群工具 MCP，Docker 内运行 K8s，AI Agent 本地 K8s 测试。"
descriptionEn: "Kind Kubernetes local testing cluster tool MCP running K8s in Docker for AI Agent local K8s testing."
evaluation:
  easeOfUse: 5
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.3
certificationStatus: "pending"
installCommand: "npx @kind/mcp-server"
envVars: []
configExample: |
  {
    "mcpServers": { "kind": { "command": "npx", "args": ["-y", "@kind/mcp-server"] } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Kind MCP

Kind Kubernetes 本地测试集群工具 MCP，Docker 内运行 K8s，AI Agent 本地 K8s 测试。
