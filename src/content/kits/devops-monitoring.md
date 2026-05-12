---
title: 🔔 DevOps & Monitoring
name: devops-monitoring
icon: bell
color: "#ef4444"
description: GitHub Actions + Docker + Slack 自动监控告警
tagline: 让 AI Agent 自动监控 + 告警 + 修复——从被动响应到主动防御
pros:
  - "全自动化：从检测到通知到修复全流程无需人工"
  - "半夜告警：Slack/邮件即时通知，再也不怕服务挂了"
  - "快速响应：问题发现到修复时间大幅缩短"
cons:
  - "配置复杂：需要理解 CI/CD、监控、告警整套体系"
  - "需云服务支持：无服务器环境无法完整使用"
  - "告警噪音：规则配置不当可能产生大量无效告警"
targetAudience: "DevOps 工程师、SRE、想要自动化运维的团队"
levels:
  starter:
    description: "10分钟配置，基础监控起步"
    tools: ['github-mcp', 'docker-mcp', 'slack-mcp']
  pro:
    description: "完整 DevOps 监控套件"
    tools: ['github-mcp', 'docker-mcp', 'slack-mcp', 'npm-mcp', 'filesystem-mcp', 'sentry-mcp']
  enterprise:
    description: "企业级大规模监控"
    tools: ['github-mcp', 'docker-mcp', 'slack-mcp', 'npm-mcp', 'filesystem-mcp', 'sentry-mcp', 'aws-mcp']
---

# 🔔 DevOps & Monitoring
GitHub Actions + Docker + Slack 自动监控告警