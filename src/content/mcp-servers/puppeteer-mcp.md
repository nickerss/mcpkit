---
title: "Puppeteer MCP"
name: puppeteer-mcp
category: mcp-servers
tags: [puppeteer, browser, chrome, automation, scraping]
price: free
website: https://github.com/chenxiaochun/mcp-puppeteer
logo: 
description: "Puppeteer 无头浏览器 MCP，AI Agent 控制 Chrome/Chromium 执行复杂网页操作，支持登录态和 SPA 应用。"
descriptionEn: "Puppeteer headless browser MCP for AI Agent control of Chrome/Chromium executing complex web operations with login state and SPA support."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 3
  security: 3
  activity: 4
  scenarioFit: 4
  overall: 3.5
certificationStatus: "pending"
installCommand: "npx @puppeteer/mcp-server"
envVars: ["PUPPETEER_EXECUTABLE_PATH"]
configExample: |
  {
    "mcpServers": { "puppeteer": { "command": "npx", "args": ["-y", "@puppeteer/mcp-server"], "env": { "PUPPETEER_EXECUTABLE_PATH": "/usr/bin/chromium" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Puppeteer MCP

Puppeteer 无头浏览器 MCP，AI Agent 控制 Chrome/Chromium 执行复杂网页操作，支持登录态和 SPA 应用。
