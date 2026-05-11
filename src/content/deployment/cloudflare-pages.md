---
title: "Cloudflare Pages"
name: cloudflare-pages-mcp
category: deployment
tags: [cloudflare, hosting, cdn, deployment, frontend]
price: free
website: https://pages.cloudflare.com
logo: 
description: Cloudflare Pages deployment platform with global CDN, one-click deploy from GitHub, and seamless Workers integration.
kit: ["ship-a-saas"]
kitRole: "One-click deployment and global CDN for SaaS frontends"
evaluation:
  easeOfUse: 5
  security: 5
  activity: 4
  scenarioFit: 5
  overall: 4.8
certificationStatus: "recommended"
installCommand: "npx @cloudflare/mcp-server-pages"
envVars: ["CLOUDFLARE_API_TOKEN", "CLOUDFLARE_ACCOUNT_ID"]
configExample: |
  {
    "mcpServers": {
      "cloudflare-pages": {
        "command": "npx",
        "args": ["-y", "@cloudflare/mcp-server-pages"],
        "env": { "CLOUDFLARE_API_TOKEN": "cf_xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Cloudflare Pages

Cloudflare Pages deployment platform with global CDN, one-click deploy from GitHub, and seamless Workers integration.
