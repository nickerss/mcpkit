---
title: "Firefox MCP"
name: firefox-mcp
category: mcp-servers
tags: [firefox, browser, automation, web, gecko]
price: free
website: https://github.com/mcp-community/firefox-mcp
logo: 
descriptionEn: "Firefox (Gecko) browser MCP for AI Agents providing Firefox automation capabilities - cross-browser testing and alternative to Chromium."
description: "Firefox (Gecko) 浏览器 MCP，为 AI Agent 提供 Firefox 自动化能力 - 跨浏览器测试和 Chromium 替代方案。"
kit: ["browser-automation"]
kitRole: "Cross-browser automation support and Firefox-specific testing"
evaluation:
  easeOfUse: 3
  security: 3
  activity: 2
  scenarioFit: 3
  overall: 2.8
certificationStatus: "pending"
installCommand: "npx @firefox/mcp-server"
envVars: ["FIREFOX_PATH"]
configExample: |
  {
    "mcpServers": {
      "firefox": {
        "command": "npx",
        "args": ["-y", "@firefox/mcp-server"],
        "env": { "FIREFOX_PATH": "/usr/bin/firefox" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Firefox MCP

Firefox (Gecko) browser MCP for AI Agents providing Firefox automation capabilities - cross-browser testing and alternative to Chromium.
