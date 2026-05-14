---
title: "WordPress MCP"
name: wordpress-mcp
category: mcp-servers
tags: [wordpress, cms, blog, content, website]
price: free
website: https://wordpress.org
logo: 
description: "WordPress CMS 平台 MCP，内容管理和网站构建，AI Agent WordPress 管理。"
descriptionEn: "WordPress CMS platform MCP for content management and website building for AI Agent WordPress management."
evaluation:
  easeOfUse: 4
  security: 3
  activity: 5
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @wordpress/mcp-server"
envVars: ["WORDPRESS_URL"]
configExample: |
  {
    "mcpServers": { "wordpress": { "command": "npx", "args": ["-y", "@wordpress/mcp-server"], "env": { "WORDPRESS_URL": "https://myblog.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# WordPress MCP

WordPress CMS 平台 MCP，内容管理和网站构建，AI Agent WordPress 管理。
