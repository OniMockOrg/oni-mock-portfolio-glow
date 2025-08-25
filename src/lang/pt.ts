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
    'nav.contact': 'Contacto',

    // Hero
    'hero.titles.0': 'Programador Full Stack',
    'hero.titles.1': 'Designer',
    'hero.titles.2': 'Criador de Soluções',
    'hero.titles.3': 'Resolvedor de Problemas',
    'hero.titles.4': 'Entusiasta de Código',
    'hero.titles.5': 'Entusiasta de Tecnologia',
    'hero.description':
      'Transformando ideias em código, criando experiências digitais incríveis e soluções inovadoras que fazem a diferença.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.aboutMe': 'Sobre Mim',

    // About
    'about.title': 'Sobre Mim',
    'about.subtitle':
      'Programador apaixonado por tecnologia, sempre em busca de criar soluções elegantes e eficientes que impactem positivamente a vida das pessoas.',
    'about.journey': 'A Minha Jornada',
    'about.journey.p1':
      'Como programador full stack, tenho paixão por criar experiências digitais excecionais. Especializo-me em tecnologias modernas e estou sempre a explorar novas ferramentas e metodologias.',
    'about.journey.p2':
      'Acredito que o código deve ser não apenas funcional, mas também elegante e sustentável. Cada projeto é uma oportunidade para aprender algo novo e contribuir para a comunidade de programadores.',
    'about.technologies': 'Tecnologias',
    'about.interests.cleancode.title': 'Código Limpo',
    'about.interests.cleancode.desc': 'Código limpo e bem estruturado',
    'about.interests.innovation.title': 'Inovação',
    'about.interests.innovation.desc': 'Sempre em busca de novas soluções',
    'about.interests.performance.title': 'Desempenho',
    'about.interests.performance.desc': 'Otimização e alto desempenho',
    'about.interests.opensource.title': 'Código Aberto',
    'about.interests.opensource.desc': 'Contribuir para a comunidade',
    'about.stats.location': 'Localização',
    'about.stats.country': 'Brasil',
    'about.stats.experience': 'Experiência',
    'about.stats.years': '{years} Anos',
    'about.stats.focus': 'Foco',
    'about.stats.fullstack': 'Full Stack',
    'about.cta': 'Contate-me',

    // Services
    'services.title': 'Serviços',
    'services.subtitle':
      'Soluções especializadas para automação de sorteios e gestão digital',
    'services.automation.title': 'Automação de Sorteios',
    'services.automation.description':
      'Sistema completo de automação de sorteios através da plataforma AlphaBot. Oferecemos soluções eficientes e fiáveis para gerir sorteios, desde o registo de participantes até à seleção de vencedores.',
    'services.automation.feature1':
      'Gestão e registo automatizado de participantes',
    'services.automation.feature2':
      'Sistema de seleção de vencedores transparente e seguro',
    'services.automation.feature3':
      'Relatórios em tempo real e análises detalhadas',
    'services.learnMore': 'Saber Mais',

    // Projects
    'projects.title': 'Projetos',
    'projects.subtitle':
      'Uma seleção dos meus projetos mais recentes e interessantes, disponíveis no GitHub para exploração e contribuição.',
    'projects.viewAll': 'Ver todos os projetos',
    'projects.loading': 'A carregar projetos...',
    'projects.defaultDesc':
      'Projeto interessante desenvolvido com paixão e dedicação.',
    'projects.error': 'Erro ao obter repositórios:',

    // Contact
    'contact.country': 'Brasil',
    'contact.title': 'Fale Comigo',
    'contact.subtitle':
      'Interessado em colaborar ou tem uma ideia fantástica? Vamos transformar conceitos em realidade juntos.',
    'contact.ready': 'Pronto para o próximo projeto?',
    'contact.button': 'Entrar em Contacto',
    'contact.email': 'Email',
    'contact.location': 'Localização',
    'contact.social': 'Redes Sociais',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'seu@email.com',
    'contact.form.subject': 'Assunto',
    'contact.form.subject.placeholder': 'De que se trata?',
    'contact.form.message': 'Mensagem',
    'contact.form.message.placeholder': 'Fale-me sobre o seu projeto',

    'contact.form.submit': 'Enviar mensagem',
    'contact.form.sending': 'A enviar...',
    'contact.form.success':
      '✅ A sua mensagem foi enviada com sucesso! Entrarei em contacto em breve.',
    'contact.form.error':
      '❌ Ocorreu um erro ao enviar a sua mensagem. Verifique se configurou o EmailJS corretamente ou tente novamente mais tarde.',
    'contact.form.error.button': 'Erro no envio. Tente novamente.',
    'contact.form.success.button': 'Mensagem enviada!',
    'contact.form.name.placeholder': 'O seu nome completo',
    'contact.form.validation.name': 'Nome deve ter pelo menos 2 caracteres',
    'contact.form.validation.email': 'Por favor, insira um endereço de email válido',
    'contact.form.validation.subject': 'Assunto deve ter pelo menos 3 caracteres',
    'contact.form.validation.message': 'Mensagem deve ter pelo menos 10 caracteres',

    // Footer
    'footer.text': '© {year} OniMock. Construído com ❤️ e muito café.',

    // AlphaBot Page
    'alphabot.hero.title': 'Automação de Sorteios AlphaBot',
    'alphabot.hero.subtitle':
      'Plataforma completa de automação para sorteios e gestão digital',
    'alphabot.hero.description':
      'Transforme a gestão dos seus sorteios com o nosso sistema de automação avançado. Do registo de participantes à seleção de vencedores, o AlphaBot oferece uma solução completa e fiável.',
    'alphabot.hero.cta': 'Começar',
    'alphabot.hero.demo': 'Ver Demonstração',

    // AlphaBot Features
    'alphabot.features.title': 'Funcionalidades Revolucionárias',
    'alphabot.features.subtitle':
      'Tecnologia de ponta que transforma a forma como gere os seus projetos',
    'alphabot.features.automation.title': 'Automação Completa',
    'alphabot.features.automation.description':
      'Sistema totalmente automatizado para gerir sorteios do início ao fim.',
    'alphabot.features.security.title': 'Segurança Garantida',
    'alphabot.features.security.description':
      'Proteção avançada de dados e total transparência nos sorteios.',
    'alphabot.features.reports.title': 'Relatórios Detalhados',
    'alphabot.features.reports.description':
      'Análise completa e relatórios em tempo real para uma melhor gestão.',

    // AlphaBot informative sections
    'alphabot.sections.automation.title':
      'Automação de Registo de Sorteios com o AlphaBot',
    'alphabot.sections.automation.description':
      'Maximize as suas hipóteses com eficiência! Automatize registos na plataforma AlphaBot, poupando tempo e aumentando as suas probabilidades de ganhar NFTs.',
    'alphabot.sections.automation.feature1':
      'Registo Automático: Inscreve as suas contas assim que os sorteios ficam ativos.',
    'alphabot.sections.automation.feature2':
      'Suporte Multi-Contas: Gira várias contas simultaneamente.',
    'alphabot.sections.automation.feature3':
      'Gestão Inteligente de Filas: Registos otimizados com controlo de limites.',

    'alphabot.sections.notifications.title':
      'Notificações em Tempo Real via Discord e Telegram',
    'alphabot.sections.notifications.description':
      'Receba alertas instantâneos sobre registos, vitórias e oportunidades de mint.',
    'alphabot.sections.notifications.feature1':
      'Alertas Instantâneos: Informação no momento certo.',
    'alphabot.sections.notifications.feature2':
      'Webhooks Personalizáveis: Configure conforme as suas preferências.',
    'alphabot.sections.notifications.feature3':
      'Atualizações Amigáveis: Mensagens claras com links úteis.',

    'alphabot.sections.management.title': 'Gestão Robusta de Erros e Dados',
    'alphabot.sections.management.description':
      'Fiabilidade garantida para manter a sua estratégia em funcionamento.',
    'alphabot.sections.management.feature1':
      'Recuperação Inteligente de Erros: Tentativas automáticas.',
    'alphabot.sections.management.feature2':
      'Armazenamento Seguro: MongoDB com limpeza periódica.',
    'alphabot.sections.management.feature3':
      'Infraestrutura Escalável: Suporta grandes volumes sem conflitos.',

    'alphabot.sections.learnMore': 'Saber Mais',
  },
};

export default pt;
