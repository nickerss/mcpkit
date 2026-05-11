---
title: "Supabase MCP"
name: supabase-mcp
category: mcp-servers
tags: [supabase, database, auth, storage, backend]
price: freemium
website: https://supabase.com
logo: 
description: Supabase MCP providing PostgreSQL database, Auth, Storage, and Edge Functions - complete BaaS backend for SaaS.
kit: ["ship-a-saas", "rag-research", "browser-automation"]
kitRole: "Database + Auth + Storage backend for SaaS products"
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "certified"
installCommand: "npx @supabase/mcp-server-supabase"
envVars: ["SUPABASE_ACCESS_TOKEN", "SUPABASE_PROJECT_REF"]
configExample: |
  {
    "mcpServers": {
      "supabase": {
        "command": "npx",
        "args": ["-y", "@supabase/mcp-server-supabase"],
        "env": { "SUPABASE_ACCESS_TOKEN": "sb-xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Supabase MCP

Supabase MCP providing PostgreSQL database, Auth, Storage, and Edge Functions - complete BaaS backend for SaaS.
