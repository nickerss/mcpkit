---
title: "Google Drive MCP"
name: google-drive-mcp
category: mcp-servers
tags: [google, drive, storage, files, collaboration]
price: freemium
website: https://drive.google.com
logo: 
description: "Google Drive 云端存储 MCP，读取和写入文件、管理权限和搜索文档，团队协作存储必备。"
descriptionEn: "Google Drive cloud storage MCP for reading/writing files, managing permissions and searching docs — essential for team collaboration storage."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @google/drive-mcp"
envVars: ["GOOGLE_DRIVE_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "google-drive": { "command": "npx", "args": ["-y", "@google/drive-mcp"], "env": { "GOOGLE_DRIVE_CREDENTIALS": "/path/to/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Drive MCP

Google Drive 云端存储 MCP，读取和写入文件、管理权限和搜索文档，团队协作存储必备。
