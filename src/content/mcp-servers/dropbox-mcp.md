---
title: "Dropbox MCP"
name: dropbox-mcp
category: mcp-servers
tags: [dropbox, storage, files, backup, sync]
price: freemium
website: https://dropbox.com
logo: 
description: "Dropbox 云存储 MCP，文件同步和存储管理，简单易用的个人和团队文件备份方案。"
descriptionEn: "Dropbox cloud storage MCP for file sync and storage management — simple personal and team file backup solution."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "recommended"
installCommand: "npx @dropbox/mcp-server"
envVars: ["DROPBOX_ACCESS_TOKEN"]
configExample: |
  {
    "mcpServers": { "dropbox": { "command": "npx", "args": ["-y", "@dropbox/mcp-server"], "env": { "DROPBOX_ACCESS_TOKEN": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Dropbox MCP

Dropbox 云存储 MCP，文件同步和存储管理，简单易用的个人和团队文件备份方案。
