import { LanguageFile } from '../types/language';

const ru: LanguageFile = {
  config: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flag: 'ru',
  },
  translations: {
    // Navigation
    'nav.home': 'Главная',
    'nav.about': 'Обо мне',
    'nav.projects': 'Проекты',
    'nav.contact': 'Контакты',

    // Hero
    'hero.titles.0': 'Фулл-стек разработчик',
    'hero.titles.1': 'Дизайнер',
    'hero.titles.2': 'Создатель решений',
    'hero.titles.3': 'Модератор',
    'hero.titles.4': 'Энтузиаст программирования',
    'hero.titles.5': 'Энтузиаст технологий',
    'hero.description':
      'Превращаю идеи в код, создаю невероятные цифровые впечатления и инновационные решения, которые меняют жизнь.',
    'hero.viewProjects': 'Посмотреть проекты',
    'hero.aboutMe': 'Обо мне',

    // About
    'about.title': 'Обо мне',
    'about.subtitle':
      'Увлеченный технологиями разработчик, стремящийся создавать элегантные и эффективные решения, которые положительно влияют на жизнь людей.',
    'about.journey': 'Мой путь',
    'about.journey.p1':
      'Как фулл-стек разработчик, я увлечен созданием исключительных цифровых впечатлений. Специализируюсь на современных технологиях и всегда изучаю новые инструменты и методологии.',
    'about.journey.p2':
      'Я считаю, что код должен быть не только функциональным, но и элегантным и поддерживаемым. Каждый проект — это возможность узнать что-то новое и внести вклад в сообщество разработчиков.',
    'about.technologies': 'Технологии',
    'about.interests.cleancode.title': 'Чистый код',
    'about.interests.cleancode.desc': 'Чистый и хорошо структурированный код',
    'about.interests.innovation.title': 'Инновации',
    'about.interests.innovation.desc': 'Всегда в поиске новых решений',
    'about.interests.performance.title': 'Производительность',
    'about.interests.performance.desc':
      'Оптимизация и высокая производительность',
    'about.interests.opensource.title': 'Открытый код',
    'about.interests.opensource.desc': 'Вклад в сообщество',

    // Projects
    'projects.title': 'Проекты',
    'projects.subtitle':
      'Подборка моих последних и интересных проектов, доступных на GitHub для изучения и совместной работы.',
    'projects.viewAll': 'Посмотреть все проекты',
    'projects.loading': 'Загрузка проектов...',
    'projects.defaultDesc':
      'Интересный проект, разработанный с страстью и самоотдачей.',
    'projects.error': 'Ошибка при получении репозиториев:',

    // Contact
    'contact.country': 'Бразилия (Brazilija)',
    'contact.title': 'Давай поговорим',
    'contact.subtitle':
      'Хотите сотрудничать или у вас есть потрясающая идея? Давай воплощать концепции в реальность вместе.',
    'contact.ready': 'Готов к следующему проекту?',
    'contact.description':
      'Будь то фриланс-проект, возможность работы или просто разговор о технологиях, я всегда открыт для новых возможностей.',
    'contact.button': 'Связаться',

    // Footer
    'footer.text':
      '© {year} OniMock. Разработано с ❤️ и большим количеством кофе.',
  },
};

export default ru;
