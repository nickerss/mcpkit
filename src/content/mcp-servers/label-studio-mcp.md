---
title: "Label Studio MCP"
name: label-studio-mcp
category: mcp-servers
tags: [label-studio, data-labelling, open-source, ml, annotation]
price: free
website: https://labelstud.io
logo: 
description: "Label Studio 开源数据标注平台 MCP，灵活数据标注和 ML 支持，AI Agent 开源标注。"
descriptionEn: "Label Studio open-source data labelling platform MCP with flexible data annotation and ML support for AI Agent open-source annotation."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @label-studio/mcp-server"
envVars: ["LABEL_STUDIO_URL"]
configExample: |
  {
    "mcpServers": { "label-studio": { "command": "npx", "args": ["-y", "@label-studio/mcp-server"], "env": { "LABEL_STUDIO_URL": "http://localhost:8080" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Label Studio MCP

Label Studio 开源数据标注平台 MCP，灵活数据标注和 ML 支持，AI Agent 开源标注。
