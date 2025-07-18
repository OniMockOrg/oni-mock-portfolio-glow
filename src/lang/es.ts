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

    // Footer
    'footer.text': '© {year} OniMock. Desarrollado con ❤️ y mucho café.',
  },
};

export default es;
