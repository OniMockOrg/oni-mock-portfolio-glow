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
    'hero.titles.2': 'صانع حلول',
    'hero.titles.3': 'حلال المشكلات',
    'hero.titles.4': 'عاشق البرمجة',
    'hero.titles.5': 'متحمس للتكنولوجيا',
    'hero.description':
      'تحويل الأفكار إلى برمجيات، وخلق تجارب رقمية مذهلة وحلول مبتكرة تحدث فرقًا.',
    'hero.viewProjects': 'عرض المشاريع',
    'hero.aboutMe': 'عني',

    // About
    'about.title': 'عني',
    'about.subtitle':
      'مطور شغوف بالتكنولوجيا، يسعى دائمًا لخلق حلول أنيقة وفعالة تؤثر إيجابيًا في حياة الناس.',
    'about.journey': 'رحلتي',
    'about.journey.p1':
      'كمطور كامل المهارات، لدي شغف بخلق تجارب رقمية استثنائية. أتخصص في التقنيات الحديثة وأستكشف دائمًا أدوات ومنهجيات جديدة.',
    'about.journey.p2':
      'أؤمن أن البرمجة يجب أن تكون ليس فقط وظيفية، بل أنيقة وقابلة للصيانة. كل مشروع هو فرصة لتعلم شيء جديد والمساهمة في مجتمع المطورين.',
    'about.technologies': 'التقنيات',
    'about.interests.cleancode.title': 'البرمجة النظيفة',
    'about.interests.cleancode.desc': 'برمجة نظيفة ومنظمة جيدًا',
    'about.interests.innovation.title': 'الابتكار',
    'about.interests.innovation.desc': 'البحث دائمًا عن حلول جديدة',
    'about.interests.performance.title': 'الأداء',
    'about.interests.performance.desc': 'التحسين والأداء العالي',
    'about.interests.opensource.title': 'المصدر المفتوح',
    'about.interests.opensource.desc': 'المساهمة في المجتمع',
    'about.stats.location': 'الموقع',
    'about.stats.country': 'البرازيل',
    'about.stats.experience': 'الخبرة',
    'about.stats.years': '{years} سنوات',
    'about.stats.focus': 'التركيز',
    'about.stats.fullstack': 'كامل المهارات',
    'about.cta': 'تواصل معي',

    // Services
    'services.title': 'الخدمات',
    'services.subtitle': 'حلول متخصصة لأتمتة السحوبات والإدارة الرقمية',
    'services.automation.title': 'أتمتة السحوبات',
    'services.automation.description':
      'نظام أتمتة كامل للسحوبات عبر منصة AlphaBot. نقدم حلولًا فعالة وموثوقة لإدارة السحوبات، من تسجيل المشاركين إلى اختيار الفائزين.',
    'services.automation.feature1': 'إدارة وتسجيل المشاركين تلقائيًا',
    'services.automation.feature2': 'نظام اختيار الفائزين شفاف وآمن',
    'services.automation.feature3': 'تقارير فورية وتحليلات مفصلة',
    'services.learnMore': 'اعرف المزيد',

    // Projects
    'projects.title': 'المشاريع',
    'projects.subtitle':
      'مجموعة مختارة من أحدث وأكثر مشاريعي إثارة للاهتمام، متاحة على GitHub للاستكشاف والمساهمة.',
    'projects.viewAll': 'عرض جميع المشاريع',
    'projects.loading': 'جارٍ تحميل المشاريع...',
    'projects.defaultDesc': 'مشروع مثير للاهتمام تم تطويره بشغف وتفانٍ.',
    'projects.error': 'خطأ في جلب المستودعات:',

    // Contact
    'contact.country': 'البرازيل',
    'contact.title': 'لنتحدث',
    'contact.subtitle':
      'مهتم بالتعاون أو لديك فكرة رائعة؟ دعنا نحول المفاهيم إلى واقع معًا.',
    'contact.ready': 'جاهز للمشروع القادم؟',
    'contact.button': 'تواصل معي',
    'contact.email': 'البريد الإلكتروني',
    'contact.location': 'الموقع',
    'contact.social': 'روابط التواصل الاجتماعي',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.subject': 'الموضوع',
    'contact.form.subject.placeholder': 'ما الأمر؟',
    'contact.form.message': 'الرسالة',
    'contact.form.message.placeholder': 'أخبرني عن مشروعك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.form.sending': 'جارٍ الإرسال...',
    'contact.form.success': '✅ تم إرسال رسالتك بنجاح! سأتواصل معك قريبًا.',
    'contact.form.error':
      '❌ حدث خطأ أثناء إرسال رسالتك. يرجى التحقق من إعدادات EmailJS أو المحاولة لاحقًا.',
    'contact.form.error.button': 'فشل الإرسال. حاول مرة أخرى.',
    'contact.form.success.button': 'تم إرسال الرسالة!',
    'contact.form.name.placeholder': 'اسمك الكامل',
    'contact.form.validation.name': 'الاسم يجب أن يحتوي على حرفين على الأقل',
    'contact.form.validation.email': 'يرجى إدخال عنوان بريد إلكتروني صحيح',
    'contact.form.validation.subject': 'الموضوع يجب أن يحتوي على 3 أحرف على الأقل',
    'contact.form.validation.message': 'الرسالة يجب أن تحتوي على 10 أحرف على الأقل',


    // Footer
    'footer.text': '© {year} OniMock. تم بناؤه بـ ❤️ والكثير من القهوة.',

    // AlphaBot Page
    'alphabot.hero.title': 'أتمتة السحوبات AlphaBot',
    'alphabot.hero.subtitle': 'منصة أتمتة كاملة للسحوبات والإدارة الرقمية',
    'alphabot.hero.description':
      'حول إدارة سحوباتك مع نظام الأتمتة المتقدم الخاص بنا. من تسجيل المشاركين إلى اختيار الفائزين، يقدم AlphaBot حلًا كاملًا وموثوقًا.',
    'alphabot.hero.cta': 'ابدأ الآن',
    'alphabot.hero.demo': 'عرض التجربة',

    // AlphaBot Features
    'alphabot.features.title': 'ميزات ثورية',
    'alphabot.features.subtitle': 'تكنولوجيا متطورة تحول طريقة إدارتك لمشاريعك',
    'alphabot.features.automation.title': 'أتمتة كاملة',
    'alphabot.features.automation.description':
      'نظام أتمتة كامل لإدارة السحوبات من البداية إلى النهاية.',
    'alphabot.features.security.title': 'أمان مضمون',
    'alphabot.features.security.description':
      'حماية بيانات متقدمة وشفافية كاملة في السحوبات.',
    'alphabot.features.reports.title': 'تقارير مفصلة',
    'alphabot.features.reports.description':
      'تحليل كامل وتقارير فورية لإدارة أفضل.',

    // AlphaBot informative sections
    'alphabot.sections.automation.title': 'أتمتة تسجيل السحوبات مع Alphabot',
    'alphabot.sections.automation.description':
      'زِد فرصك بكفاءة! أتمتة التسجيلات على منصة Alphabot، مما يوفر الوقت ويزيد من فرص الفوز بـ NFTs.',
    'alphabot.sections.automation.feature1':
      'التسجيل التلقائي: يسجل حساباتك بمجرد تفعيل السحوبات.',
    'alphabot.sections.automation.feature2':
      'دعم الحسابات المتعددة: إدارة حسابات متعددة في وقت واحد.',
    'alphabot.sections.automation.feature3':
      'إدارة ذكية للطابور: تسجيلات محسنة مع التحكم في الحدود.',

    'alphabot.sections.notifications.title':
      'إشعارات فورية عبر Discord وTelegram',
    'alphabot.sections.notifications.description':
      'تلقَ تنبيهات فورية حول التسجيلات، الفوز، وفرص التعدين.',
    'alphabot.sections.notifications.feature1':
      'تنبيهات فورية: معلومات في الوقت المناسب.',
    'alphabot.sections.notifications.feature2':
      'Webhooks قابلة للتخصيص: قم بتهيئتها حسب تفضيلاتك.',
    'alphabot.sections.notifications.feature3':
      'تحديثات سهلة الاستخدام: رسائل واضحة مع روابط مفيدة.',

    'alphabot.sections.management.title': 'إدارة قوية للأخطاء والبيانات',
    'alphabot.sections.management.description':
      'موثوقية مضمونة للحفاظ على استمرار استراتيجيتك.',
    'alphabot.sections.management.feature1':
      'استعادة ذكية للأخطاء: إعادة محاولة تلقائية.',
    'alphabot.sections.management.feature2':
      'تخزين آمن: MongoDB مع تنظيف دوري.',
    'alphabot.sections.management.feature3':
      'بنية تحتية قابلة للتوسع: تتعامل مع الأحجام الكبيرة بدون تعارض.',
    'alphabot.sections.learnMore': 'اعرف المزيد',
  },
};

export default ar;
