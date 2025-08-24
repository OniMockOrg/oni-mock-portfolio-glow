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
    'hero.titles.2': 'Lösungsschöpfer',
    'hero.titles.3': 'Moderator',
    'hero.titles.4': 'Programmierbegeisterter',
    'hero.titles.5': 'Technologie-Enthusiast',
    'hero.description':
      'Ideen in Code umsetzen, erstaunliche digitale Erlebnisse und innovative Lösungen schaffen, die einen Unterschied machen.',
    'hero.viewProjects': 'Projekte ansehen',
    'hero.aboutMe': 'Über mich',

    // About
    'about.title': 'Über mich',
    'about.subtitle':
      'Leidenschaftlicher Entwickler für Technologie, stets bestrebt, elegante und effiziente Lösungen zu schaffen, die das Leben der Menschen positiv beeinflussen.',
    'about.journey': 'Meine Reise',
    'about.journey.p1':
      'Als Full-Stack-Entwickler bin ich leidenschaftlich dabei, außergewöhnliche digitale Erlebnisse zu schaffen. Ich spezialisiere mich auf moderne Technologien und erkunde ständig neue Tools und Methoden.',
    'about.journey.p2':
      'Ich glaube, dass Code nicht nur funktional, sondern auch elegant und wartbar sein sollte. Jedes Projekt ist eine Gelegenheit, etwas Neues zu lernen und zur Entwicklergemeinschaft beizutragen.',
    'about.technologies': 'Technologien',
    'about.interests.cleancode.title': 'Sauberer Code',
    'about.interests.cleancode.desc': 'Sauberer und gut strukturierter Code',
    'about.interests.innovation.title': 'Innovation',
    'about.interests.innovation.desc':
      'Immer auf der Suche nach neuen Lösungen',
    'about.interests.performance.title': 'Leistung',
    'about.interests.performance.desc': 'Optimierung und hohe Leistung',
    'about.interests.opensource.title': 'Open Source',
    'about.interests.opensource.desc': 'Beitrag zur Gemeinschaft',

    // Services
    'services.title': 'Dienstleistungen',
    'services.subtitle': 'Spezialisierte Lösungen für Verlosungsautomatisierung und digitales Management',
    'services.automation.title': 'Verlosungsautomatisierung',
    'services.automation.description': 'Komplettes Automatisierungssystem für Verlosungen über die AlphaBot-Plattform. Wir bieten effiziente und zuverlässige Lösungen für das Management von Verlosungen, von der Teilnehmerregistrierung bis zur Gewinnerauswahl.',
    'services.automation.feature1': 'Automatisierte Teilnehmer- und Registrierungsverwaltung',
    'services.automation.feature2': 'Transparentes und sicheres Gewinnerauswahlsystem',
    'services.automation.feature3': 'Echtzeitberichte und detaillierte Analysen',
    'services.automation.cta': 'Mehr erfahren',

    // Projects
    'projects.title': 'Projekte',
    'projects.subtitle':
      'Eine Auswahl meiner neuesten und interessantesten Projekte, verfügbar auf GitHub zur Erkundung und Mitwirkung.',
    'projects.viewAll': 'Alle Projekte ansehen',
    'projects.loading': 'Projekte werden geladen...',
    'projects.defaultDesc':
      'Interessantes Projekt, entwickelt mit Leidenschaft und Hingabe.',
    'projects.error': 'Fehler beim Abrufen der Repositories:',

    // Contact
    'contact.country': 'Brasilien',
    'contact.title': 'Lass uns reden',
    'contact.subtitle':
      'Interessiert an einer Zusammenarbeit oder hast du eine großartige Idee? Lass uns Konzepte gemeinsam in die Realität umsetzen.',
    'contact.ready': 'Bereit für das nächste Projekt?',
    'contact.description':
      'Ob Freelance-Projekt, Jobmöglichkeit oder einfach nur ein Gespräch über Technologie – ich bin immer offen für neue Möglichkeiten.',
    'contact.button': 'Kontaktieren',
    'contact.email': 'E-Mail',
    'contact.location': 'Standort',
    'contact.social': 'Soziale Medien',
    'contact.name': 'Name',
    'contact.subject': 'Betreff',
    'contact.message': 'Nachricht',
    'contact.name.placeholder': 'Dein Name',
    'contact.email.placeholder': 'Deine E-Mail',
    'contact.subject.placeholder': 'Der Betreff deiner Nachricht',
    'contact.message.placeholder': 'Deine Nachricht',
    'contact.submit': 'Nachricht senden',

    // Footer
    'footer.text': '© {year} OniMock. Entwickelt mit ❤️ und viel Kaffee.',

    // AlphaBot Page
    'alphabot.hero.title': 'AlphaBot Verlosungsautomatisierung',
    'alphabot.hero.subtitle': 'Komplette Automatisierungsplattform für Verlosungen und digitales Management',
    'alphabot.hero.description': 'Verwandeln Sie Ihr Verlosungsmanagement mit unserem fortschrittlichen Automatisierungssystem. Von der Teilnehmerregistrierung bis zur Gewinnerauswahl bietet AlphaBot eine vollständige und zuverlässige Lösung.',
    'alphabot.hero.cta': 'Loslegen',
    'alphabot.hero.demo': 'Demo ansehen',
    
    // AlphaBot Features
    'alphabot.features.automation.title': 'Vollständige Automatisierung',
    'alphabot.features.automation.description': 'Vollautomatisiertes System zur Verwaltung von Verlosungen von Anfang bis Ende.',
    'alphabot.features.security.title': 'Garantierte Sicherheit',
    'alphabot.features.security.description': 'Erweiterte Datensicherheit und vollständige Transparenz bei Verlosungen.',
    'alphabot.features.reports.title': 'Detaillierte Berichte',
    'alphabot.features.reports.description': 'Umfassende Analysen und Echtzeitberichte für besseres Management.',

    // AlphaBot Informationssektionen
    'alphabot.sections.automation.title': 'Automatisierung der Verlosungsregistrierung mit Alphabot',
    'alphabot.sections.automation.description': 'Maximieren Sie Ihre Chancen mit Effizienz! Automatisieren Sie Registrierungen auf der Alphabot-Plattform, sparen Sie Zeit und erhöhen Sie Ihre Gewinnchancen für NFTs.',
    'alphabot.sections.automation.feature1': 'Automatische Registrierung: Meldet Ihre Konten an, sobald Verlosungen aktiv werden.',
    'alphabot.sections.automation.feature2': 'Multi-Account-Unterstützung: Verwalten Sie mehrere Konten gleichzeitig.',
    'alphabot.sections.automation.feature3': 'Intelligente Warteschlangenverwaltung: Optimierte Anmeldungen mit Limitkontrolle.',

    'alphabot.sections.notifications.title': 'Echtzeit-Benachrichtigungen über Discord und Telegram',
    'alphabot.sections.notifications.description': 'Erhalten Sie sofortige Benachrichtigungen über Anmeldungen, Gewinne und Mint-Gelegenheiten.',
    'alphabot.sections.notifications.feature1': 'Sofortige Benachrichtigungen: Informationen zum richtigen Zeitpunkt.',
    'alphabot.sections.notifications.feature2': 'Anpassbare Webhooks: Konfigurieren Sie nach Ihren Vorlieben.',
    'alphabot.sections.notifications.feature3': 'Benutzerfreundliche Updates: Klare Nachrichten mit nützlichen Links.',

    'alphabot.sections.management.title': 'Robuste Fehler- und Datenverwaltung',
    'alphabot.sections.management.description': 'Garantierte Zuverlässigkeit, um Ihre Strategie am Laufen zu halten.',
    'alphabot.sections.management.feature1': 'Intelligente Fehlerbehebung: Automatische Wiederholungsversuche.',
    'alphabot.sections.management.feature2': 'Sichere Speicherung: MongoDB mit regelmäßiger Bereinigung.',
    'alphabot.sections.management.feature3': 'Skalierbare Infrastruktur: Bewältigt hohe Volumina ohne Konflikte.',

    'alphabot.sections.learnMore': 'Mehr erfahren',
  },
};

export default de;
