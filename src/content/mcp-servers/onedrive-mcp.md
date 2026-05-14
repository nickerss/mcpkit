---
title: "OneDrive MCP"
name: onedrive-mcp
category: mcp-servers
tags: [onedrive, microsoft, storage, files, office]
price: freemium
website: https://onedrive.live.com
logo: 
description: "Microsoft OneDrive 云存储平台 MCP，文件存储和 Microsoft 集成，AI Agent 文件管理。"
descriptionEn: "Microsoft OneDrive cloud storage platform MCP for file storage and Microsoft integration for AI Agent file management."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4.4
certificationStatus: "pending"
installCommand: "npx @microsoft/onedrive-mcp"
envVars: ["MS_GRAPH_TENANT_ID", "MS_GRAPH_CLIENT_ID"]
configExample: |
  {
    "mcpServers": { "onedrive": { "command": "npx", "args": ["-y", "@microsoft/onedrive-mcp"], "env": { "MS_GRAPH_CLIENT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# OneDrive MCP

Microsoft OneDrive 云存储平台 MCP，文件存储和 Microsoft 集成，AI Agent 文件管理。
