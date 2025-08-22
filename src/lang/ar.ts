import { LanguageFile } from '../types/language';

const ar: LanguageFile = {
  config: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flag: 'sa',
  },
  translations: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.services': 'الخدمات',
    'nav.projects': 'المشاريع',
    'nav.contact': 'اتصل بنا',

    // Hero
    'hero.titles.0': 'مطور كامل المهارات',
    'hero.titles.1': 'مصمم',
    'hero.titles.2': 'صانع الحلول',
    'hero.titles.3': 'مشرف',
    'hero.titles.4': 'متحمس للبرمجة',
    'hero.titles.5': 'متحمس للتكنولوجيا',
    'hero.description':
      'تحويل الأفكار إلى كود، وخلق تجارب رقمية مذهلة وحلول مبتكرة تحدث فرقًا.',
    'hero.viewProjects': 'عرض المشاريع',
    'hero.aboutMe': 'عني',

    // About
    'about.title': 'عني',
    'about.subtitle':
      'مطور شغوف بالتكنولوجيا، أسعى دائمًا لخلق حلول أنيقة وفعالة تؤثر إيجابيًا على حياة الناس.',
    'about.journey': 'رحلتي',
    'about.journey.p1':
      'كمطور كامل المهارات، أنا شغوف بصنع تجارب رقمية استثنائية. أتخصص في التقنيات الحديثة وأستكشف دائمًا أدوات ومنهجيات جديدة.',
    'about.journey.p2':
      'أؤمن أن الكود يجب أن يكون ليس فقط وظيفيًا، بل أنيقًا وقابلًا للصيانة. كل مشروع هو فرصة لتعلم شيء جديد والمساهمة في مجتمع المطورين.',
    'about.technologies': 'التقنيات',
    'about.interests.cleancode.title': 'كود نظيف',
    'about.interests.cleancode.desc': 'كود نظيف ومنظم جيدًا',
    'about.interests.innovation.title': 'الابتكار',
    'about.interests.innovation.desc': 'البحث دائمًا عن حلول جديدة',
    'about.interests.performance.title': 'الأداء',
    'about.interests.performance.desc': 'التحسين والأداء العالي',
    'about.interests.opensource.title': 'المصدر المفتوح',
    'about.interests.opensource.desc': 'المساهمة في المجتمع',

    // Services
    'services.title': 'الخدمات',
    'services.subtitle': 'حلول متخصصة في أتمتة السحوبات والإدارة الرقمية',
    'services.automation.title': 'أتمتة السحوبات',
    'services.automation.description': 'نظام شامل لأتمتة السحوبات من خلال منصة AlphaBot. نوفر حلول إدارة السحوبات الفعالة والموثوقة من تسجيل المشاركين إلى اختيار الفائزين.',
    'services.automation.feature1': 'إدارة آلية للمشاركين والتسجيلات',
    'services.automation.feature2': 'نظام اختيار الفائزين الشفاف والآمن',
    'services.automation.feature3': 'تقارير فورية وتحليلات مفصلة',
    'services.automation.cta': 'اعرف المزيد',

    // Projects
    'projects.title': 'المشاريع',
    'projects.subtitle':
      'مجموعة مختارة من أحدث وأكثر مشاريعي إثارة للاهتمام، متاحة على GitHub للاستكشاف والمساهمة.',
    'projects.viewAll': 'عرض جميع المشاريع',
    'projects.loading': 'جارٍ تحميل المشاريع...',
    'projects.defaultDesc': 'مشروع مثير للاهتمام تم تطويره بشغف وتفانٍ.',
    'projects.error': 'خطأ في جلب المستودعات:',

    // Contact
    'contact.country': 'البرازيل (Al-Brazīl)',
    'contact.title': 'لنتحدث',
    'contact.subtitle':
      'مهتم بالتعاون أو لديك فكرة رائعة؟ دعنا نحول المفاهيم إلى واقع معًا.',
    'contact.ready': 'هل أنت جاهز للمشروع التالي؟',
    'contact.description':
      'سواء كان مشروعًا حرًا، فرصة عمل، أو مجرد حوار حول التكنولوجيا، أنا دائمًا منفتح على الإمكانيات الجديدة.',
    'contact.button': 'اتصل بي',

    // Footer
    'footer.text': '© {year} OniMock. تم التطوير بـ ❤️ والكثير من القهوة.',

    // AlphaBot Page
    'alphabot.hero.title': 'أتمتة السحوبات AlphaBot',
    'alphabot.hero.subtitle': 'منصة أتمتة شاملة للسحوبات والإدارة الرقمية',
    'alphabot.hero.description': 'حوّل إدارة السحوبات الخاصة بك مع نظام الأتمتة المتقدم لدينا. من تسجيل المشاركين إلى اختيار الفائزين، يقدم AlphaBot حلاً شاملاً وموثوقاً.',
    'alphabot.hero.cta': 'ابدأ الآن',
    
    // AlphaBot Features
    'alphabot.features.automation.title': 'أتمتة كاملة',
    'alphabot.features.automation.description': 'نظام آلي بالكامل لإدارة السحوبات من البداية إلى النهاية.',
    'alphabot.features.security.title': 'أمان مضمون',
    'alphabot.features.security.description': 'حماية متقدمة للبيانات وشفافية كاملة في السحوبات.',
    'alphabot.features.reports.title': 'تقارير مفصلة',
    'alphabot.features.reports.description': 'تحليلات شاملة وتقارير فورية لإدارة أفضل.',
  },
};

export default ar;
