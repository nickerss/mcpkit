---
title: "Playwright MCP (Browser)"
name: playwright-browser-mcp
category: mcp-servers
tags: [playwright, browser, automation, web, scraping]
price: free
website: https://github.com/microsoft/playwright-mcp
logo: 
descriptionEn: "Playwright browser control MCP for AI Agents - headless browser control with form filling, navigation, and screenshot capture."
description: "Playwright 浏览器控制 MCP，让 AI Agent 操作浏览器 - 无头浏览器控制，支持表单填写、导航和截图。"
kit: ["browser-automation"]
kitRole: "Browser instance control for web scraping and UI automation"
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "recommended"
installCommand: "npx @microsoft/playwright-mcp-server"
envVars: ["PLAYWRIGHT_BROWSERS_PATH"]
configExample: |
  {
    "mcpServers": {
      "playwright": {
        "command": "npx",
        "args": ["-y", "@microsoft/playwright-mcp-server"]
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Playwright MCP (Browser)

Playwright browser control MCP for AI Agents - headless browser control with form filling, navigation, and screenshot capture.
