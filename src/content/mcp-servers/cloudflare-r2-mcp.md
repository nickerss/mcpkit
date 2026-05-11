---
title: "Cloudflare R2 MCP"
name: cloudflare-r2-mcp
category: mcp-servers
tags: [cloudflare, r2, storage, cdn, s3-compatible]
price: freemium
website: https://developers.cloudflare.com/r2
logo: 
description: Cloudflare R2 object storage MCP with S3-compatible API, no egress fees, and global edge delivery for SaaS file assets.
kit: ["ship-a-saas"]
kitRole: "File storage with zero egress costs for SaaS products"
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 3.9
certificationStatus: "recommended"
installCommand: "npx @cloudflare/mcp-server-r2"
envVars: ["CLOUDFLARE_API_TOKEN", "R2_ACCOUNT_ID", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY"]
configExample: |
  {
    "mcpServers": {
      "r2": {
        "command": "npx",
        "args": ["-y", "@cloudflare/mcp-server-r2"],
        "env": {
          "R2_ACCOUNT_ID": "xxx",
          "R2_ACCESS_KEY_ID": "yyy",
          "R2_SECRET_ACCESS_KEY": "zzz"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Cloudflare R2 MCP

Cloudflare R2 object storage MCP with S3-compatible API, no egress fees, and global edge delivery for SaaS file assets.
