import { LanguageFile } from '../types/language';

const hi: LanguageFile = {
  config: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: 'in',
  },
  translations: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.services': 'सेवाएँ',
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.contact': 'संपर्क',

    // Hero
    'hero.titles.0': 'फुल स्टैक डेवलपर',
    'hero.titles.1': 'डिज़ाइनर',
    'hero.titles.2': 'समाधान निर्माता',
    'hero.titles.3': 'समस्या समाधानकर्ता',
    'hero.titles.4': 'कोड उत्साही',
    'hero.titles.5': 'प्रौद्योगिकी उत्साही',
    'hero.description':
      'विचारों को कोड में बदलना, अविश्वसनीय डिजिटल अनुभव और नवाचार समाधान बनाना जो बदलाव लाते हैं।',
    'hero.viewProjects': 'प्रोजेक्ट्स देखें',
    'hero.aboutMe': 'मेरे बारे में',

    // About
    'about.title': 'मेरे बारे में',
    'about.subtitle':
      'प्रौद्योगिकी के प्रति उत्साही डेवलपर, जो हमेशा लोगों के जीवन पर सकारात्मक प्रभाव डालने वाले सुंदर और कुशल समाधान बनाने की तलाश में रहता है।',
    'about.journey': 'मेरी यात्रा',
    'about.journey.p1':
      'एक फुल स्टैक डेवलपर के रूप में, मुझे असाधारण डिजिटल अनुभव बनाने का जुनून है। मैं आधुनिक तकनीकों में विशेषज्ञ हूँ और हमेशा नए उपकरणों और कार्यप्रणालियों की खोज करता रहता हूँ।',
    'about.journey.p2':
      'मेरा मानना है कि कोड न केवल कार्यात्मक होना चाहिए, बल्कि सुंदर और रखरखाव योग्य भी होना चाहिए। प्रत्येक प्रोजेक्ट एक नया सीखने और डेवलपर समुदाय में योगदान देने का अवसर है।',
    'about.technologies': 'तकनीकें',
    'about.interests.cleancode.title': 'स्वच्छ कोड',
    'about.interests.cleancode.desc': 'स्वच्छ और अच्छी तरह से संरचित कोड',
    'about.interests.innovation.title': 'नवाचार',
    'about.interests.innovation.desc': 'हमेशा नए समाधानों की तलाश',
    'about.interests.performance.title': 'प्रदर्शन',
    'about.interests.performance.desc': 'अनुकूलन और उच्च प्रदर्शन',
    'about.interests.opensource.title': 'ओपन सोर्स',
    'about.interests.opensource.desc': 'समुदाय में योगदान',
    'about.stats.location': 'स्थान',
    'about.stats.country': 'ब्राज़ील',
    'about.stats.experience': 'अनुभव',
    'about.stats.years': '{years} वर्ष',
    'about.stats.focus': 'फोकस',
    'about.stats.fullstack': 'फुल स्टैक',
    'about.cta': 'संपर्क करें',

    // Services
    'services.title': 'सेवाएँ',
    'services.subtitle': 'रैफल ऑटोमेशन और डिजिटल प्रबंधन के लिए विशेष समाधान',
    'services.automation.title': 'रैफल ऑटोमेशन',
    'services.automation.description':
      'अल्फाबोट प्लेटफॉर्म के माध्यम से रैफल के लिए पूर्ण ऑटोमेशन सिस्टम। हम प्रतिभागी पंजीकरण से लेकर विजेता चयन तक, कुशल और विश्वसनीय समाधान प्रदान करते हैं।',
    'services.automation.feature1': 'स्वचालित प्रतिभागी प्रबंधन और पंजीकरण',
    'services.automation.feature2': 'पारदर्शी और सुरक्षित विजेता चयन प्रणाली',
    'services.automation.feature3':
      'वास्तविक समय की रिपोर्ट और विस्तृत विश्लेषण',
    'services.learnMore': 'और जानें',

    // Projects
    'projects.title': 'प्रोजेक्ट्स',
    'projects.subtitle':
      'मेरे सबसे हाल के और रोचक प्रोजेक्ट्स का चयन, जो गिटहब पर खोज और योगदान के लिए उपलब्ध हैं।',
    'projects.viewAll': 'सभी प्रोजेक्ट्स देखें',
    'projects.loading': 'प्रोजेक्ट्स लोड हो रहे हैं...',
    'projects.defaultDesc':
      'जुनून और समर्पण के साथ विकसित किया गया रोचक प्रोजेक्ट।',
    'projects.error': 'रेपोजिटरी प्राप्त करने में त्रुटि:',

    // Contact
    'contact.country': 'ब्राज़ील',
    'contact.title': 'आइए बात करें',
    'contact.subtitle':
      'सहयोग करने या कोई शानदार विचार है? आइए मिलकर अवधारणाओं को वास्तविकता में बदलें।',
    'contact.ready': 'अगले प्रोजेक्ट के लिए तैयार हैं?',
    'contact.button': 'संपर्क करें',
    'contact.email': 'ईमेल',
    'contact.location': 'स्थान',
    'contact.social': 'सामाजिक लिंक',
    'contact.form.name': 'नाम',
    'contact.form.email': 'ईमेल',
    'contact.form.email.placeholder': 'आपका@ईमेल.com',
    'contact.form.subject': 'विषय',
    'contact.form.subject.placeholder': 'यह किस बारे में है?',
    'contact.form.message': 'संदेश',
    'contact.form.message.placeholder': 'मुझे अपने प्रोजेक्ट के बारे में बताएं',
    'contact.form.submit': 'संदेश भेजें',
    'contact.form.sending': 'भेजा जा रहा है...',
    'contact.form.success':
      '✅ आपका संदेश सफलतापूर्वक भेजा गया! मैं जल्द ही संपर्क करूँगा।',
    'contact.form.error':
      '❌ आपके संदेश को भेजने में त्रुटि हुई। कृपया जाँचें कि क्या आपने EmailJS को सही ढंग से कॉन्फ़िगर किया है या बाद में फिर से प्रयास करें।',
    'contact.form.error.button': 'भेजना असफल। फिर से कोशिश करें।',
    'contact.form.success.button': 'संदेश भेजा गया!',
    'contact.form.name.placeholder': 'आपका पूरा नाम',
    'contact.form.validation.name': 'नाम में कम से कम 2 अक्षर होने चाहिए',
    'contact.form.validation.email': 'कृपया एक वैध ईमेल पता दर्ज करें',
    'contact.form.validation.subject': 'विषय में कम से कम 3 अक्षर होने चाहिए',
    'contact.form.validation.message': 'संदेश में कम से कम 10 अक्षर होने चाहिए',


    // Footer
    'footer.text': '© {year} OniMock। ❤️ और ढेर सारी कॉफी के साथ बनाया गया।',

    // AlphaBot Page
    'alphabot.hero.title': 'अल्फाबोट रैफल ऑटोमेशन',
    'alphabot.hero.subtitle':
      'रैफल और डिजिटल प्रबंधन के लिए पूर्ण ऑटोमेशन प्लेटफॉर्म',
    'alphabot.hero.description':
      'हमारे उन्नत ऑटोमेशन सिस्टम के साथ अपने रैफल प्रबंधन को बदलें। प्रतिभागी पंजीकरण से लेकर विजेता चयन तक, अल्फाबोट एक पूर्ण और विश्वसनीय समाधान प्रदान करता है।',
    'alphabot.hero.cta': 'शुरू करें',
    'alphabot.hero.demo': 'डेमो देखें',

    // AlphaBot Features
    'alphabot.features.title': 'क्रांतिकारी विशेषताएँ',
    'alphabot.features.subtitle':
      'आपके प्रोजेक्ट्स के प्रबंधन को बदलने वाली अत्याधुनिक तकनाक',
    'alphabot.features.automation.title': 'पूर्ण ऑटोमेशन',
    'alphabot.features.automation.description':
      'रैफल को शुरू से अंत तक प्रबंधित करने के लिए पूरी तरह से स्वचालित सिस्टम।',
    'alphabot.features.security.title': 'गारंटीकृत सुरक्षा',
    'alphabot.features.security.description':
      'उन्नत डेटा संरक्षण और ड्रॉ में पूर्ण पारदर्शिता।',
    'alphabot.features.reports.title': 'विस्तृत रिपोर्ट',
    'alphabot.features.reports.description':
      'बेहतर प्रबंधन के लिए पूर्ण विश्लेषण और वास्तविक समय की रिपोर्ट।',

    // AlphaBot informative sections
    'alphabot.sections.automation.title':
      'अल्फाबोट के साथ रैफल पंजीकरण ऑटोमेशन',
    'alphabot.sections.automation.description':
      'कुशलता के साथ अपनी संभावनाओं को अधिकतम करें! अल्फाबोट प्लेटफॉर्म पर पंजीकरण स्वचालित करें, समय बचाएं और एनएफटी जीतने की संभावनाओं को बढ़ाएं।',
    'alphabot.sections.automation.feature1':
      'स्वचालित पंजीकरण: जैसे ही रैफल सक्रिय होते हैं, आपके खातों को पंजीकृत करता है।',
    'alphabot.sections.automation.feature2':
      'मल्टी-खाता समर्थन: एक साथ कई खातों का प्रबंधन करें।',
    'alphabot.sections.automation.feature3':
      'स्मार्ट क्यू प्रबंधन: सीमा नियंत्रण के साथ अनुकूलित पंजीकरण।',

    'alphabot.sections.notifications.title':
      'रियल-टाइम सूचनाएं Discord और Telegram के माध्यम से',
    'alphabot.sections.notifications cheerios.title':
      'डिस्कॉर्ड और टेलीग्राम के माध्यम से वास्तविक समय की सूचनाएँ',
    'alphabot.sections.notifications.description':
      'पंजीकरण, जीत और मिंट अवसरों के बारे में तत्काल अलर्ट प्राप्त करें।',
    'alphabot.sections.notifications.feature1':
      'तत्काल अलर्ट: सही समय पर जानकारी।',
    'alphabot.sections.notifications.feature2':
      'अनुकूलन योग्य वेबहुक्स: अपनी प्राथमिकताओं के अनुसार कॉन्फ़िगर करें।',
    'alphabot.sections.notifications.feature3':
      'उपयोगकर्ता-अनुकूल अपडेट: उपयोगी लिंक के साथ स्पष्ट संदेश।',

    'alphabot.sections.management.title': 'मजबूत त्रुटि और डेटा प्रबंधन',
    'alphabot.sections.management.description':
      'आपकी रणनीति को सुचारू रूप से चलाने के लिए गारंटीकृत विश्वसनीयता।',
    'alphabot.sections.management.feature1':
      'स्मार्ट त्रुटि रिकवरी: स्वचालित पुन: प्रयास।',
    'alphabot.sections.management.feature2':
      'सुरक्षित भंडारण: मोंगोडीबी के साथ नियमित सफाई।',
    'alphabot.sections.management.feature3':
      'स्केलेबल इंफ्रास्ट्रक्चर: बिना किसी संघर्ष के उच्च मात्रा को संभालता है।',

    'alphabot.sections.learnMore': 'और जानें',
  },
};

export default hi;
