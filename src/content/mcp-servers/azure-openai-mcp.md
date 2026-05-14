---
title: "Azure OpenAI MCP"
name: azure-openai-mcp
category: mcp-servers
tags: [azure, openai, microsoft, gpt, enterprise]
price: paid
website: https://azure.microsoft.com/en-us/products/ai-services/openai-service
logo: 
description: "Azure OpenAI Service MCP，企业级 GPT-4、GPT-4o 部署，支持 SSO、数据驻留和合规认证。"
descriptionEn: "Azure OpenAI Service MCP for enterprise GPT-4 and GPT-4o deployment with SSO, data residency and compliance certifications."
kit: []
kitRole: ""
evaluation:
  easeOfUse: 2
  security: 5
  activity: 5
  scenarioFit: 4
  overall: 3.8
certificationStatus: "reviewed"
installCommand: "npx @azure/mcp-server-openai"
envVars: ["AZURE_OPENAI_KEY", "AZURE_OPENAI_ENDPOINT"]
configExample: |
  {
    "mcpServers": { "azure-openai": { "command": "npx", "args": ["-y", "@azure/mcp-server-openai"], "env": { "AZURE_OPENAI_KEY": "xxx", "AZURE_OPENAI_ENDPOINT": "https://xxx.openai.azure.com" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# Azure OpenAI MCP

Azure OpenAI Service MCP，企业级 GPT-4、GPT-4o 部署，支持 SSO、数据驻留和合规认证。
