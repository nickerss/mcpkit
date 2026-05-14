---
title: "Box MCP"
name: box-mcp
category: mcp-servers
tags: [box, storage, enterprise, files, compliance]
price: paid
website: https://box.com
logo: 
description: "Box 企业云存储 MCP，适合企业的文件存储和协作平台，支持合规性要求高的行业。"
descriptionEn: "Box enterprise cloud storage MCP — enterprise file storage and collaboration platform with high compliance requirements support."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "pending"
installCommand: "npx @box/mcp-server"
envVars: ["BOX_CLIENT_ID", "BOX_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "box": { "command": "npx", "args": ["-y", "@box/mcp-server"], "env": { "BOX_CLIENT_ID": "xxx", "BOX_CLIENT_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Box MCP

Box 企业云存储 MCP，适合企业的文件存储和协作平台，支持合规性要求高的行业。
