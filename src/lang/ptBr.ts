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
    'nav.services': 'Serviços',
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

    // Services
    'services.title': 'Serviços',
    'services.subtitle': 'Soluções especializadas em automação de rifas e gestão digital',
    'services.automation.title': 'Automação de Rifas',
    'services.automation.description': 'Sistema completo de automação para rifas através da plataforma AlphaBot. Oferecemos soluções eficientes e confiáveis para gerenciamento de rifas, desde o cadastro de participantes até a seleção de ganhadores.',
    'services.automation.feature1': 'Gerenciamento automatizado de participantes e cadastros',
    'services.automation.feature2': 'Sistema transparente e seguro de seleção de ganhadores',
    'services.automation.feature3': 'Relatórios em tempo real e análises detalhadas',
    'services.automation.cta': 'Saiba Mais',

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
    'contact.email': 'E-mail',
    'contact.location': 'Localização',
    'contact.social': 'Redes Sociais',
    'contact.form.name': 'Nome',
    'contact.form.email': 'E-mail',
    'contact.form.email.placeholder': 'seu@email.com',
    'contact.form.subject': 'Assunto',
    'contact.form.subject.placeholder': 'Sobre o que é isso?',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Me conte sobre seu projeto',
    'contact.form.submit': 'Enviar mensagem',

    // Footer
    'footer.text': '© {year} OniMock. Construído com ❤️ e muito café.',

    // AlphaBot Page
    'alphabot.hero.title': 'Automação de Rifas AlphaBot',
    'alphabot.hero.subtitle': 'Plataforma completa de automação para rifas e gestão digital',
    'alphabot.hero.description': 'Transforme sua gestão de rifas com nosso sistema avançado de automação. Do cadastro de participantes à seleção de ganhadores, o AlphaBot oferece uma solução completa e confiável.',
    'alphabot.hero.cta': 'Começar Agora',
    'alphabot.hero.demo': 'Ver Demo',
    
    // AlphaBot Features
    'alphabot.features.automation.title': 'Automação Completa',
    'alphabot.features.automation.description': 'Sistema totalmente automatizado para gerenciar rifas do início ao fim.',
    'alphabot.features.security.title': 'Segurança Garantida',
    'alphabot.features.security.description': 'Proteção avançada de dados e transparência total nos sorteios.',
    'alphabot.features.reports.title': 'Relatórios Detalhados',
    'alphabot.features.reports.description': 'Análises completas e relatórios em tempo real para melhor gestão.',

    // Seções informativas do AlphaBot
    'alphabot.sections.automation.title': 'Automação de Registro de Rifas com Alphabot',
    'alphabot.sections.automation.description': 'Maximize suas chances com eficiência! Automatize registros na plataforma Alphabot, poupando tempo e aumentando suas chances de ganhar NFTs.',
    'alphabot.sections.automation.feature1': 'Registro Automático: Inscreve suas contas assim que as rifas ficam ativas.',
    'alphabot.sections.automation.feature2': 'Suporte Multi-Contas: Gerencie várias contas ao mesmo tempo.',
    'alphabot.sections.automation.feature3': 'Gerenciamento Inteligente de Fila: Inscrições otimizadas com controle de limites.',

    'alphabot.sections.notifications.title': 'Notificações em Tempo Real via Discord e Telegram',
    'alphabot.sections.notifications.description': 'Receba alertas instantâneos sobre inscrições, vitórias e oportunidades de mint.',
    'alphabot.sections.notifications.feature1': 'Alertas Instantâneos: Informações no momento certo.',
    'alphabot.sections.notifications.feature2': 'Webhooks Personalizáveis: Configure conforme suas preferências.',
    'alphabot.sections.notifications.feature3': 'Atualizações Amigáveis: Mensagens claras com links úteis.',

    'alphabot.sections.management.title': 'Gerenciamento Robusto de Erros e Dados',
    'alphabot.sections.management.description': 'Confiabilidade garantida para manter sua estratégia funcionando.',
    'alphabot.sections.management.feature1': 'Recuperação Inteligente de Erros: Retentativas automáticas.',
    'alphabot.sections.management.feature2': 'Armazenamento Seguro: MongoDB com limpeza periódica.',
    'alphabot.sections.management.feature3': 'Infraestrutura Escalável: Gerencia altos volumes sem conflitos.',
    
    'alphabot.sections.learnMore': 'Saiba Mais',
  },
};

export default ptBr;
