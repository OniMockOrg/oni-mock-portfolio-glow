import { LanguageFile } from '../types/language';

const pt: LanguageFile = {
  config: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: 'pt',
  },
  translations: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    // Hero
    'hero.titles.0': 'Desenvolvedor Full Stack',
    'hero.titles.1': 'Designer',
    'hero.titles.2': 'Solucionador de Problemas',
    'hero.titles.3': 'Administrador',
    'hero.titles.4': 'Entusiasta de Programação',
    'hero.titles.5': 'Amante de Tecnologia',
    'hero.description':
      'Transformando ideias em código e criando experiências digitais incríveis e soluções inovadoras que fazem a diferença.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.aboutMe': 'Sobre Mim',

    // About
    'about.title': 'Sobre Mim',
    'about.subtitle':
      'Um desenvolvedor apaixonado por tecnologia, sempre em busca de criar soluções elegantes e eficientes que impactam positivamente a vida das pessoas.',
    'about.journey': 'Minha Jornada',
    'about.journey.p1':
      'Como desenvolvedor full stack, sou apaixonado por criar experiências digitais excepcionais. Foco em tecnologias modernas e estou sempre explorando novas ferramentas e metodologias.',
    'about.journey.p2':
      'Acredito que o código deve ser não apenas funcional, mas também elegante e fácil de manter. Cada projeto é uma oportunidade de aprender algo novo e contribuir para a comunidade de desenvolvedores.',
    'about.technologies': 'Tecnologias',
    'about.interests.cleancode.title': 'Código Limpo',
    'about.interests.cleancode.desc': 'Código limpo e bem estruturado',
    'about.interests.innovation.title': 'Inovação',
    'about.interests.innovation.desc': 'Sempre buscando novas soluções',
    'about.interests.performance.title': 'Performance',
    'about.interests.performance.desc': 'Otimização e alta performance',
    'about.interests.opensource.title': 'Open Source',
    'about.interests.opensource.desc': 'Contribuindo para a comunidade',
    'about.stats.location': 'Localização',
    'about.stats.country': 'Brasil',
    'about.stats.experience': 'Experiência',
    'about.stats.years': '{years} Anos',
    'about.stats.focus': 'Foco',
    'about.stats.fullstack': 'Full Stack',

    // Services
    'services.title': 'Serviços',
    'services.subtitle':
      'Soluções profissionais em automação de sorteios e gestão digital',
    'services.automation.title': 'Automação de Sorteios',
    'services.automation.description':
      'Sistema completo de automação de sorteios através da plataforma AlphaBot. Oferecemos soluções eficientes e confiáveis para gerenciamento de sorteios, desde o registro de participantes até a seleção de ganhadores.',
    'services.automation.feature1':
      'Gestão automatizada de participantes e registros',
    'services.automation.feature2':
      'Sistema transparente e seguro de seleção de ganhadores',
    'services.automation.feature3':
      'Relatórios em tempo real e análises detalhadas',
    'services.automation.cta': 'Saiba Mais',
    'services.learnMore': 'Saber Mais',

    // Projects
    'projects.title': 'Projetos',
    'projects.subtitle':
      'Uma seleção dos meus projetos mais recentes e interessantes, disponíveis para explorar e contribuir no GitHub.',
    'projects.viewAll': 'Ver Todos os Projetos',
    'projects.loading': 'Carregando projetos...',
    'projects.defaultDesc':
      'Projeto interessante desenvolvido com paixão e dedicação.',
    'projects.error': 'Erro ao buscar repositórios: ',

    // Contact
    'contact.country': 'Brasil',
    'contact.title': 'Vamos Conversar',
    'contact.subtitle':
      'Interessado em colaborar ou tem uma ideia incrível? Vamos transformar conceitos em realidade.',
    'contact.ready': 'Pronto para o próximo projeto?',
    'contact.description':
      'Seja para um projeto freelance, uma oportunidade de trabalho ou apenas uma conversa sobre tecnologia, estou sempre aberto a novas possibilidades.',
    'contact.button': 'Entre em Contato',
    'contact.email': 'E-mail',
    'contact.location': 'Localização',
    'contact.social': 'Redes Sociais',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.email.placeholder': 'Seu e-mail',
    'contact.form.subject': 'Assunto',
    'contact.form.subject.placeholder': 'Assunto da sua mensagem',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Sua mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.sending': 'Enviando...',

    // Footer
    'footer.text': '© {year} OniMock. Desenvolvido com ❤️ e muito café.',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot Automação de Sorteios',
    'alphabot.hero.subtitle':
      'Plataforma completa de automação para sorteios e gestão digital',
    'alphabot.hero.description':
      'Revolucione seu gerenciamento de sorteios com nosso sistema avançado de automação. Do registro de participantes à seleção de ganhadores, o AlphaBot oferece uma solução completa e confiável.',
    'alphabot.hero.cta': 'Começar Agora',
    'alphabot.hero.demo': 'Ver Demo',

    // AlphaBot Features
    'alphabot.features.automation.title': 'Totalmente Automatizado',
    'alphabot.features.automation.description':
      'Sistema completamente automatizado para gerenciar sorteios do início ao fim.',
    'alphabot.features.security.title': 'Garantia de Segurança',
    'alphabot.features.security.description':
      'Proteção avançada de dados e total transparência nos sorteios.',
    'alphabot.features.reports.title': 'Relatórios Detalhados',
    'alphabot.features.reports.description':
      'Análises completas e relatórios em tempo real para melhor gestão.',

    // AlphaBot Seções de Informação
    'alphabot.sections.automation.title':
      'Automatize Registros de Sorteios com o Alphabot',
    'alphabot.sections.automation.description':
      'Maximize suas chances com eficiência! Automatize seus registros na plataforma Alphabot, economize tempo e aumente suas chances de ganhar NFTs.',
    'alphabot.sections.automation.feature1':
      'Registro Automático: Registra sua conta assim que um sorteio é ativado.',
    'alphabot.sections.automation.feature2':
      'Suporte Multi-contas: Gerencie várias contas simultaneamente.',
    'alphabot.sections.automation.feature3':
      'Gerenciamento Inteligente de Filas: Otimiza registros com controle de limites.',

    'alphabot.sections.notifications.title':
      'Notificações em Tempo Real via Discord e Telegram',
    'alphabot.sections.notifications.description':
      'Receba alertas instantâneos sobre registros, vitórias e oportunidades de mint.',
    'alphabot.sections.notifications.feature1':
      'Alertas Instantâneos: Informações no momento certo.',
    'alphabot.sections.notifications.feature2':
      'Webhooks Personalizáveis: Configure de acordo com suas preferências.',
    'alphabot.sections.notifications.feature3':
      'Atualizações Amigáveis: Mensagens claras com links úteis.',

    'alphabot.sections.management.title':
      'Gerenciamento Robusto de Erros e Dados',
    'alphabot.sections.management.description':
      'Garanta confiabilidade mantendo suas estratégias em funcionamento.',
    'alphabot.sections.management.feature1':
      'Recuperação Inteligente de Erros: Retentativas automáticas.',
    'alphabot.sections.management.feature2':
      'Armazenamento Seguro: Limpeza periódica no MongoDB.',
    'alphabot.sections.management.feature3':
      'Infraestrutura Escalável: Gerencia grandes volumes sem conflitos.',

    'alphabot.sections.learnMore': 'Saiba Mais',
  },
};

export default pt;
