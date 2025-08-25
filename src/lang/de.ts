import { LanguageFile } from '../types/language';

const de: LanguageFile = {
  config: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: 'de',
  },
  translations: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.services': 'Dienstleistungen',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.titles.0': 'Full-Stack-Entwickler',
    'hero.titles.1': 'Designer',
    'hero.titles.2': 'Lösungsschaffer',
    'hero.titles.3': 'Problemlöser',
    'hero.titles.4': 'Code-Enthusiast',
    'hero.titles.5': 'Technologie-Enthusiast',
    'hero.description':
      'Ideen in Code umwandeln, unglaubliche digitale Erlebnisse und innovative Lösungen schaffen, die einen Unterschied machen.',
    'hero.viewProjects': 'Projekte ansehen',
    'hero.aboutMe': 'Über mich',

    // About
    'about.title': 'Über mich',
    'about.subtitle':
      'Entwickler, der leidenschaftlich für Technologie ist und stets danach strebt, elegante und effiziente Lösungen zu schaffen, die das Leben der Menschen positiv beeinflussen.',
    'about.journey': 'Meine Reise',
    'about.journey.p1':
      'Als Full-Stack-Entwickler habe ich eine Leidenschaft dafür, außergewöhnliche digitale Erlebnisse zu schaffen. Ich spezialisiere mich auf moderne Technologien und erkunde stets neue Tools und Methoden.',
    'about.journey.p2':
      'Ich glaube, dass Code nicht nur funktional, sondern auch elegant und wartbar sein sollte. Jedes Projekt ist eine Gelegenheit, etwas Neues zu lernen und zur Entwicklergemeinschaft beizutragen.',
    'about.technologies': 'Technologien',
    'about.interests.cleancode.title': 'Sauberer Code',
    'about.interests.cleancode.desc': 'Sauberer und gut strukturierter Code',
    'about.interests.innovation.title': 'Innovation',
    'about.interests.innovation.desc':
      'Stets auf der Suche nach neuen Lösungen',
    'about.interests.performance.title': 'Leistung',
    'about.interests.performance.desc': 'Optimierung und hohe Leistung',
    'about.interests.opensource.title': 'Open Source',
    'about.interests.opensource.desc': 'Beitrag zur Gemeinschaft',
    'about.stats.location': 'Standort',
    'about.stats.country': 'Brasilien',
    'about.stats.experience': 'Erfahrung',
    'about.stats.years': '{years} Jahre',
    'about.stats.focus': 'Fokus',
    'about.stats.fullstack': 'Full Stack',
    'about.cta': 'Kontaktieren Sie mich',

    // Services
    'services.title': 'Dienstleistungen',
    'services.subtitle':
      'Spezialisierte Lösungen für Verlosungsautomatisierung und digitales Management',
    'services.automation.title': 'Verlosungsautomatisierung',
    'services.automation.description':
      'Komplettes Automatisierungssystem für Verlosungen über die AlphaBot-Plattform. Wir bieten effiziente und zuverlässige Lösungen für die Verwaltung von Verlosungen, von der Teilnehmerregistrierung bis zur Gewinnerauswahl.',
    'services.automation.feature1':
      'Automatisierte Teilnehmerverwaltung und -registrierung',
    'services.automation.feature2':
      'Transparentes und sicheres Gewinnerauswahlsystem',
    'services.automation.feature3':
      'Echtzeitberichte und detaillierte Analysen',
    'services.learnMore': 'Erfahren Sie mehr',

    // Projects
    'projects.title': 'Projekte',
    'projects.subtitle':
      'Eine Auswahl meiner neuesten und interessantesten Projekte, verfügbar auf GitHub zum Erkunden und Mitwirken.',
    'projects.viewAll': 'Alle Projekte ansehen',
    'projects.loading': 'Projekte werden geladen...',
    'projects.defaultDesc':
      'Interessantes Projekt, mit Leidenschaft und Hingabe entwickelt.',
    'projects.error': 'Fehler beim Abrufen der Repositories:',

    // Contact
    'contact.country': 'Brasilien',
    'contact.title': 'Lassen Sie uns reden',
    'contact.subtitle':
      'Interessiert an einer Zusammenarbeit oder haben Sie eine großartige Idee? Lassen Sie uns gemeinsam Konzepte in die Realität umsetzen.',
    'contact.ready': 'Bereit für das nächste Projekt?',
    'contact.button': 'Kontakt aufnehmen',
    'contact.email': 'E-Mail',
    'contact.location': 'Standort',
    'contact.social': 'Soziale Links',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.email.placeholder': 'ihre@email.com',
    'contact.form.subject': 'Betreff',
    'contact.form.subject.placeholder': 'Worum geht es?',
    'contact.form.message': 'Nachricht',
    'contact.form.message.placeholder': 'Erzählen Sie mir von Ihrem Projekt',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.sending': 'Wird gesendet...',
    'contact.form.success':
      '✅ Ihre Nachricht wurde erfolgreich gesendet! Ich melde mich bald.',
    'contact.form.error':
      '❌ Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte überprüfen Sie, ob EmailJS korrekt konfiguriert ist, oder versuchen Sie es später erneut.',
    'contact.form.error.button': 'Sendefehler. Erneut versuchen.',
    'contact.form.success.button': 'Nachricht gesendet!',
    'contact.form.name.placeholder': 'Ihr vollständiger Name',
    'contact.form.validation.name': 'Name muss mindestens 2 Zeichen lang sein',
    'contact.form.validation.email':
      'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    'contact.form.validation.subject':
      'Betreff muss mindestens 3 Zeichen lang sein',
    'contact.form.validation.message':
      'Nachricht muss mindestens 10 Zeichen lang sein',
    
      

    // Footer
    'footer.text': '© {year} OniMock. Gebaut mit ❤️ und viel Kaffee.',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot Verlosungsautomatisierung',
    'alphabot.hero.subtitle':
      'Komplette Automatisierungsplattform für Verlosungen und digitales Management',
    'alphabot.hero.description':
      'Transformieren Sie Ihr Verlosungsmanagement mit unserem fortschrittlichen Automatisierungssystem. Von der Teilnehmerregistrierung bis zur Gewinnerauswahl bietet AlphaBot eine vollständige und zuverlässige Lösung.',
    'alphabot.hero.cta': 'Loslegen',
    'alphabot.hero.demo': 'Demo ansehen',

    // AlphaBot Features
    'alphabot.features.title': 'Revolutionäre Funktionen',
    'alphabot.features.subtitle':
      'Spitzentechnologie, die die Art und Weise verändert, wie Sie Ihre Projekte verwalten',
    'alphabot.features.automation.title': 'Vollständige Automatisierung',
    'alphabot.features.automation.description':
      'Vollautomatisiertes System zur Verwaltung von Verlosungen von Anfang bis Ende.',
    'alphabot.features.security.title': 'Garantierte Sicherheit',
    'alphabot.features.security.description':
      'Erweiterter Datenschutz und vollständige Transparenz bei Ziehungen.',
    'alphabot.features.reports.title': 'Detaillierte Berichte',
    'alphabot.features.reports.description':
      'Umfassende Analysen und Echtzeitberichte für bessere Verwaltung.',

    // AlphaBot informative sections
    'alphabot.sections.automation.title':
      'Verlosungsregistrierungsautomatisierung mit Alphabot',
    'alphabot.sections.automation.description':
      'Maximieren Sie Ihre Chancen mit Effizienz! Automatisieren Sie Registrierungen auf der Alphabot-Plattform, sparen Sie Zeit und erhöhen Sie Ihre Gewinnchancen für NFTs.',
    'alphabot.sections.automation.feature1':
      'Automatische Registrierung: Meldet Ihre Konten an, sobald Verlosungen aktiv werden.',
    'alphabot.sections.automation.feature2':
      'Multi-Account-Unterstützung: Verwalten Sie mehrere Konten gleichzeitig.',
    'alphabot.sections.automation.feature3':
      'Intelligente Warteschlangenverwaltung: Optimierte Registrierungen mit Limitkontrolle.',

    'alphabot.sections.notifications.title':
      'Echtzeitbenachrichtigungen über Discord und Telegram',
    'alphabot.sections.notifications.description':
      'Erhalten Sie sofortige Benachrichtigungen über Registrierungen, Gewinne und Mint-Möglichkeiten.',
    'alphabot.sections.notifications.feature1':
      'Sofortige Benachrichtigungen: Informationen zur richtigen Zeit.',
    'alphabot.sections.notifications.feature2':
      'Anpassbare Webhooks: Konfigurieren Sie nach Ihren Vorlieben.',
    'alphabot.sections.notifications.feature3':
      'Benutzerfreundliche Updates: Klare Nachrichten mit nützlichen Links.',

    'alphabot.sections.management.title':
      'Robustes Fehler- und Datenmanagement',
    'alphabot.sections.management.description':
      'Gewährleistete Zuverlässigkeit, um Ihre Strategie am Laufen zu halten.',
    'alphabot.sections.management.feature1':
      'Intelligente Fehlerbehebung: Automatische Wiederholungen.',
    'alphabot.sections.management.feature2':
      'Sichere Speicherung: MongoDB mit regelmäßiger Bereinigung.',
    'alphabot.sections.management.feature3':
      'Skalierbare Infrastruktur: Bewältigt hohe Volumen ohne Konflikte.',

    'alphabot.sections.learnMore': 'Erfahren Sie mehr',
  },
};

export default de;
