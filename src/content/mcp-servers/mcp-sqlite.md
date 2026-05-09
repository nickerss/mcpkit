---
title: mcp-sqlite
name: mcp-sqlite
category: mcp-server
subcategory: database
tags: [sqlite, database, local]
price: free
website: https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite
logo: /logos/mcp-sqlite.png
description: 一个轻量级的本地 SQLite MCP Server，无需额外配置即可连接 SQLite 数据库。
scenarios:
  - 本地数据库调试
  - 离线数据查询
  - 小型项目数据存储
installCommand: npm install -g @modelcontextprotocol/server-sqlite
config: |
  {
    "mcpServers": {
      "sqlite": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-sqlite"]
      }
    }
  }
relatedTools: [mcp-postgres, mcp-mongodb]
featured: true
submittedAt: "2026-05-01"
---

mcp-sqlite 是官方 MCP 团队提供的 SQLite 数据库连接器，让 AI Agent 能够直接查询和操作本地 SQLite 数据库。
