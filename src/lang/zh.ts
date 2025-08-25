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
    'hero.titles.3': '问题解决者',
    'hero.titles.4': '代码爱好者',
    'hero.titles.5': '技术爱好者',
    'hero.description':
      '将创意转化为代码，打造令人惊叹的数字体验和创新解决方案，带来改变。',
    'hero.viewProjects': '查看项目',
    'hero.aboutMe': '关于我',

    // About
    'about.title': '关于我',
    'about.subtitle':
      '热爱技术的开发者，始终致力于创造优雅高效的解决方案，为人们的生活带来积极影响。',
    'about.journey': '我的历程',
    'about.journey.p1':
      '作为一名全栈开发者，我热衷于打造卓越的数字体验。我专注于现代技术，始终探索新工具和方法。',
    'about.journey.p2':
      '我相信代码不仅要功能强大，还要优雅且易于维护。每个项目都是学习新知识和为开发者社区贡献的机会。',
    'about.technologies': '技术',
    'about.interests.cleancode.title': '干净代码',
    'about.interests.cleancode.desc': '干净且结构良好的代码',
    'about.interests.innovation.title': '创新',
    'about.interests.innovation.desc': '始终寻求新解决方案',
    'about.interests.performance.title': '性能',
    'about.interests.performance.desc': '优化与高性能',
    'about.interests.opensource.title': '开源',
    'about.interests.opensource.desc': '为社区贡献',
    'about.stats.location': '地点',
    'about.stats.country': '巴西',
    'about.stats.experience': '经验',
    'about.stats.years': '{years} 年',
    'about.stats.focus': '专注领域',
    'about.stats.fullstack': '全栈开发',
    'about.cta': '联系我',

    // Services
    'services.title': '服务',
    'services.subtitle': '抽奖自动化和数字管理的专业解决方案',
    'services.automation.title': '抽奖自动化',
    'services.automation.description':
      '通过 AlphaBot 平台提供完整的抽奖自动化系统。我们提供高效可靠的解决方案，涵盖从参与者注册到获胜者选择的管理。',
    'services.automation.feature1': '自动化参与者管理和注册',
    'services.automation.feature2': '透明且安全的获胜者选择系统',
    'services.automation.feature3': '实时报告和详细分析',
    'services.learnMore': '了解更多',

    // Projects
    'projects.title': '项目',
    'projects.subtitle': '精选的最新和有趣项目，可在 GitHub 上探索和贡献。',
    'projects.viewAll': '查看所有项目',
    'projects.loading': '正在加载项目...',
    'projects.defaultDesc': '充满热情和奉献开发的有趣项目。',
    'projects.error': '获取存储库时出错：',

    // Contact
    'contact.country': '巴西',
    'contact.title': '让我们聊聊',
    'contact.subtitle': '有兴趣合作或有绝妙的想法？让我们一起将概念变为现实。',
    'contact.ready': '准备好迎接下一个项目？',
    'contact.button': '联系我',
    'contact.email': '电子邮件',
    'contact.location': '地点',
    'contact.social': '社交链接',
    'contact.form.name': '姓名',
    'contact.form.email': '电子邮件',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': '主题',
    'contact.form.subject.placeholder': '关于什么？',
    'contact.form.message': '消息',
    'contact.form.message.placeholder': '告诉我你的项目',
    'contact.form.submit': '发送消息',
    'contact.form.sending': '正在发送...',
    'contact.form.success': '✅ 您的消息已成功发送！我会尽快联系您。',
    'contact.form.error':
      '❌ 发送消息时出错。请检查是否正确配置了 EmailJS，或稍后再试。',
    'contact.form.error.button': '发送失败。请重试。',
    'contact.form.success.button': '消息已发送！',
    'contact.form.name.placeholder': '您的全名',
    'contact.form.validation.name': '姓名至少需要2个字符',
    'contact.form.validation.email': '请输入有效的电子邮件地址',
    'contact.form.validation.subject': '主题至少需要3个字符',
    'contact.form.validation.message': '消息至少需要10个字符',


    // Footer
    'footer.text': '© {year} OniMock。用❤️和大量咖啡打造。',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot 抽奖自动化',
    'alphabot.hero.subtitle': '抽奖和数字管理的完整自动化平台',
    'alphabot.hero.description':
      '通过我们先进的自动化系统改变您的抽奖管理。从参与者注册到获胜者选择，AlphaBot 提供完整且可靠的解决方案。',
    'alphabot.hero.cta': '开始使用',
    'alphabot.hero.demo': '查看演示',

    // AlphaBot Features
    'alphabot.features.title': '革命性功能',
    'alphabot.features.subtitle': '改变您管理项目方式的尖端技术',
    'alphabot.features.automation.title': '完整自动化',
    'alphabot.features.automation.description':
      '从头到尾管理抽奖的完全自动化系统。',
    'alphabot.features.security.title': '安全保障',
    'alphabot.features.security.description':
      '高级数据保护和抽奖的完全透明性。',
    'alphabot.features.reports.title': '详细报告',
    'alphabot.features.reports.description':
      '全面分析和实时报告，便于更好管理。',

    // AlphaBot informative sections
    'alphabot.sections.automation.title': '通过 Alphabot 实现抽奖注册自动化',
    'alphabot.sections.automation.description':
      '高效提升您的中奖机会！通过 Alphabot 平台自动化注册，节省时间并增加赢得 NFT 的机会。',
    'alphabot.sections.automation.feature1':
      '自动注册：在抽奖活动开始时立即注册您的账户。',
    'alphabot.sections.automation.feature2': '多账户支持：同时管理多个账户。',
    'alphabot.sections.automation.feature3':
      '智能队列管理：优化注册并控制限制。',

    'alphabot.sections.notifications.title':
      '通过 Discord 和 Telegram 实时通知',
    'alphabot.sections.notifications.description':
      '即时接收有关注册、获胜和铸造机会的提醒。',
    'alphabot.sections.notifications.feature1': '即时提醒：关键时刻获取信息。',
    'alphabot.sections.notifications.feature2':
      '可定制的 Webhooks：根据您的偏好配置。',
    'alphabot.sections.notifications.feature3':
      '用户友好的更新：清晰的消息和实用链接。',

    'alphabot.sections.management.title': '强大的错误和数据管理',
    'alphabot.sections.management.description': '确保您的策略可靠运行。',
    'alphabot.sections.management.feature1': '智能错误恢复：自动重试。',
    'alphabot.sections.management.feature2':
      '安全存储：使用 MongoDB 定期清理。',
    'alphabot.sections.management.feature3':
      '可扩展的基础设施：无冲突处理高流量。',

    'alphabot.sections.learnMore': '了解更多',
  },
};

export default zh;
