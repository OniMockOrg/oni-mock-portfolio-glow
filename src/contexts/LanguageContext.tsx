
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    
    // Hero
    'hero.titles.0': 'Desenvolvedor Full Stack',
    'hero.titles.1': 'Entusiasta de Tecnologia',
    'hero.titles.2': 'Criador de Soluções',
    'hero.titles.3': 'Problem Solver',
    'hero.titles.4': 'Code Enthusiast',
    'hero.description': 'Transformando ideias em código, criando experiências digitais incríveis e soluções inovadoras que fazem a diferença.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.aboutMe': 'Sobre Mim',
    
    // About
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Desenvolvedor apaixonado por tecnologia, sempre em busca de criar soluções elegantes e eficientes que impactem positivamente a vida das pessoas.',
    'about.journey': 'Minha Jornada',
    'about.journey.p1': 'Como desenvolvedor full stack, tenho paixão por criar experiências digitais excepcionais. Especializo-me em tecnologias modernas e estou sempre explorando novas ferramentas e metodologias.',
    'about.journey.p2': 'Acredito que o código deve ser não apenas funcional, mas também elegante e maintível. Cada projeto é uma oportunidade de aprender algo novo e contribuir para a comunidade de desenvolvedores.',
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
    'projects.subtitle': 'Uma seleção dos meus projetos mais recentes e interessantes, disponíveis no GitHub para exploração e contribuição.',
    'projects.viewAll': 'Ver todos os projetos',
    'projects.loading': 'Carregando projetos...',
    'projects.defaultDesc': 'Projeto interessante desenvolvido com paixão e dedicação.',
    'projects.error': 'Erro ao buscar repositórios:',
    
    // Contact
    'contact.title': 'Vamos Conversar',
    'contact.subtitle': 'Interessado em colaborar ou tem alguma ideia incrível? Vamos transformar conceitos em realidade juntos.',
    'contact.ready': 'Pronto para o próximo projeto?',
    'contact.description': 'Seja um projeto freelance, uma oportunidade de trabalho ou apenas uma conversa sobre tecnologia, estou sempre aberto a novas possibilidades.',
    'contact.button': 'Entrar em Contato',
    
    // Footer
    'footer.text': '© 2024 OniMock. Desenvolvido com ❤️ e muito café.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.titles.0': 'Full Stack Developer',
    'hero.titles.1': 'Technology Enthusiast',
    'hero.titles.2': 'Solution Creator',
    'hero.titles.3': 'Problem Solver',
    'hero.titles.4': 'Code Enthusiast',
    'hero.description': 'Transforming ideas into code, creating incredible digital experiences and innovative solutions that make a difference.',
    'hero.viewProjects': 'View Projects',
    'hero.aboutMe': 'About Me',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Developer passionate about technology, always seeking to create elegant and efficient solutions that positively impact people\'s lives.',
    'about.journey': 'My Journey',
    'about.journey.p1': 'As a full stack developer, I have a passion for creating exceptional digital experiences. I specialize in modern technologies and am always exploring new tools and methodologies.',
    'about.journey.p2': 'I believe code should be not only functional, but also elegant and maintainable. Every project is an opportunity to learn something new and contribute to the developer community.',
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
    'projects.subtitle': 'A selection of my most recent and interesting projects, available on GitHub for exploration and contribution.',
    'projects.viewAll': 'View all projects',
    'projects.loading': 'Loading projects...',
    'projects.defaultDesc': 'Interesting project developed with passion and dedication.',
    'projects.error': 'Error fetching repositories:',
    
    // Contact
    'contact.title': 'Let\'s Talk',
    'contact.subtitle': 'Interested in collaborating or have an amazing idea? Let\'s transform concepts into reality together.',
    'contact.ready': 'Ready for the next project?',
    'contact.description': 'Whether it\'s a freelance project, job opportunity, or just a chat about technology, I\'m always open to new possibilities.',
    'contact.button': 'Get In Touch',
    
    // Footer
    'footer.text': '© 2024 OniMock. Built with ❤️ and lots of coffee.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
