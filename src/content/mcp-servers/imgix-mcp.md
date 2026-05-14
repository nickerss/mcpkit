---
title: "Imgix MCP"
name: imgix-mcp
category: mcp-servers
tags: [imgix, images, cdn, optimization, api]
price: paid
website: https://imgix.com
logo: 
description: "Imgix 图片 CDN 和实时处理 MCP，高性能图片转换和优化，全球边缘分发。"
descriptionEn: "Imgix image CDN and real-time processing MCP for high-performance image transformation and optimization with global edge delivery."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 4
  overall: 4.1
certificationStatus: "reviewed"
installCommand: "npx @imgix/mcp-server"
envVars: ["IMGIX_DOMAIN", "IMGIX_TOKEN"]
configExample: |
  {
    "mcpServers": { "imgix": { "command": "npx", "args": ["-y", "@imgix/mcp-server"], "env": { "IMGIX_DOMAIN": "myimages.imgix.net", "IMGIX_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Imgix MCP

Imgix 图片 CDN 和实时处理 MCP，高性能图片转换和优化，全球边缘分发。
