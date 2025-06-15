
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
