import { LanguageFile } from '../types/language';

const ptBr: LanguageFile = {
  config: {
    code: 'pt-br',
    name: 'Portuguese (Brazil)',
    nativeName: 'Português (Brasil)',
    flag: 'br',
  },
  translations: {
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

export default ptBr;
