// Kit info section i18n content
// This is injected into BaseLayout's inline script

(function() {
  var kitInfoData = {
    en: {
      'ship-a-saas': {
        tagline: '30 minutes from zero to deployment — ship your SaaS fast',
        pros: ['Zero-config: 30min to running SaaS, no manual setup', 'Cost optimal: Cloudflare free tier + Supabase free tier', 'Production-grade: Full CI/CD, monitoring, persistence'],
        cons: ['Learning curve: Basic Git and database knowledge required', 'Scale limits: Free tier has usage limits, rapid growth needs upgrade'],
        target: 'Indie developers, solo founders, 2-5 person startups validating SaaS ideas'
      },
      'ai-coding-agent': {
        tagline: 'Let AI handle the full coding workflow — truly capable agents, not just autocomplete',
        pros: ['Full automation: AI processes from requirements to code with minimal human input', 'Multi-tool synergy: GitHub for code, Notion for docs, Linear for tasks', 'Traceable: Every step recorded, code quality auditable'],
        cons: ['Context limits: Limited understanding of very large codebases', 'Security risks: Auto file writes and command execution require careful review'],
        target: 'Full-time developers, learners, tech teams wanting major productivity gains'
      },
      'rag-research': {
        tagline: 'AI-driven deep research — crawl, embed, store, synthesize',
        pros: ['Complete RAG pipeline: No manual assembly required', 'Wide coverage: Brave Search + Firecrawl cover diverse data sources', 'Auto-summary: Multiple docs synthesized automatically'],
        cons: ['Dependent on source quality: Poor sources produce poor outputs', 'Vector search precision loss: Complex semantics may miss best matches'],
        target: 'Researchers, content creators, market analysts managing large information volumes'
      },
      'browser-automation': {
        tagline: 'AI agents operating browsers to automate repetitive web tasks',
        pros: ['No API needed: Direct browser control for sites without APIs', 'Anti-scraping bypass: Simulates real user behavior', 'Zero manual work: Batch tasks fully automated'],
        cons: ['Slow: Orders of magnitude slower than native APIs', 'Resource heavy: Requires full browser instance'],
        target: 'Operations teams, scraping engineers, QA automation testers'
      },
      'devops-monitoring': {
        tagline: 'AI agents for automated monitoring + alerting + remediation',
        pros: ['Full automation: Detection to notification to fix, no humans', '24/7 alerting: Slack/email instant alerts, never miss an incident', 'Fast response: Problem detection to resolution time dramatically reduced'],
        cons: ['Complex setup: Requires understanding of CI/CD, monitoring, alerting stack', 'Cloud-dependent: Serverless environments cannot use full feature set'],
        target: 'DevOps engineers, SREs, teams wanting automated operations'
      }
    },
    zh: {
      'ship-a-saas': {
        tagline: '30分钟从零到部署，让独立开发者极速上线 SaaS 产品',
        pros: ['开箱即用：30分钟跑通基础 SaaS，无需繁琐配置', '成本最优：Cloudflare 免费套餐 + Supabase 免费层，零成本启动', '生产级架构：集成 CI/CD、监控告警、数据持久化完整链路'],
        cons: ['学习曲线：需理解 Git、数据库基础概念', '规模局限：免费套餐有用量限制，快速增长需升级'],
        target: '独立开发者、Solo Founder、2-5 人创业团队，想快速验证 SaaS 想法'
      },
      'ai-coding-agent': {
        tagline: '让 AI 真正替你写代码——不只是补全，是端到端自动化编程',
        pros: ['全自动编码：从需求到代码全程 AI 处理，减少人工干预', '多工具协同：GitHub 管代码、Notion 写文档、Linear 管任务', '可解释可审查：每步操作有记录，代码质量可追溯'],
        cons: ['上下文限制：超长代码库理解能力有限，需人工拆解任务', '安全风险：自动写文件/执行命令需谨慎审查'],
        target: '全职开发者、编程学习者、技术型团队，想大幅提升编码效率'
      },
      'rag-research': {
        tagline: '让 AI Agent 做深度研究——爬取网页 → 提取内容 → 存入向量数据库 → 合成报告',
        pros: ['完整 RAG Pipeline：无需手动拼接，开箱即用', '信息覆盖面广：Brave Search + Firecrawl 组合覆盖多种数据源', '自动摘要：多篇文档自动合成，节省阅读时间'],
        cons: ['依赖数据源质量：源内容差则输出差', '向量检索有精度损失：复杂语义可能匹配不到最相关内容'],
        target: '研究员、内容创作者、市场分析师，需要大量信息整理的团队'
      },
      'browser-automation': {
        tagline: '让 AI Agent 操作浏览器完成重复性 web 任务——填写表单、批量操作、数据抓取',
        pros: ['无需 API：直接操作浏览器，绕过没有 API 的网站', '无视反爬：模拟真实用户行为，绕过反爬虫机制', '零手动操作：批量任务全自动，大幅节省人力'],
        cons: ['速度慢：比原生 API 慢数倍', '资源占用高：需运行完整浏览器实例'],
        target: '运营人员、爬虫工程师、QA 自动化测试，需要批量操作 Web 的团队'
      },
      'devops-monitoring': {
        tagline: '让 AI Agent 自动监控 + 告警 + 修复——从被动响应到主动防御',
        pros: ['全自动化：从检测到通知到修复全流程无需人工', '半夜告警：Slack/邮件即时通知，再也不怕服务挂了', '快速响应：问题发现到修复时间大幅缩短'],
        cons: ['配置复杂：需要理解 CI/CD、监控、告警整套体系', '需云服务支持：无服务器环境无法完整使用'],
        target: 'DevOps 工程师、SRE、想要自动化运维的团队'
      }
    }
  };

  // Kit info injection - only on kit pages
  var taglineEl = document.getElementById('kit-tagline');
  if (taglineEl) {
    // Determine kit slug from path
    var pathParts = window.location.pathname.split('/');
    var slug = pathParts[2] || ''; // /kits/slug -> slug is at index 2

    var texts = kitInfoData[lang] || kitInfoData['en'];
    var data = texts[slug];
    if (data) {
      taglineEl.textContent = data.tagline || '';
      taglineEl.style.display = 'block';

      // Pros
      if (data.pros && data.pros.length > 0) {
        var prosEl = document.getElementById('kit-pros');
        var prosTitle = document.getElementById('kit-pros-title');
        var prosList = document.getElementById('kit-pros-list');
        if (prosEl) prosEl.style.display = 'block';
        if (prosTitle) prosTitle.textContent = (lang === 'zh' ? '✨ 优势' : '✨ Pros');
        if (prosList) {
          prosList.innerHTML = '';
          data.pros.forEach(function(p) {
            var li = document.createElement('li');
            li.textContent = p;
            prosList.appendChild(li);
          });
        }
      }

      // Cons
      if (data.cons && data.cons.length > 0) {
        var consEl = document.getElementById('kit-cons');
        var consTitle = document.getElementById('kit-cons-title');
        var consList = document.getElementById('kit-cons-list');
        if (consEl) consEl.style.display = 'block';
        if (consTitle) consTitle.textContent = (lang === 'zh' ? '⚠️ 局限' : '⚠️ Considerations');
        if (consList) {
          consList.innerHTML = '';
          data.cons.forEach(function(c) {
            var li = document.createElement('li');
            li.textContent = c;
            consList.appendChild(li);
          });
        }
      }

      // Target audience
      if (data.target) {
        var targetEl = document.getElementById('kit-target');
        if (targetEl) {
          targetEl.style.display = 'block';
          targetEl.textContent = (lang === 'zh' ? '👥 适合' : '👥 For') + ': ' + data.target;
        }
      }
    }
  }
})();
