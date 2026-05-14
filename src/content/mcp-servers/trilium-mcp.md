---
title: "Trilium Notes MCP"
name: trilium-mcp
category: mcp-servers
tags: [trilium, notes, knowledge, hierarchical, self-hosted]
price: free
website: https://github.com/zadam/trilium
logo: 
description: "Trilium 分层笔记平台 MCP，层次化笔记和知识管理，本地优先，AI Agent 私密知识管理。"
descriptionEn: "Trilium hierarchical notes platform MCP for hierarchical notes and knowledge management, local-first for AI Agent private knowledge management."
evaluation:
  easeOfUse: 4
  security: 5
  activity: 3
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @trilium/mcp-server"
envVars: ["TRILIUM_URL"]
configExample: |
  {
    "mcpServers": { "trilium": { "command": "npx", "args": ["-y", "@trilium/mcp-server"], "env": { "TRILIUM_URL": "http://localhost:8080" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Trilium Notes MCP

Trilium 分层笔记平台 MCP，层次化笔记和知识管理，本地优先，AI Agent 私密知识管理。
