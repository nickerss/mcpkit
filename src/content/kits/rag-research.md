---
title: 📊 RAG & Research
name: rag-research
icon: search
color: "#8b5cf6"
description: AI 做深度研究——爬取→向量存储→合成报告
tagline: 让 AI Agent 做深度研究——爬取网页 → 提取内容 → 存入向量数据库 → 合成报告
pros:
  - "完整 RAG Pipeline：无需手动拼接，开箱即用"
  - "信息覆盖面广：Brave Search + Firecrawl 组合覆盖多种数据源"
  - "自动摘要：多篇文档自动合成，节省阅读时间"
cons:
  - "依赖数据源质量：源内容差则输出差"
  - "向量检索有精度损失：复杂语义可能匹配不到最相关内容"
  - "API 成本：大规模爬取+嵌入需注意费用"
targetAudience: "研究员、内容创作者、市场分析师，需要大量信息整理的团队"
levels:
  starter:
    description: "快速研究起步"
    tools: ['brave-search-mcp', 'firecrawl-mcp', 'supabase-mcp']
  pro:
    description: "完整 RAG 研究流程"
    tools: ['brave-search-mcp', 'firecrawl-mcp', 'supabase-mcp', 'jina-reader-mcp']
  enterprise:
    description: "企业级多语言研究"
    tools: ['brave-search-mcp', 'firecrawl-mcp', 'supabase-mcp', 'jina-reader-mcp', 'openai-mcp']
---

# 📊 RAG & Research
AI 做深度研究——爬取→向量存储→合成报告