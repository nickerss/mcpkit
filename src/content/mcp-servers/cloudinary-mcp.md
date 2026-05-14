---
title: "Cloudinary MCP"
name: cloudinary-mcp
category: mcp-servers
tags: [cloudinary, images, video, cdn, transformation]
price: freemium
website: https://cloudinary.com
logo: 
description: "Cloudinary 媒体管理 MCP，图片和视频上传、转换、CDN 分发，AI 应用媒体处理全套方案。"
descriptionEn: "Cloudinary media management MCP for image/video upload, transformation and CDN delivery — full media processing for AI apps."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 4
  security: 4
  activity: 5
  scenarioFit: 4
  overall: 4.4
certificationStatus: "recommended"
installCommand: "npx @cloudinary/mcp-server"
envVars: ["CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRET"]
configExample: |
  {
    "mcpServers": { "cloudinary": { "command": "npx", "args": ["-y", "@cloudinary/mcp-server"], "env": { "CLOUDINARY_CLOUD_NAME": "mycloud", "CLOUDINARY_API_KEY": "xxx", "CLOUDINARY_API_SECRET": "xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Cloudinary MCP

Cloudinary 媒体管理 MCP，图片和视频上传、转换、CDN 分发，AI 应用媒体处理全套方案。
