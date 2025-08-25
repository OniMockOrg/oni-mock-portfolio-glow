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
    'hero.titles.0': 'Full Stack Разработчик',
    'hero.titles.1': 'Дизайнер',
    'hero.titles.2': 'Создатель решений',
    'hero.titles.3': 'Решатель проблем',
    'hero.titles.4': 'Энтузиаст кода',
    'hero.titles.5': 'Энтузиаст технологий',
    'hero.description':
      'Превращение идей в код, создание невероятных цифровых впечатлений и инновационных решений, которые имеют значение.',
    'hero.viewProjects': 'Посмотреть проекты',
    'hero.aboutMe': 'Обо мне',

    // About
    'about.title': 'Обо мне',
    'about.subtitle':
      'Разработчик, увлеченный технологиями, всегда стремящийся создавать элегантные и эффективные решения, которые положительно влияют на жизнь людей.',
    'about.journey': 'Мой путь',
    'about.journey.p1':
      'Как full stack разработчик, я страстно люблю создавать исключительные цифровые впечатления. Я специализируюсь на современных технологиях и всегда изучаю новые инструменты и методологии.',
    'about.journey.p2':
      'Я верю, что код должен быть не только функциональным, но также элегантным и поддерживаемым. Каждый проект — это возможность узнать что-то новое и внести вклад в сообщество разработчиков.',
    'about.technologies': 'Технологии',
    'about.interests.cleancode.title': 'Чистый код',
    'about.interests.cleancode.desc': 'Чистый и хорошо структурированный код',
    'about.interests.innovation.title': 'Инновации',
    'about.interests.innovation.desc': 'Всегда в поиске новых решений',
    'about.interests.performance.title': 'Производительность',
    'about.interests.performance.desc':
      'Оптимизация и высокая производительность',
    'about.interests.opensource.title': 'Открытое ПО',
    'about.interests.opensource.desc': 'Вклад в сообщество',
    'about.stats.location': 'Местоположение',
    'about.stats.country': 'Бразилия',
    'about.stats.experience': 'Опыт',
    'about.stats.years': '{years} Года',
    'about.stats.focus': 'Фокус',
    'about.stats.fullstack': 'Full Stack',
    'about.cta': 'Связаться со мной',

    // Services
    'services.title': 'Услуги',
    'services.subtitle':
      'Специализированные решения для автоматизации розыгрышей и цифрового управления',
    'services.automation.title': 'Автоматизация розыгрышей',
    'services.automation.description':
      'Полная система автоматизации розыгрышей через платформу AlphaBot. Мы предлагаем эффективные и надежные решения для управления розыгрышами, от регистрации участников до выбора победителей.',
    'services.automation.feature1':
      'Автоматизированное управление и регистрация участников',
    'services.automation.feature2':
      'Прозрачная и безопасная система выбора победителей',
    'services.automation.feature3':
      'Отчеты в реальном времени и подробная аналитика',
    'services.learnMore': 'Узнать больше',

    // Projects
    'projects.title': 'Проекты',
    'projects.subtitle':
      'Подборка моих самых последних и интересных проектов, доступных на GitHub для изучения и участия.',
    'projects.viewAll': 'Посмотреть все проекты',
    'projects.loading': 'Загрузка проектов...',
    'projects.defaultDesc':
      'Интересный проект, разработанный с страстью и самоотдачей.',
    'projects.error': 'Ошибка при загрузке репозиториев:',

    // Contact
    'contact.country': 'Бразилия',
    'contact.title': 'Давай поговорим',
    'contact.subtitle':
      'Заинтересованы в сотрудничестве или есть потрясающая идея? Давай превратим концепции в реальность вместе.',
    'contact.ready': 'Готов к следующему проекту?',
    'contact.button': 'Связаться',
    'contact.email': 'Электронная почта',
    'contact.location': 'Местоположение',
    'contact.social': 'Социальные сети',
    'contact.form.name': 'Имя',
    'contact.form.email': 'Электронная почта',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': 'Тема',
    'contact.form.subject.placeholder': 'О чем речь?',
    'contact.form.message': 'Сообщение',
    'contact.form.message.placeholder': 'Расскажи о своем проекте',
    'contact.form.submit': 'Отправить сообщение',
    'contact.form.sending': 'Отправка...',
    'contact.form.success':
      '✅ Ваше сообщение успешно отправлено! Я скоро свяжусь.',
    'contact.form.error':
      '❌ Произошла ошибка при отправке сообщения. Пожалуйста, проверьте, правильно ли настроен EmailJS, или попробуйте снова позже.',
    'contact.form.error.button': 'Ошибка отправки. Попробуйте снова.',
    'contact.form.success.button': 'Сообщение отправлено!',
    'contact.form.name.placeholder': 'Ваше полное имя',
    'contact.form.validation.name': 'Имя должно содержать не менее 2 символов',
    'contact.form.validation.email': 'Пожалуйста, введите действительный адрес электронной почты',
    'contact.form.validation.subject': 'Тема должна содержать не менее 3 символов',
    'contact.form.validation.message': 'Сообщение должно содержать не менее 10 символов',

    // Footer
    'footer.text': '© {year} OniMock. Создано с ❤️ и большим количеством кофе.',

    // AlphaBot Page
    'alphabot.hero.title': 'Автоматизация розыгрышей AlphaBot',
    'alphabot.hero.subtitle':
      'Полная платформа автоматизации для розыгрышей и цифрового управления',
    'alphabot.hero.description':
      'Преобразуйте управление розыгрышами с нашей передовой системой автоматизации. От регистрации участников до выбора победителей AlphaBot предлагает полное и надежное решение.',
    'alphabot.hero.cta': 'Начать',
    'alphabot.hero.demo': 'Посмотреть демо',

    // AlphaBot Features
    'alphabot.features.title': 'Революционные функции',
    'alphabot.features.subtitle':
      'Передовые технологии, которые трансформируют управление вашими проектами',
    'alphabot.features.automation.title': 'Полная автоматизация',
    'alphabot.features.automation.description':
      'Полностью автоматизированная система для управления розыгрышами от начала до конца.',
    'alphabot.features.security.title': 'Гарантированная безопасность',
    'alphabot.features.security.description':
      'Передовая защита данных и полная прозрачность в розыгрышах.',
    'alphabot.features.reports.title': 'Подробные отчеты',
    'alphabot.features.reports.description':
      'Полная аналитика и отчеты в реальном времени для лучшего управления.',

    // AlphaBot informative sections
    'alphabot.sections.automation.title':
      'Автоматизация регистрации розыгрышей с Alphabot',
    'alphabot.sections.automation.description':
      'Максимизируйте свои шансы с эффективностью! Автоматизируйте регистрации на платформе Alphabot, экономя время и увеличивая шансы на выигрыш NFT.',
    'alphabot.sections.automation.feature1':
      'Автоматическая регистрация: Регистрирует ваши аккаунты, как только розыгрыши становятся активными.',
    'alphabot.sections.automation.feature2':
      'Поддержка нескольких аккаунтов: Управление несколькими аккаунтами одновременно.',
    'alphabot.sections.automation.feature3':
      'Умное управление очередью: Оптимизированная регистрация с контролем лимитов.',

    'alphabot.sections.notifications.title':
      'Уведомления в реальном времени через Discord и Telegram',
    'alphabot.sections.notifications.description':
      'Получайте мгновенные оповещения о регистрациях, победах и возможностях для минтинга.',
    'alphabot.sections.notifications.feature1':
      'Мгновенные оповещения: Информация в нужный момент.',
    'alphabot.sections.notifications.feature2':
      'Настраиваемые вебхуки: Настройте по своему усмотрению.',
    'alphabot.sections.notifications.feature3':
      'Удобные обновления: Четкие сообщения с полезными ссылками.',

    'alphabot.sections.management.title':
      'Надежное управление ошибками и данными',
    'alphabot.sections.management.description':
      'Гарантированная надежность для бесперебойной работы вашей стратегии.',
    'alphabot.sections.management.feature1':
      'Умное восстановление ошибок: Автоматические повторные попытки.',
    'alphabot.sections.management.feature2':
      'Безопасное хранение: MongoDB с периодической очисткой.',
    'alphabot.sections.management.feature3':
      'Масштабируемая инфраструктура: Обработка больших объемов без конфликтов.',

    'alphabot.sections.learnMore': 'Узнать больше',
  },
};

export default ru;
