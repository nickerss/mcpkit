---
title: "Twitter/X MCP"
name: twitter-mcp
category: mcp-servers
tags: [twitter, x, social, api, messaging]
price: freemium
website: https://developer.twitter.com
logo: 
description: "Twitter/X 社交平台 MCP，社交媒体发布和数据分析，AI Agent 社交媒体管理。"
descriptionEn: "Twitter/X social platform MCP for social media posting and data analysis for AI Agent social media management."
evaluation:
  easeOfUse: 3
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.1
certificationStatus: "pending"
installCommand: "npx @twitter/mcp-server"
envVars: ["TWITTER_API_KEY", "TWITTER_API_SECRET"]
configExample: |
  {
    "mcpServers": { "twitter": { "command": "npx", "args": ["-y", "@twitter/mcp-server"], "env": { "TWITTER_API_KEY": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Twitter/X MCP

Twitter/X 社交平台 MCP，社交媒体发布和数据分析，AI Agent 社交媒体管理。
