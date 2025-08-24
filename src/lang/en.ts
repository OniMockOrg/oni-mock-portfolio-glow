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
    'nav.services': 'Services',
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
    'about.stats.location': 'Location',
    'about.stats.country': 'Brazil',
    'about.stats.experience': 'Experience',
    'about.stats.years': '{years} Years',
    'about.stats.focus': 'Focus',
    'about.stats.fullstack': 'Full Stack',

    // Services
    'services.title': 'Services',
    'services.subtitle':
      'Specialized solutions for raffle automation and digital management',
    'services.automation.title': 'Raffle Automation',
    'services.automation.description':
      'Complete automation system for raffles through the AlphaBot platform. We offer efficient and reliable solutions for managing raffles, from participant registration to winner selection.',
    'services.automation.feature1':
      'Automated participant management and registration',
    'services.automation.feature2':
      'Transparent and secure winner selection system',
    'services.automation.feature3': 'Real-time reports and detailed analytics',
    'services.learnMore': 'Learn More',

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
    'contact.button': 'Get In Touch',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.social': 'Social Links',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': "What's this about?",
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell me about your project',
    'contact.form.submit': 'Send message',
    'contact.form.sending': 'Sending...',
    'contact.form.success':
      '✅ Your message was sent successfully! I will get in touch soon.',
    'contact.form.error':
      '❌ There was an error sending your message. Please check if you have configured EmailJS correctly or try again later.',

    // Footer
    'footer.text': '© {year} OniMock. Built with ❤️ and lots of coffee.',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot Raffle Automation',
    'alphabot.hero.subtitle':
      'Complete automation platform for raffles and digital management',
    'alphabot.hero.description':
      'Transform your raffle management with our advanced automation system. From participant registration to winner selection, AlphaBot offers a complete and reliable solution.',
    'alphabot.hero.cta': 'Get Started',
    'alphabot.hero.demo': 'View Demo',

    // AlphaBot Features
    'alphabot.features.title': 'Revolutionary Features',
    'alphabot.features.subtitle':
      'Cutting-edge technology that transforms how you manage your projects',
    'alphabot.features.automation.title': 'Complete Automation',
    'alphabot.features.automation.description':
      'Fully automated system to manage raffles from start to finish.',
    'alphabot.features.security.title': 'Guaranteed Security',
    'alphabot.features.security.description':
      'Advanced data protection and complete transparency in draws.',
    'alphabot.features.reports.title': 'Detailed Reports',
    'alphabot.features.reports.description':
      'Complete analysis and real-time reports for better management.',

    // AlphaBot informative sections
    'alphabot.sections.automation.title':
      'Raffle Registration Automation with Alphabot',
    'alphabot.sections.automation.description':
      'Maximize your chances with efficiency! Automate registrations on the Alphabot platform, saving time and increasing your chances of winning NFTs.',
    'alphabot.sections.automation.feature1':
      'Automatic Registration: Enrolls your accounts as soon as raffles become active.',
    'alphabot.sections.automation.feature2':
      'Multi-Account Support: Manage multiple accounts simultaneously.',
    'alphabot.sections.automation.feature3':
      'Smart Queue Management: Optimized registrations with limit control.',

    'alphabot.sections.notifications.title':
      'Real-Time Notifications via Discord and Telegram',
    'alphabot.sections.notifications.description':
      'Receive instant alerts about registrations, wins, and mint opportunities.',
    'alphabot.sections.notifications.feature1':
      'Instant Alerts: Information at the right time.',
    'alphabot.sections.notifications.feature2':
      'Customizable Webhooks: Configure according to your preferences.',
    'alphabot.sections.notifications.feature3':
      'User-Friendly Updates: Clear messages with useful links.',

    'alphabot.sections.management.title': 'Robust Error and Data Management',
    'alphabot.sections.management.description':
      'Guaranteed reliability to keep your strategy running.',
    'alphabot.sections.management.feature1':
      'Smart Error Recovery: Automatic retries.',
    'alphabot.sections.management.feature2':
      'Secure Storage: MongoDB with periodic cleanup.',
    'alphabot.sections.management.feature3':
      'Scalable Infrastructure: Handles high volumes without conflicts.',

    'alphabot.sections.learnMore': 'Learn More',
  },
};

export default en;
