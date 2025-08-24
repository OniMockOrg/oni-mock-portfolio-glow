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
    'hero.titles.3': 'Solucionador de Problemas',
    'hero.titles.4': 'Entusiasta de Código',
    'hero.titles.5': 'Entusiasta de Tecnologia',
    'hero.description':
      'Transformando ideias em código, criando experiências digitais incríveis e soluções inovadoras que fazem a diferença.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.aboutMe': 'Sobre Mim',

    // About
    'about.title': 'Sobre Mim',
    'about.subtitle':
      'Desenvolvedor apaixonado por tecnologia, sempre buscando criar soluções elegantes e eficientes que impactem positivamente a vida das pessoas.',
    'about.journey': 'Minha Jornada',
    'about.journey.p1':
      'Como desenvolvedor full stack, tenho paixão por criar experiências digitais excepcionais. Especializo-me em tecnologias modernas e estou sempre explorando novas ferramentas e metodologias.',
    'about.journey.p2':
      'Acredito que o código deve ser não apenas funcional, mas também elegante e manutenível. Cada projeto é uma oportunidade de aprender algo novo e contribuir para a comunidade de desenvolvedores.',
    'about.technologies': 'Tecnologias',
    'about.interests.cleancode.title': 'Código Limpo',
    'about.interests.cleancode.desc': 'Código limpo e bem estruturado',
    'about.interests.innovation.title': 'Inovação',
    'about.interests.innovation.desc': 'Sempre buscando novas soluções',
    'about.interests.performance.title': 'Desempenho',
    'about.interests.performance.desc': 'Otimização e alta performance',
    'about.interests.opensource.title': 'Código Aberto',
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
      'Soluções especializadas para automação de sorteios e gerenciamento digital',
    'services.automation.title': 'Automação de Sorteios',
    'services.automation.description':
      'Sistema completo de automação para sorteios por meio da plataforma AlphaBot. Oferecemos soluções eficientes e confiáveis para gerenciar sorteios, desde o cadastro de participantes até a seleção de vencedores.',
    'services.automation.feature1':
      'Gerenciamento e cadastro automatizado de participantes',
    'services.automation.feature2':
      'Sistema de seleção de vencedores transparente e seguro',
    'services.automation.feature3':
      'Relatórios em tempo real e análises detalhadas',
    'services.learnMore': 'Saiba Mais',

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
      'Interessado em colaborar ou tem uma ideia incrível? Vamos transformar conceitos em realidade juntos.',
    'contact.ready': 'Pronto para o próximo projeto?',
    'contact.button': 'Entrar em Contato',
    'contact.email': 'Email',
    'contact.location': 'Localização',
    'contact.social': 'Redes Sociais',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'seu@email.com',
    'contact.form.subject': 'Assunto',
    'contact.form.subject.placeholder': 'Sobre o que é isso?',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Conte-me sobre seu projeto',
    'contact.form.submit': 'Enviar mensagem',
    'contact.form.sending': 'Enviando...',
    'contact.form.success':
      '✅ Sua mensagem foi enviada com sucesso! Entrarei em contato em breve.',
    'contact.form.error':
      '❌ Houve um erro ao enviar sua mensagem. Verifique se o EmailJS está configurado corretamente ou tente novamente mais tarde.',

    // Footer
    'footer.text': '© {year} OniMock. Construído com ❤️ e muito café.',

    // AlphaBot Page
    'alphabot.hero.title': 'Automação de Sorteios AlphaBot',
    'alphabot.hero.subtitle':
      'Plataforma completa de automação para sorteios e gerenciamento digital',
    'alphabot.hero.description':
      'Transforme o gerenciamento de seus sorteios com nosso sistema avançado de automação. Do cadastro de participantes à seleção de vencedores, o AlphaBot oferece uma solução completa e confiável.',
    'alphabot.hero.cta': 'Começar',
    'alphabot.hero.demo': 'Ver Demonstração',

    // AlphaBot Features
    'alphabot.features.title': 'Funcionalidades Revolucionárias',
    'alphabot.features.subtitle':
      'Tecnologia de ponta que transforma como você gerencia seus projetos',
    'alphabot.features.automation.title': 'Automação Completa',
    'alphabot.features.automation.description':
      'Sistema totalmente automatizado para gerenciar sorteios do início ao fim.',
    'alphabot.features.security.title': 'Segurança Garantida',
    'alphabot.features.security.description':
      'Proteção avançada de dados e total transparência nos sorteios.',
    'alphabot.features.reports.title': 'Relatórios Detalhados',
    'alphabot.features.reports.description':
      'Análises completas e relatórios em tempo real para melhor gerenciamento.',

    // AlphaBot informative sections
    'alphabot.sections.automation.title':
      'Automação de Cadastro de Sorteios com Alphabot',
    'alphabot.sections.automation.description':
      'Maximize suas chances com eficiência! Automatize cadastros na plataforma Alphabot, economizando tempo e aumentando suas chances de ganhar NFTs.',
    'alphabot.sections.automation.feature1':
      'Cadastro Automático: Inscreve suas contas assim que os sorteios ficam ativos.',
    'alphabot.sections.automation.feature2':
      'Suporte a Múltiplas Contas: Gerencie várias contas simultaneamente.',
    'alphabot.sections.automation.feature3':
      'Gerenciamento Inteligente de Filas: Cadastros otimizados com controle de limites.',

    'alphabot.sections.notifications.title':
      'Notificações em Tempo Real via Discord e Telegram',
    'alphabot.sections.notifications.description':
      'Receba alertas instantâneos sobre cadastros, vitórias e oportunidades de mint.',
    'alphabot.sections.notifications.feature1':
      'Alertas Instantâneos: Informações no momento certo.',
    'alphabot.sections.notifications.feature2':
      'Webhooks Personalizáveis: Configure conforme suas preferências.',
    'alphabot.sections.notifications.feature3':
      'Atualizações Amigáveis: Mensagens claras com links úteis.',

    'alphabot.sections.management.title':
      'Gerenciamento Robusto de Erros e Dados',
    'alphabot.sections.management.description':
      'Confiabilidade garantida para manter sua estratégia funcionando.',
    'alphabot.sections.management.feature1':
      'Recuperação Inteligente de Erros: Tentativas automáticas.',
    'alphabot.sections.management.feature2':
      'Armazenamento Seguro: MongoDB com limpeza periódica.',
    'alphabot.sections.management.feature3':
      'Infraestrutura Escalonável: Lida com altos volumes sem conflitos.',

    'alphabot.sections.learnMore': 'Saiba Mais',
  },
};

export default ptBr;
