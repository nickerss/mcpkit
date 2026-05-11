---
title: "Chromium MCP"
name: chromium-mcp
category: mcp-servers
tags: [chromium, browser, automation, web, headless]
price: free
website: https://github.com/mcp-community/chromium-mcp
logo: 
description: Headless Chromium browser MCP for AI Agents to control Chrome/Chromium - form filling, data scraping, and automated UI testing.
kit: ["browser-automation"]
kitRole: "Browser instance control for enterprise-scale web automation"
evaluation:
  easeOfUse: 3
  security: 3
  activity: 3
  scenarioFit: 4
  overall: 3.3
certificationStatus: "pending"
installCommand: "npx @chromium/mcp-server"
envVars: ["CHROMIUM_PATH"]
configExample: |
  {
    "mcpServers": {
      "chromium": {
        "command": "npx",
        "args": ["-y", "@chromium/mcp-server"],
        "env": { "CHROMIUM_PATH": "/usr/bin/chromium" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Chromium MCP

Headless Chromium browser MCP for AI Agents to control Chrome/Chromium - form filling, data scraping, and automated UI testing.
