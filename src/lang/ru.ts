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
    'nav.services': 'Услуги',
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

    // Services
    'services.title': 'Услуги',
    'services.subtitle':
      'Специализированные решения для автоматизации розыгрышей и цифрового управления',
    'services.automation.title': 'Автоматизация Розыгрышей',
    'services.automation.description':
      'Комплексная система автоматизации розыгрышей через платформу AlphaBot. Мы предлагаем эффективные и надежные решения для управления розыгрышами, от регистрации участников до выбора победителей.',
    'services.automation.feature1':
      'Автоматизированное управление участниками и регистрацией',
    'services.automation.feature2':
      'Прозрачная и безопасная система выбора победителей',
    'services.automation.feature3':
      'Отчеты в реальном времени и детальная аналитика',
    'services.automation.cta': 'Узнать больше',
    'services.learnMore': 'Узнать больше',

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
    'contact.email': 'Электронная почта',
    'contact.location': 'Местоположение',
    'contact.social': 'Социальные сети',
    'contact.form.name': 'Имя',
    'contact.form.email': 'Электронная почта',
    'contact.form.email.placeholder': 'Ваша электронная почта',
    'contact.form.subject': 'Тема',
    'contact.form.subject.placeholder': 'Тема вашего сообщения',
    'contact.form.message': 'Сообщение',
    'contact.form.message.placeholder': 'Ваше сообщение',
    'contact.form.submit': 'Отправить сообщение',
    'contact.form.sending': 'Отправка...',

    // Footer
    'footer.text':
      '© {year} OniMock. Разработано с ❤️ и большим количеством кофе.',

    // AlphaBot Page
    'alphabot.hero.title': 'Автоматизация Розыгрышей AlphaBot',
    'alphabot.hero.subtitle':
      'Полная платформа автоматизации для розыгрышей и цифрового управления',
    'alphabot.hero.description':
      'Трансформируйте управление розыгрышами с нашей продвинутой системой автоматизации. От регистрации участников до выбора победителей, AlphaBot предлагает полное и надежное решение.',
    'alphabot.hero.cta': 'Начать Сейчас',
    'alphabot.hero.demo': 'Посмотреть Демо',

    // AlphaBot Features
    'alphabot.features.automation.title': 'Полная Автоматизация',
    'alphabot.features.automation.description':
      'Полностью автоматизированная система для управления розыгрышами от начала до конца.',
    'alphabot.features.security.title': 'Гарантированная Безопасность',
    'alphabot.features.security.description':
      'Продвинутая защита данных и полная прозрачность в розыгрышах.',
    'alphabot.features.reports.title': 'Детальные Отчеты',
    'alphabot.features.reports.description':
      'Комплексная аналитика и отчеты в реальном времени для лучшего управления.',

    // Информационные разделы AlphaBot
    'alphabot.sections.automation.title':
      'Автоматизация Регистрации в Розыгрышах с Alphabot',
    'alphabot.sections.automation.description':
      'Максимизируйте свои шансы с эффективностью! Автоматизируйте регистрации на платформе Alphabot, экономьте время и увеличивайте шансы получить NFT.',
    'alphabot.sections.automation.feature1':
      'Автоматическая Регистрация: Регистрирует ваши аккаунты как только розыгрыши становятся активными.',
    'alphabot.sections.automation.feature2':
      'Поддержка Мульти-Аккаунтов: Управляйте несколькими аккаунтами одновременно.',
    'alphabot.sections.automation.feature3':
      'Умное Управление Очередью: Оптимизированные регистрации с контролем лимитов.',

    'alphabot.sections.notifications.title':
      'Уведомления в Реальном Времени через Discord и Telegram',
    'alphabot.sections.notifications.description':
      'Получайте мгновенные уведомления о регистрациях, победах и возможностях минтинга.',
    'alphabot.sections.notifications.feature1':
      'Мгновенные Уведомления: Информация в нужное время.',
    'alphabot.sections.notifications.feature2':
      'Настраиваемые Вебхуки: Настройте согласно вашим предпочтениям.',
    'alphabot.sections.notifications.feature3':
      'Дружелюбные Обновления: Четкие сообщения с полезными ссылками.',

    'alphabot.sections.management.title':
      'Надежное Управление Ошибками и Данными',
    'alphabot.sections.management.description':
      'Гарантированная надежность для поддержания работы вашей стратегии.',
    'alphabot.sections.management.feature1':
      'Умное Восстановление Ошибок: Автоматические повторные попытки.',
    'alphabot.sections.management.feature2':
      'Безопасное Хранение: MongoDB с периодической очисткой.',
    'alphabot.sections.management.feature3':
      'Масштабируемая Инфраструктура: Управляет большими объемами без конфликтов.',

    'alphabot.sections.learnMore': 'Узнать больше',
  },
};

export default ru;
