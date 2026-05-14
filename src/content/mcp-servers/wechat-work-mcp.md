---
title: "WeChat Work MCP"
name: wechat-work-mcp
category: mcp-servers
tags: [wechat, work, messaging, enterprise, china]
price: free
website: https://developer.work.weixin.qq.com
logo: 
description: "企业微信 MCP，企业内部沟通和应用集成，AI Agent 中国企业协作。"
descriptionEn: "WeChat Work MCP for enterprise internal communication and app integration for AI Agent China enterprise collaboration."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @wechat/work-mcp"
envVars: ["WECHAT_WORK_CORP_ID", "WECHAT_WORK_AGENT_ID"]
configExample: |
  {
    "mcpServers": { "wechat-work": { "command": "npx", "args": ["-y", "@wechat/work-mcp"], "env": { "WECHAT_WORK_CORP_ID": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# WeChat Work MCP

企业微信 MCP，企业内部沟通和应用集成，AI Agent 中国企业协作。
