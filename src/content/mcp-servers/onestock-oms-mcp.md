---
title: "OneStock OMS MCP Server"
name: "onestock-oms-mcp"
category: "mcp-servers"
tags: ["onestock", "oms", "inventory", "order-management", "fulfillment"]
price: "paid"
website: "https://www.onestock-retail.com"
descriptionEn: "AI agents access real-time inventory, delivery promises, and order management through OneStock unified OMS."
description: "AI Agent 通过 OneStock 统一 OMS 访问实时库存、履约承诺和订单管理，打造无缝购物体验。"
evaluation:
  easeOfUse: 3
  security: 4
  activity: 3
  scenarioFit: 4
  overall: 3.7
certificationStatus: "recommended"
installCommand: "npx @onestock/oms-mcp-server"
envVars: ["ONESTOCK_API_URL", "ONESTOCK_API_KEY"]
configExample: |
  {
    "mcpServers": {
      "onestock-oms": {
        "command": "npx",
        "args": ["-y", "@onestock/oms-mcp-server"],
        "env": {
          "ONESTOCK_API_URL": "https://api.onestock.com",
          "ONESTOCK_API_KEY": "xxx"
        }
      }
    }
  }
featured: false
submittedAt: "2026-05-19T00:00:00.000Z"
---

# OneStock OMS MCP Server

统一订单管理系统，为 AI Agent 提供全渠道库存和履约能力。

## 核心功能

- **实时库存**：多渠道库存统一视图
- **履约承诺**：AI 自动计算并承诺最准配送时间
- **订单修改**：AI 驱动订单变更和退货处理
- **库存分配**：智能分配最优仓库 / 门店发货
