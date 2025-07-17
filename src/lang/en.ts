import { LanguageFile } from '../types/language';

const en: LanguageFile = {
  config: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flag: 'us',
  },
  translations: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    // Hero
    'hero.titles.0': 'Full Stack Developer',
    'hero.titles.1': 'Designer',
    'hero.titles.2': 'Solution Creator',
    'hero.titles.3': 'Problem Solver',
    'hero.titles.4': 'Code Enthusiast',
    'hero.titles.5': 'Technology Enthusiast',
    'hero.description':
      'Transforming ideas into code, creating incredible digital experiences and innovative solutions that make a difference.',
    'hero.viewProjects': 'View Projects',
    'hero.aboutMe': 'About Me',

    // About
    'about.title': 'About Me',
    'about.subtitle':
      "Developer passionate about technology, always seeking to create elegant and efficient solutions that positively impact people's lives.",
    'about.journey': 'My Journey',
    'about.journey.p1':
      'As a full stack developer, I have a passion for creating exceptional digital experiences. I specialize in modern technologies and am always exploring new tools and methodologies.',
    'about.journey.p2':
      'I believe code should be not only functional, but also elegant and maintainable. Every project is an opportunity to learn something new and contribute to the developer community.',
    'about.technologies': 'Technologies',
    'about.interests.cleancode.title': 'Clean Code',
    'about.interests.cleancode.desc': 'Clean and well-structured code',
    'about.interests.innovation.title': 'Innovation',
    'about.interests.innovation.desc': 'Always seeking new solutions',
    'about.interests.performance.title': 'Performance',
    'about.interests.performance.desc': 'Optimization and high performance',
    'about.interests.opensource.title': 'Open Source',
    'about.interests.opensource.desc': 'Contributing to the community',

    // Projects
    'projects.title': 'Projects',
    'projects.subtitle':
      'A selection of my most recent and interesting projects, available on GitHub for exploration and contribution.',
    'projects.viewAll': 'View all projects',
    'projects.loading': 'Loading projects...',
    'projects.defaultDesc':
      'Interesting project developed with passion and dedication.',
    'projects.error': 'Error fetching repositories:',

    // Contact
    'contact.country': 'Brazil',
    'contact.title': "Let's Talk",
    'contact.subtitle':
      "Interested in collaborating or have an amazing idea? Let's transform concepts into reality together.",
    'contact.ready': 'Ready for the next project?',
    'contact.description':
      "Whether it's a freelance project, job opportunity, or just a chat about technology, I'm always open to new possibilities.",
    'contact.button': 'Get In Touch',

    // Footer
    'footer.text': '© {year} OniMock. Built with ❤️ and lots of coffee.',
  },
};

export default en;
