---
title: "Playwright MCP"
name: playwright-mcp
category: mcp-servers
tags: [playwright, browser, testing, automation, e2e]
price: free
website: https://github.com/microsoft/playwright-mcp
logo: 
description: Microsoft Playwright MCP for AI Agents to control browsers - click, fill forms, navigate, capture screenshots for automated testing and web scraping.
kit: ["ai-coding-agent", "browser-automation"]
kitRole: "Browser automation for testing and web interaction tasks"
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
        "args": ["-y", "@microsoft/playwright-mcp-server"],
        "env": { "PLAYWRIGHT_BROWSERS_PATH": "/tmp/playwright" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Playwright MCP

Microsoft Playwright MCP for AI Agents to control browsers - click, fill forms, navigate, capture screenshots for automated testing and web scraping.
