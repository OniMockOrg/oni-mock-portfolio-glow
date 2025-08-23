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
    'nav.about': 'मेरे बारे में',
    'nav.services': 'सेवाएं',
    'nav.projects': 'प्रोजेक्ट्स',
    'nav.contact': 'संपर्क',

    // Hero
    'hero.titles.0': 'फुल स्टैक डेवलपर',
    'hero.titles.1': 'डिज़ाइनर',
    'hero.titles.2': 'समाधान निर्माता',
    'hero.titles.3': 'मॉडरेटर',
    'hero.titles.4': 'प्रोग्रामिंग उत्साही',
    'hero.titles.5': 'प्रौद्योगिकी उत्साही',
    'hero.description':
      'विचारों को कोड में बदलना, अद्भुत डिजिटल अनुभव और नवीन समाधान बनाना जो बदलाव लाते हैं।',
    'hero.viewProjects': 'प्रोजेक्ट्स देखें',
    'hero.aboutMe': 'मेरे बारे में',

    // About
    'about.title': 'मेरे बारे में',
    'about.subtitle':
      'प्रौद्योगिकी के प्रति उत्साही डेवलपर, हमेशा ऐसे समाधानों की तलाश में जो लोगों के जीवन पर सकारात्मक प्रभाव डालें।',
    'about.journey': 'मेरी यात्रा',
    'about.journey.p1':
      'फुल स्टैक डेवलपर के रूप में, मैं असाधारण डिजिटल अनुभव बनाने के लिए उत्साहित हूँ। मैं आधुनिक तकनीकों में विशेषज्ञ हूँ और हमेशा नए उपकरणों और पद्धतियों की खोज करता रहता हूँ।',
    'about.journey.p2':
      'मेरा मानना है कि कोड न केवल कार्यात्मक होना चाहिए, बल्कि सुंदर और रखरखाव योग्य भी होना चाहिए। प्रत्येक प्रोजेक्ट नया सीखने और डेवलपर समुदाय में योगदान देने का अवसर है।',
    'about.technologies': 'तकनीकें',
    'about.interests.cleancode.title': 'स्वच्छ कोड',
    'about.interests.cleancode.desc': 'स्वच्छ और अच्छी तरह से संरचित कोड',
    'about.interests.innovation.title': 'नवाचार',
    'about.interests.innovation.desc': 'हमेशा नए समाधानों की तलाश',
    'about.interests.performance.title': 'प्रदर्शन',
    'about.interests.performance.desc': 'अनुकूलन और उच्च प्रदर्शन',
    'about.interests.opensource.title': 'ओपन सोर्स',
    'about.interests.opensource.desc': 'समुदाय में योगदान',

    // Services
    'services.title': 'सेवाएं',
    'services.subtitle': 'लॉटरी ऑटोमेशन और डिजिटल प्रबंधन में विशेषज्ञ समाधान',
    'services.automation.title': 'लॉटरी ऑटोमेशन',
    'services.automation.description': 'AlphaBot प्लेटफॉर्म के माध्यम से व्यापक लॉटरी ऑटोमेशन सिस्टम। प्रतिभागी पंजीकरण से विजेता चयन तक कुशल और विश्वसनीय लॉटरी प्रबंधन समाधान प्रदान करते हैं।',
    'services.automation.feature1': 'प्रतिभागियों और पंजीकरण का स्वचालित प्रबंधन',
    'services.automation.feature2': 'पारदर्शी और सुरक्षित विजेता चयन प्रणाली',
    'services.automation.feature3': 'रीयल-टाइम रिपोर्ट और विस्तृत विश्लेषण',
    'services.automation.cta': 'और जानें',

    // Projects
    'projects.title': 'प्रोजेक्ट्स',
    'projects.subtitle':
      'मेरे नवीनतम और रोचक प्रोजेक्ट्स का चयन, GitHub पर अन्वेषण और योगदान के लिए उपलब्ध।',
    'projects.viewAll': 'सभी प्रोजेक्ट्स देखें',
    'projects.loading': 'प्रोजेक्ट्स लोड हो रहे हैं...',
    'projects.defaultDesc':
      'जुनून और समर्पण के साथ विकसित किया गया रोचक प्रोजेक्ट।',
    'projects.error': 'रिपॉजिटरी प्राप्त करने में त्रुटि:',

    // Contact
    'contact.country': 'ब्राज़ील (Braazeel)',
    'contact.title': 'आइए बात करें',
    'contact.subtitle':
      'सहयोग करने में रुचि रखते हैं या आपके पास कोई शानदार विचार है? आइए अवधारणाओं को वास्तविकता में बदलें।',
    'contact.ready': 'अगले प्रोजेक्ट के लिए तैयार हैं?',
    'contact.description':
      'चाहे वह फ्रीलांस प्रोजेक्ट हो, नौकरी का अवसर हो या सिर्फ़ तकनीक के बारे में बातचीत, मैं हमेशा नई संभावनाओं के लिए खुला हूँ।',
    'contact.button': 'संपर्क करें',

    // Footer
    'footer.text': '© {year} OniMock. ❤️ और बहुत सारी कॉफी के साथ विकसित।',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot लॉटरी स्वचालन',
    'alphabot.hero.subtitle': 'लॉटरी और डिजिटल प्रबंधन के लिए पूर्ण स्वचालन प्लेटफॉर्म',
    'alphabot.hero.description': 'हमारे उन्नत स्वचालन सिस्टम के साथ अपने लॉटरी प्रबंधन को बदलें। प्रतिभागी पंजीकरण से विजेता चयन तक, AlphaBot एक पूर्ण और विश्वसनीय समाधान प्रदान करता है।',
    'alphabot.hero.cta': 'अभी शुरू करें',
    'alphabot.hero.demo': 'डेमो देखें',
    
    // AlphaBot Features
    'alphabot.features.automation.title': 'पूर्ण स्वचालन',
    'alphabot.features.automation.description': 'शुरू से अंत तक लॉटरी प्रबंधन के लिए पूर्णतः स्वचालित सिस्टम।',
    'alphabot.features.security.title': 'गारंटीशुदा सुरक्षा',
    'alphabot.features.security.description': 'उन्नत डेटा सुरक्षा और लॉटरी में पूर्ण पारदर्शिता।',
    'alphabot.features.reports.title': 'विस्तृत रिपोर्ट',
    'alphabot.features.reports.description': 'बेहतर प्रबंधन के लिए व्यापक विश्लेषण और रीयल-टाइम रिपोर्ट।',

    'alphabot.sections.learnMore': 'और जानें',
  },
};

export default hi;
