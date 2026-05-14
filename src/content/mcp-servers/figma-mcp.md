---
title: "Figma MCP"
name: figma-mcp
category: mcp-servers
tags: [figma, design, collaboration, prototyping, ui]
price: freemium
website: https://figma.com
logo: 
description: "Figma 设计协作平台 MCP，读取和创建设计稿、管理组件和原型，AI Agent 设计-开发工作流。"
descriptionEn: "Figma design collaboration platform MCP for reading/creating designs, managing components and prototypes for AI Agent design-dev workflows."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.6
certificationStatus: "recommended"
installCommand: "npx @figma/mcp-server"
envVars: ["FIGMA_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "figma": { "command": "npx", "args": ["-y", "@figma/mcp-server"], "env": { "FIGMA_ACCESS_TOKEN": "figd-xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Figma MCP

Figma 设计协作平台 MCP，读取和创建设计稿、管理组件和原型，AI Agent 设计-开发工作流。
