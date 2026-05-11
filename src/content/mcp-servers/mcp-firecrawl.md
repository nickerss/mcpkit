---
title: "Firecrawl MCP"
name: firecrawl-mcp
category: mcp-servers
tags: [firecrawl, scraping, web, crawl, rag]
price: freemium
website: https://firecrawl.dev
logo: 
description: Intelligent web scraping MCP with JavaScript rendering and deep crawling - extracts clean Markdown from any website for RAG pipelines.
kit: ["rag-research"]
kitRole: "Deep web content extraction for RAG data ingestion"
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 5
  overall: 4.5
certificationStatus: "certified"
installCommand: "npx @firecrawl/mcp-server"
envVars: ["FIRECRAWL_API_KEY"]
configExample: |
  {
    "mcpServers": {
      "firecrawl": {
        "command": "npx",
        "args": ["-y", "@firecrawl/mcp-server"],
        "env": { "FIRECRAWL_API_KEY": "fc-xxx" }
      }
    }
  }
featured: false
submittedAt: "2026-05-11T00:00:00.000Z"
---

# Firecrawl MCP

Intelligent web scraping MCP with JavaScript rendering and deep crawling - extracts clean Markdown from any website for RAG pipelines.
