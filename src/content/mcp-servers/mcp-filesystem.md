---
title: "Filesystem MCP"
name: filesystem-mcp
category: mcp-servers
tags: [filesystem, local, storage, io, devtools]
price: free
website: https://github.com/modelcontextprotocol/servers
logo: 
descriptionEn: "Local filesystem operation MCP for reading, writing, and managing files - essential for AI Agents to interact with project code."
description: "本地文件系统操作 MCP，读写管理文件 - AI Agent 与项目代码交互的必备工具。"
kit: ["ai-coding-agent", "browser-automation", "devops-monitoring"]
kitRole: "Local file read/write access for code editing and config management"
evaluation:
  easeOfUse: 5
  security: 2
  activity: 5
  scenarioFit: 5
  overall: 4.3
certificationStatus: "recommended"
installCommand: "npx @modelcontextprotocol/server-filesystem /path/to/project"
envVars: []
configExample: |
  {
    "mcpServers": {
      "filesystem": {
        "command": "npx",
        "args": ["-y", "@modelcontextprotocol/server-filesystem", "/Users/me/projects"]
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Filesystem MCP

Local filesystem operation MCP for reading, writing, and managing files - essential for AI Agents to interact with project code.
