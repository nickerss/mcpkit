---
title: "Reddit MCP"
name: reddit-mcp
category: mcp-servers
tags: [reddit, social, community, api, content]
price: free
website: https://www.reddit.com/dev/api
logo: 
description: "Reddit 社区平台 MCP，社区管理和内容爬取，AI Agent 社区运营。"
descriptionEn: "Reddit community platform MCP for community management and content scraping for AI Agent community operations."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @reddit/mcp-server"
envVars: ["REDDIT_CLIENT_ID", "REDDIT_CLIENT_SECRET"]
configExample: |
  {
    "mcpServers": { "reddit": { "command": "npx", "args": ["-y", "@reddit/mcp-server"], "env": { "REDDIT_CLIENT_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Reddit MCP

Reddit 社区平台 MCP，社区管理和内容爬取，AI Agent 社区运营。
