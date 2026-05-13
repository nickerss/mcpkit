---
title: 🔔 DevOps & Monitoring
name: devops-monitoring
icon: bell
color: "#ef4444"
description: GitHub Actions + Docker + Slack 自动监控告警
tagline:
  zh: "让 AI Agent 自动监控 + 告警 + 修复——从被动响应到主动防御"
  en: "AI agents for automated monitoring + alerting + remediation"
pros:
  zh:
    - "全自动化：从检测到通知到修复全流程无需人工"
    - "半夜告警：Slack/邮件即时通知，再也不怕服务挂了"
    - "快速响应：问题发现到修复时间大幅缩短"
  en:
    - "Full automation: Detection to notification to fix, no humans"
    - "24/7 alerting: Slack/email instant alerts, never miss an incident"
    - "Fast response: Problem detection to resolution time dramatically reduced"
cons:
  zh:
    - "配置复杂：需要理解 CI/CD、监控、告警整套体系"
    - "需云服务支持：无服务器环境无法完整使用"
    - "告警噪音：规则配置不当可能产生大量无效告警"
  en:
    - "Complex setup: Requires understanding of CI/CD, monitoring, alerting stack"
    - "Cloud-dependent: Serverless environments cannot use full feature set"
    - "Alert fatigue: Poor rules create noise"
targetAudience:
  zh: "DevOps 工程师、SRE、想要自动化运维的团队"
  en: "DevOps engineers, SREs, teams wanting automated operations"
levels:
  starter:
    description: "10分钟配置，基础监控起步"
    tools: [github-mcp, docker-mcp, slack-mcp]
  pro:
    description: "完整 DevOps 监控套件"
    tools: [github-mcp, docker-mcp, slack-mcp, npm-mcp, filesystem-mcp, sentry-mcp]
  enterprise:
    description: "企业级大规模监控"
    tools: [github-mcp, docker-mcp, slack-mcp, npm-mcp, filesystem-mcp, sentry-mcp, aws-mcp]
testimonials:
    - quote: "半夜告警终于能收到 Slack 通知了，再也不用盯着服务器。"
      author: "@sre_wang"
      name: "王工"
      role: "SRE 工程师"
      rating: 5
    - quote: "GitHub Actions + Slack + Sentry 这套组合，让我一个人管 5 个项目没问题。"
      author: "@indie_dev"
      name: "独立开发者小李"
      role: "独立开发者"
      rating: 5
configExample: |
      {
        "mcpServers": {
          "github": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-github"],
            "env": { "GITHUB_TOKEN": "ghp_xxxx" }
          },
          "slack": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-slack"],
            "env": { "SLACK_BOT_TOKEN": "xoxb-xxx" }
          },
          "sentry": {
            "command": "npx",
            "args": ["-y", "@sentry/mcp-server"],
            "env": {
              "SENTRY_AUTH_TOKEN": "sntrys_xxx",
              "SENTRY_ORGANIZATION": "myorg",
              "SENTRY_PROJECT": "myproject"
            }
          },
          "npm": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-npm"],
            "env": { "NPM_TOKEN": "npm_xxx" }
          }
        }
      }

---

# 🔔 DevOps & Monitoring
GitHub Actions + Docker + Slack 自动监控告警