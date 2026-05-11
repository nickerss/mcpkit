---
title: "Cloudflare MCP"
name: cloudflare-mcp
category: mcp-servers
tags: [cloudflare, dns, workers, deployment, devops]
price: freemium
website: https://developers.cloudflare.com
logo: 
description: Cloudflare comprehensive MCP for AI Agents to manage DNS, Workers, Pages, and R2 - full cloud infrastructure control for DevOps.
kit: ["devops-monitoring"]
kitRole: "Cloud infrastructure management and deployment automation"
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "reviewed"
installCommand: "npx @cloudflare/mcp-server"
envVars: ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID"]
configExample: |
  {
    "mcpServers": {
      "cloudflare": {
        "command": "npx",
        "args": ["-y", "@cloudflare/mcp-server"],
        "env": {
          "CLOUDFLARE_API_TOKEN": "cf_xxx",
          "CLOUDFLARE_ACCOUNT_ID": "xxx"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Cloudflare MCP

Cloudflare comprehensive MCP for AI Agents to manage DNS, Workers, Pages, and R2 - full cloud infrastructure control for DevOps.
