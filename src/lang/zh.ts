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
  },
};

export default zh;
