import { LanguageFile } from '../types/language';

const zh: LanguageFile = {
  config: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '中文',
    flag: 'cn',
  },
  translations: {
    // Navigation
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.services': '服务',
    'nav.projects': '项目',
    'nav.contact': '联系方式',

    // Hero
    'hero.titles.0': '全栈开发者',
    'hero.titles.1': '设计师',
    'hero.titles.2': '解决方案创造者',
    'hero.titles.3': '管理员',
    'hero.titles.4': '编程爱好者',
    'hero.titles.5': '技术爱好者',
    'hero.description':
      '将创意转化为代码，打造令人惊叹的数字体验和创新解决方案，改变生活。',
    'hero.viewProjects': '查看项目',
    'hero.aboutMe': '关于我',

    // About
    'about.title': '关于我',
    'about.subtitle':
      '热爱技术的开发者，始终追求创造优雅高效的解决方案，为人们的生活带来积极影响。',
    'about.journey': '我的旅程',
    'about.journey.p1':
      '作为全栈开发者，我热衷于打造卓越的数字体验。我专注于现代技术，并不断探索新工具和方法。',
    'about.journey.p2':
      '我相信代码不仅要功能强大，还要优雅且易于维护。每个项目都是学习新知识和为开发者社区做贡献的机会。',
    'about.technologies': '技术',
    'about.interests.cleancode.title': '干净代码',
    'about.interests.cleancode.desc': '干净且结构良好的代码',
    'about.interests.innovation.title': '创新',
    'about.interests.innovation.desc': '始终寻找新解决方案',
    'about.interests.performance.title': '性能',
    'about.interests.performance.desc': '优化和高性能',
    'about.interests.opensource.title': '开源',
    'about.interests.opensource.desc': '为社区贡献',

    // Services
    'services.title': '服务',
    'services.subtitle': '专业的抽奖自动化和数字管理解决方案',
    'services.automation.title': '抽奖自动化',
    'services.automation.description': '通过AlphaBot平台提供完整的抽奖自动化系统。我们提供高效可靠的抽奖管理解决方案，从参与者注册到获奖者选择。',
    'services.automation.feature1': '参与者和注册的自动化管理',
    'services.automation.feature2': '透明安全的获奖者选择系统',
    'services.automation.feature3': '实时报告和详细分析',
    'services.automation.cta': '了解更多',

    // Projects
    'projects.title': '项目',
    'projects.subtitle':
      '精选的我最新和最有趣的项目，可在 GitHub 上探索和贡献。',
    'projects.viewAll': '查看所有项目',
    'projects.loading': '正在加载项目...',
    'projects.defaultDesc': '充满激情和奉献开发的有趣项目。',
    'projects.error': '获取存储库时出错：',

    // Contact
    'contact.country': '巴西 (Bāxī)',
    'contact.title': '让我们聊聊',
    'contact.subtitle': '有兴趣合作或有绝妙的想法？让我们一起将概念变为现实。',
    'contact.ready': '准备好迎接下一个项目了吗？',
    'contact.description':
      '无论是自由职业项目、工作机会，还是仅关于技术的对话，我始终对新可能性持开放态度。',
    'contact.button': '联系我',

    // Footer
    'footer.text': '© {year} OniMock。用❤️和大量咖啡开发。',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot 抽奖自动化',
    'alphabot.hero.subtitle': '抽奖和数字化管理的完整自动化平台',
    'alphabot.hero.description': '使用我们先进的自动化系统改变您的抽奖管理。从参与者注册到获奖者选择，AlphaBot 提供完整可靠的解决方案。',
    'alphabot.hero.cta': '立即开始',
    
    // AlphaBot Features
    'alphabot.features.automation.title': '完全自动化',
    'alphabot.features.automation.description': '从头到尾管理抽奖的完全自动化系统。',
    'alphabot.features.security.title': '保证安全',
    'alphabot.features.security.description': '先进的数据保护和抽奖的完全透明度。',
    'alphabot.features.reports.title': '详细报告',
    'alphabot.features.reports.description': '全面分析和实时报告，实现更好的管理。',

    // AlphaBot 信息部分
    'alphabot.sections.automation.title': '使用 Alphabot 自动化抽奖注册',
    'alphabot.sections.automation.description': '通过效率最大化您的机会！在 Alphabot 平台上自动化注册，节省时间并增加获得 NFT 的机会。',
    'alphabot.sections.automation.feature1': '自动注册：抽奖一旦激活就立即注册您的账户。',
    'alphabot.sections.automation.feature2': '多账户支持：同时管理多个账户。',
    'alphabot.sections.automation.feature3': '智能队列管理：通过限制控制优化注册。',

    'alphabot.sections.notifications.title': '通过 Discord 和 Telegram 实时通知',
    'alphabot.sections.notifications.description': '接收关于注册、获胜和铸造机会的即时警报。',
    'alphabot.sections.notifications.feature1': '即时警报：在正确的时间提供信息。',
    'alphabot.sections.notifications.feature2': '可定制的 Webhook：根据您的偏好配置。',
    'alphabot.sections.notifications.feature3': '用户友好的更新：包含有用链接的清晰消息。',

    'alphabot.sections.management.title': '强大的错误和数据管理',
    'alphabot.sections.management.description': '保证可靠性，让您的策略持续运行。',
    'alphabot.sections.management.feature1': '智能错误恢复：自动重试。',
    'alphabot.sections.management.feature2': '安全存储：MongoDB 定期清理。',
    'alphabot.sections.management.feature3': '可扩展基础设施：无冲突地管理大容量。',
  },
};

export default zh;
