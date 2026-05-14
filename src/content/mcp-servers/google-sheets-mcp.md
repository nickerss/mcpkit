---
title: "Google Sheets MCP"
name: google-sheets-mcp
category: mcp-servers
tags: [google, sheets, spreadsheet, data, collaboration]
price: freemium
website: https://sheets.google.com
logo: 
description: "Google Sheets 在线电子表格 MCP，读取和写入数据，AI Agent 数据处理。"
descriptionEn: "Google Sheets online spreadsheet MCP for reading and writing data for AI Agent data processing."
evaluation:
  easeOfUse: 5
  security: 5
  activity: 5
  scenarioFit: 5
  overall: 4.6
certificationStatus: "certified"
installCommand: "npx @google/sheets-mcp"
envVars: ["GOOGLE_SHEETS_CREDENTIALS"]
configExample: |
  {
    "mcpServers": { "google-sheets": { "command": "npx", "args": ["-y", "@google/sheets-mcp"], "env": { "GOOGLE_SHEETS_CREDENTIALS": "/path/to/credentials.json" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Google Sheets MCP

Google Sheets 在线电子表格 MCP，读取和写入数据，AI Agent 数据处理。
