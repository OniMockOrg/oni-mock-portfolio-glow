import { LanguageFile } from '../types/language';

const es: LanguageFile = {
  config: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: 'es',
  },
  translations: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.services': 'Servicios',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',

    // Hero
    'hero.titles.0': 'Desarrollador Full Stack',
    'hero.titles.1': 'Diseñador',
    'hero.titles.2': 'Creador de soluciones',
    'hero.titles.3': 'Solucionador de problemas',
    'hero.titles.4': 'Entusiasta del código',
    'hero.titles.5': 'Entusiasta de la tecnología',
    'hero.description':
      'Transformando ideas en código, creando experiencias digitales increíbles y soluciones innovadoras que marcan la diferencia.',
    'hero.viewProjects': 'Ver proyectos',
    'hero.aboutMe': 'Sobre mí',

    // Sobre mí
    'about.title': 'Sobre mí',
    'about.subtitle':
      'Desarrollador apasionado por la tecnología, siempre buscando crear soluciones elegantes y eficientes que impacten positivamente en la vida de las personas.',
    'about.journey': 'Mi trayectoria',
    'about.journey.p1':
      'Como desarrollador full stack, tengo una pasión por crear experiencias digitales excepcionales. Me especializo en tecnologías modernas y siempre estoy explorando nuevas herramientas y metodologías.',
    'about.journey.p2':
      'Creo que el código no solo debe ser funcional, sino también elegante y mantenible. Cada proyecto es una oportunidad para aprender algo nuevo y contribuir a la comunidad de desarrolladores.',
    'about.technologies': 'Tecnologías',
    'about.interests.cleancode.title': 'Código limpio',
    'about.interests.cleancode.desc': 'Código limpio y bien estructurado',
    'about.interests.innovation.title': 'Innovación',
    'about.interests.innovation.desc': 'Siempre buscando nuevas soluciones',
    'about.interests.performance.title': 'Rendimiento',
    'about.interests.performance.desc': 'Optimización y alto rendimiento',
    'about.interests.opensource.title': 'Código abierto',
    'about.interests.opensource.desc': 'Contribuyendo a la comunidad',
    'about.stats.location': 'Ubicación',
    'about.stats.country': 'Brasil',
    'about.stats.experience': 'Experiencia',
    'about.stats.years': '{years} años',
    'about.stats.focus': 'Enfoque',
    'about.stats.fullstack': 'Full Stack',

    // Servicios
    'services.title': 'Servicios',
    'services.subtitle':
      'Soluciones especializadas para la automatización de sorteos y la gestión digital',
    'services.automation.title': 'Automatización de sorteos',
    'services.automation.description':
      'Sistema de automatización completo para sorteos a través de la plataforma AlphaBot. Ofrecemos soluciones eficientes y fiables para gestionar sorteos, desde el registro de participantes hasta la selección de ganadores.',
    'services.automation.feature1':
      'Gestión y registro automatizado de participantes',
    'services.automation.feature2':
      'Sistema de selección de ganadores transparente y seguro',
    'services.automation.feature3':
      'Informes en tiempo real y análisis detallados',
    'services.learnMore': 'Saber más',

    // Proyectos
    'projects.title': 'Proyectos',
    'projects.subtitle':
      'Una selección de mis proyectos más recientes e interesantes, disponibles en GitHub para explorar y contribuir.',
    'projects.viewAll': 'Ver todos los proyectos',
    'projects.loading': 'Cargando proyectos...',
    'projects.defaultDesc':
      'Proyecto interesante desarrollado con pasión y dedicación.',
    'projects.error': 'Error al obtener repositorios:',

    // Contacto
    'contact.country': 'Brasil',
    'contact.title': 'Hablemos',
    'contact.subtitle':
      '¿Interesado en colaborar o tienes una idea increíble? Transformemos conceptos en realidad juntos.',
    'contact.ready': '¿Listo para el próximo proyecto?',
    'contact.button': 'Contactar',
    'contact.email': 'Correo electrónico',
    'contact.location': 'Ubicación',
    'contact.social': 'Enlaces sociales',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo electrónico',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.subject': 'Asunto',
    'contact.form.subject.placeholder': '¿De qué se trata?',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Cuéntame sobre tu proyecto',
    'contact.form.submit': 'Enviar mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success':
      '✅ ¡Tu mensaje se envió con éxito! Me pondré en contacto pronto.',
    'contact.form.error':
      '❌ Hubo un error al enviar tu mensaje. Por favor, verifica si has configurado EmailJS correctamente o intenta de nuevo más tarde.',

    // Pie de página
    'footer.text': '© {year} OniMock. Construido con ❤️ y mucho café.',

    // Página de AlphaBot
    'alphabot.hero.title': 'Automatización de sorteos AlphaBot',
    'alphabot.hero.subtitle':
      'Plataforma completa de automatización para sorteos y gestión digital',
    'alphabot.hero.description':
      'Transforma la gestión de tus sorteos con nuestro sistema de automatización avanzado. Desde el registro de participantes hasta la selección de ganadores, AlphaBot ofrece una solución completa y fiable.',
    'alphabot.hero.cta': 'Comenzar',
    'alphabot.hero.demo': 'Ver demostración',

    // Características de AlphaBot
    'alphabot.features.title': 'Características revolucionarias',
    'alphabot.features.subtitle':
      'Tecnología de vanguardia que transforma cómo gestionas tus proyectos',
    'alphabot.features.automation.title': 'Automatización completa',
    'alphabot.features.automation.description':
      'Sistema totalmente automatizado para gestionar sorteos de principio a fin.',
    'alphabot.features.security.title': 'Seguridad garantizada',
    'alphabot.features.security.description':
      'Protección de datos avanzada y total transparencia en los sorteos.',
    'alphabot.features.reports.title': 'Informes detallados',
    'alphabot.features.reports.description':
      'Análisis completo e informes en tiempo real para una mejor gestión.',

    // Secciones informativas de AlphaBot
    'alphabot.sections.automation.title':
      'Automatización de registros de sorteos con Alphabot',
    'alphabot.sections.automation.description':
      '¡Maximiza tus posibilidades con eficiencia! Automatiza registros en la plataforma Alphabot, ahorrando tiempo y aumentando tus posibilidades de ganar NFTs.',
    'alphabot.sections.automation.feature1':
      'Registro automático: Inscribe tus cuentas en cuanto los sorteos estén activos.',
    'alphabot.sections.automation.feature2':
      'Soporte multi-cuenta: Gestiona varias cuentas simultáneamente.',
    'alphabot.sections.automation.feature3':
      'Gestión inteligente de colas: Registros optimizados con control de límites.',

    'alphabot.sections.notifications.title':
      'Notificaciones en tiempo real vía Discord y Telegram',
    'alphabot.sections.notifications.description':
      'Recibe alertas instantáneas sobre registros, victorias y oportunidades de mint.',
    'alphabot.sections.notifications.feature1':
      'Alertas instantáneas: Información en el momento justo.',
    'alphabot.sections.notifications.feature2':
      'Webhooks personalizables: Configura según tus preferencias.',
    'alphabot.sections.notifications.feature3':
      'Actualizaciones fáciles de usar: Mensajes claros con enlaces útiles.',

    'alphabot.sections.management.title': 'Gestión robusta de errores y datos',
    'alphabot.sections.management.description':
      'Fiabilidad garantizada para mantener tu estrategia en marcha.',
    'alphabot.sections.management.feature1':
      'Recuperación inteligente de errores: Reintentos automáticos.',
    'alphabot.sections.management.feature2':
      'Almacenamiento seguro: MongoDB con limpieza periódica.',
    'alphabot.sections.management.feature3':
      'Infraestructura escalable: Maneja altos volúmenes sin conflictos.',

    'alphabot.sections.learnMore': 'Saber más',
  },
};

export default es;
