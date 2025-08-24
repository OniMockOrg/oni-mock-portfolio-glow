import { LanguageFile } from '../types/language';

const es: LanguageFile = {
  config: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: 'es',
  },
  translations: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero
    'hero.titles.0': 'Desarrollador Full Stack',
    'hero.titles.1': 'Diseñador',
    'hero.titles.2': 'Creador de Soluciones',
    'hero.titles.3': 'Moderador',
    'hero.titles.4': 'Entusiasta de la Programación',
    'hero.titles.5': 'Entusiasta de la Tecnología',
    'hero.description':
      'Transformando ideas en código, creando experiencias digitales increíbles y soluciones innovadoras que hacen la diferencia.',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.aboutMe': 'Acerca de Mí',

    // About
    'about.title': 'Acerca de Mí',
    'about.subtitle':
      'Desarrollador apasionado por la tecnología, siempre en busca de crear soluciones elegantes y eficientes que impacten positivamente en la vida de las personas.',
    'about.journey': 'Mi Trayectoria',
    'about.journey.p1':
      'Como desarrollador full stack, tengo pasión por crear experiencias digitales excepcionales. Me especializo en tecnologías modernas y estoy siempre explorando nuevas herramientas y metodologías.',
    'about.journey.p2':
      'Creo que el código debe ser no solo funcional, sino también elegante y mantenible. Cada proyecto es una oportunidad para aprender algo nuevo y contribuir a la comunidad de desarrolladores.',
    'about.technologies': 'Tecnologías',
    'about.interests.cleancode.title': 'Código Limpio',
    'about.interests.cleancode.desc': 'Código limpio y bien estructurado',
    'about.interests.innovation.title': 'Innovación',
    'about.interests.innovation.desc': 'Siempre buscando nuevas soluciones',
    'about.interests.performance.title': 'Rendimiento',
    'about.interests.performance.desc': 'Optimización y alto rendimiento',
    'about.interests.opensource.title': 'Código Abierto',
    'about.interests.opensource.desc': 'Contribuyendo a la comunidad',
    'about.stats.location': 'Ubicación',
    'about.stats.country': 'Brasil',
    'about.stats.experience': 'Experiencia',
    'about.stats.years': '{years} Años',
    'about.stats.focus': 'Enfoque',
    'about.stats.fullstack': 'Full Stack',

    // Services
    'services.title': 'Servicios',
    'services.subtitle':
      'Soluciones especializadas en automatización de rifas y gestión digital',
    'services.automation.title': 'Automatización de Rifas',
    'services.automation.description':
      'Sistema completo de automatización para rifas a través de la plataforma AlphaBot. Ofrecemos soluciones eficientes y confiables para la gestión de rifas, desde el registro de participantes hasta la selección de ganadores.',
    'services.automation.feature1':
      'Gestión automatizada de participantes y registros',
    'services.automation.feature2':
      'Sistema transparente y seguro de selección de ganadores',
    'services.automation.feature3':
      'Informes en tiempo real y análisis detallados',
    'services.automation.cta': 'Saber Más',
    'services.learnMore': 'Saber Más',

    // Projects
    'projects.title': 'Proyectos',
    'projects.subtitle':
      'Una selección de mis proyectos más recientes e interesantes, disponibles en GitHub para exploración y contribución.',
    'projects.viewAll': 'Ver todos los proyectos',
    'projects.loading': 'Cargando proyectos...',
    'projects.defaultDesc':
      'Proyecto interesante desarrollado con pasión y dedicación.',
    'projects.error': 'Error al obtener repositorios:',

    // Contact
    'contact.country': 'Brasil',
    'contact.title': 'Hablemos',
    'contact.subtitle':
      '¿Interesado en colaborar o tienes una idea increíble? Transformemos conceptos en realidad juntos.',
    'contact.ready': '¿Listo para el próximo proyecto?',
    'contact.description':
      'Ya sea un proyecto freelance, una oportunidad de trabajo o simplemente una charla sobre tecnología, estoy siempre abierto a nuevas posibilidades.',
    'contact.button': 'Contactar',
    'contact.email': 'Correo electrónico',
    'contact.location': 'Ubicación',
    'contact.social': 'Redes Sociales',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.email.placeholder': 'Tu correo electrónico',
    'contact.form.subject': 'Asunto',
    'contact.form.subject.placeholder': 'El asunto de tu mensaje',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Tu mensaje',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.sending': 'Enviando...',

    // Footer
    'footer.text': '© {year} OniMock. Construido con ❤️ y mucho café.',

    // AlphaBot Page
    'alphabot.hero.title': 'Automatización de Sorteos AlphaBot',
    'alphabot.hero.subtitle':
      'Plataforma completa de automatización para sorteos y gestión digital',
    'alphabot.hero.description':
      'Transforma tu gestión de sorteos con nuestro sistema avanzado de automatización. Desde el registro de participantes hasta la selección de ganadores, AlphaBot ofrece una solución completa y confiable.',
    'alphabot.hero.cta': 'Comenzar Ahora',
    'alphabot.hero.demo': 'Ver Demo',

    // AlphaBot Features
    'alphabot.features.title': 'Características Revolucionarias',
    'alphabot.features.subtitle': 'Tecnología de vanguardia que transforma la forma en que gestionas tus proyectos',
    'alphabot.features.automation.title': 'Automatización Completa',
    'alphabot.features.automation.description':
      'Sistema totalmente automatizado para gestionar sorteos de principio a fin.',
    'alphabot.features.security.title': 'Seguridad Garantizada',
    'alphabot.features.security.description':
      'Protección avanzada de datos y transparencia total en los sorteos.',
    'alphabot.features.reports.title': 'Informes Detallados',
    'alphabot.features.reports.description':
      'Análisis completos e informes en tiempo real para una mejor gestión.',

    // Secciones informativas de AlphaBot
    'alphabot.sections.automation.title':
      'Automatización de Registro de Sorteos con Alphabot',
    'alphabot.sections.automation.description':
      '¡Maximiza tus oportunidades con eficiencia! Automatiza registros en la plataforma Alphabot, ahorrando tiempo y aumentando tus posibilidades de ganar NFTs.',
    'alphabot.sections.automation.feature1':
      'Registro Automático: Inscribe tus cuentas tan pronto como los sorteos se activen.',
    'alphabot.sections.automation.feature2':
      'Soporte Multi-Cuentas: Gestiona múltiples cuentas simultáneamente.',
    'alphabot.sections.automation.feature3':
      'Gestión Inteligente de Cola: Inscripciones optimizadas con control de límites.',

    'alphabot.sections.notifications.title':
      'Notificaciones en Tiempo Real vía Discord y Telegram',
    'alphabot.sections.notifications.description':
      'Recibe alertas instantáneas sobre inscripciones, victorias y oportunidades de mint.',
    'alphabot.sections.notifications.feature1':
      'Alertas Instantáneas: Información en el momento adecuado.',
    'alphabot.sections.notifications.feature2':
      'Webhooks Personalizables: Configura según tus preferencias.',
    'alphabot.sections.notifications.feature3':
      'Actualizaciones Amigables: Mensajes claros con enlaces útiles.',

    'alphabot.sections.management.title': 'Gestión Robusta de Errores y Datos',
    'alphabot.sections.management.description':
      'Confiabilidad garantizada para mantener tu estrategia funcionando.',
    'alphabot.sections.management.feature1':
      'Recuperación Inteligente de Errores: Reintentos automáticos.',
    'alphabot.sections.management.feature2':
      'Almacenamiento Seguro: MongoDB con limpieza periódica.',
    'alphabot.sections.management.feature3':
      'Infraestructura Escalable: Gestiona altos volúmenes sin conflictos.',

    'alphabot.sections.learnMore': 'Saber Más',
  },
};

export default es;
