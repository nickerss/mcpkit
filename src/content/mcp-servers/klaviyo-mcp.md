---
title: "Klaviyo MCP Server"
name: "klaviyo-mcp"
category: "mcp-servers"
tags: ["klaviyo", "email-marketing", "marketing-automation", "sms", "ecommerce"]
price: "freemium"
website: "https://www.klaviyo.com"
logo: null
descriptionEn: "Connect AI agents to Klaviyo — automate email and SMS marketing flows, access customer profiles, segments, and campaign analytics."
description: "将 AI Agent 连接到 Klaviyo，自动化邮件和 SMS 营销流程，访问客户档案、分群和活动数据。"
descriptionEn: "Connect AI agents to Klaviyo — automate email and SMS marketing flows, access customer profiles, segments, and campaign analytics."
evaluation:
  easeOfUse: 4
  security: 4
  activity: 4
  scenarioFit: 5
  overall: 4.3
certificationStatus: "certified"
installCommand: "npx @klaviyo/mcp-server"
envVars: ["KLAVIYO_API_KEY"]
configExample: |
  {
    "mcpServers": {
      "klaviyo": {
        "command": "npx",
        "args": ["-y", "@klaviyo/mcp-server"],
        "env": {
          "KLAVIYO_API_KEY": "pk_xxxx"
        }
      }
    }
  }
featured: true
submittedAt: "2026-05-19T00:00:00.000Z"
---

# Klaviyo MCP Server

AI Agent 驱动的电商营销自动化平台。

## 核心功能

- **邮件营销自动化**：弃购召回、生日优惠、新品通知
- **SMS 营销**：配合邮件的多渠道自动化
- **客户分群**：基于行为和属性的动态人群
- **活动数据**：AI 分析营销 ROI

## 典型场景

- 购物车遗弃自动触发挽回邮件
- 首次购买后自动触发感谢 + 追加销售序列
- 沉睡客户再激活自动化
