import { useState, ReactNode } from 'react';
import { LanguageContext } from './LanguageContext';

const translations = {
  en: {
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
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Hero
    'hero.titles.0': 'Desenvolvedor Full Stack',
    'hero.titles.1': 'Designer',
    'hero.titles.2': 'Criador de Soluções',
    'hero.titles.3': 'Moderador',
    'hero.titles.4': 'Entusiasta da Programação',
    'hero.titles.5': 'Entusiasta de Tecnologia',
    'hero.description':
      'Transformando ideias em código, criando experiências digitais incríveis e soluções inovadoras que fazem a diferença.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.aboutMe': 'Sobre Mim',

    // About
    'about.title': 'Sobre Mim',
    'about.subtitle':
      'Desenvolvedor apaixonado por tecnologia, sempre em busca de criar soluções elegantes e eficientes que impactem positivamente a vida das pessoas.',
    'about.journey': 'Minha Jornada',
    'about.journey.p1':
      'Como desenvolvedor full stack, tenho paixão por criar experiências digitais excepcionais. Especializo-me em tecnologias modernas e estou sempre explorando novas ferramentas e metodologias.',
    'about.journey.p2':
      'Acredito que o código deve ser não apenas funcional, mas também elegante e maintível. Cada projeto é uma oportunidade de aprender algo novo e contribuir para a comunidade de desenvolvedores.',
    'about.technologies': 'Tecnologias',
    'about.interests.cleancode.title': 'Clean Code',
    'about.interests.cleancode.desc': 'Código limpo e bem estruturado',
    'about.interests.innovation.title': 'Inovação',
    'about.interests.innovation.desc': 'Sempre buscando novas soluções',
    'about.interests.performance.title': 'Performance',
    'about.interests.performance.desc': 'Otimização e alta performance',
    'about.interests.opensource.title': 'Open Source',
    'about.interests.opensource.desc': 'Contribuindo para a comunidade',

    // Projects
    'projects.title': 'Projetos',
    'projects.subtitle':
      'Uma seleção dos meus projetos mais recentes e interessantes, disponíveis no GitHub para exploração e contribuição.',
    'projects.viewAll': 'Ver todos os projetos',
    'projects.loading': 'Carregando projetos...',
    'projects.defaultDesc':
      'Projeto interessante desenvolvido com paixão e dedicação.',
    'projects.error': 'Erro ao buscar repositórios:',

    // Contact
    'contact.country': 'Brasil',
    'contact.title': 'Vamos Conversar',
    'contact.subtitle':
      'Interessado em colaborar ou tem alguma ideia incrível? Vamos transformar conceitos em realidade juntos.',
    'contact.ready': 'Pronto para o próximo projeto?',
    'contact.description':
      'Seja um projeto freelance, uma oportunidade de trabalho ou apenas uma conversa sobre tecnologia, estou sempre aberto a novas possibilidades.',
    'contact.button': 'Entrar em Contato',

    // Footer
    'footer.text': '© {year} OniMock. Desenvolvido com ❤️ e muito café.',
  },
};

type Props = { children: ReactNode };

export const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState<'en' | 'pt'>('en');

  const t = (key: string, vars?: Record<string, string | number>): string => {
    const template =
      translations[language][key as keyof (typeof translations)['en']] || key;

    if (!vars) return template;

    return Object.entries(vars).reduce(
      (acc, [varKey, varValue]) =>
        acc.replace(new RegExp(`\\{${varKey}\\}`, 'g'), String(varValue)),
      template
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
