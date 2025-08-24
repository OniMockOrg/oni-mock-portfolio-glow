import { LanguageFile } from '../types/language';

const it: LanguageFile = {
  config: {
    code: 'it',
    name: 'Italian',
    nativeName: 'Italiano',
    flag: 'it',
  },
  translations: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'Chi sono',
    'nav.services': 'Servizi',
    'nav.projects': 'Progetti',
    'nav.contact': 'Contatti',

    // Hero
    'hero.titles.0': 'Sviluppatore Full Stack',
    'hero.titles.1': 'Designer',
    'hero.titles.2': 'Creatore di soluzioni',
    'hero.titles.3': 'Moderatore',
    'hero.titles.4': 'Appassionato di programmazione',
    'hero.titles.5': 'Appassionato di tecnologia',
    'hero.description':
      'Trasformare idee in codice, creare esperienze digitali straordinarie e soluzioni innovative che fanno la differenza.',
    'hero.viewProjects': 'Vedi i progetti',
    'hero.aboutMe': 'Chi sono',

    // About
    'about.title': 'Chi sono',
    'about.subtitle':
      'Sviluppatore appassionato di tecnologia, sempre alla ricerca di creare soluzioni eleganti ed efficienti che abbiano un impatto positivo sulla vita delle persone.',
    'about.journey': 'Il mio percorso',
    'about.journey.p1':
      'Come sviluppatore full stack, sono appassionato di creare esperienze digitali eccezionali. Mi specializzo in tecnologie moderne e sono sempre alla scoperta di nuovi strumenti e metodologie.',
    'about.journey.p2':
      "Credo che il codice debba essere non solo funzionale, ma anche elegante e manutenibile. Ogni progetto è un'opportunità per imparare qualcosa di nuovo e contribuire alla comunità degli sviluppatori.",
    'about.technologies': 'Tecnologie',
    'about.interests.cleancode.title': 'Codice pulito',
    'about.interests.cleancode.desc': 'Codice pulito e ben strutturato',
    'about.interests.innovation.title': 'Innovazione',
    'about.interests.innovation.desc': 'Sempre alla ricerca di nuove soluzioni',
    'about.interests.performance.title': 'Prestazioni',
    'about.interests.performance.desc': 'Ottimizzazione e alte prestazioni',
    'about.interests.opensource.title': 'Open Source',
    'about.interests.opensource.desc': 'Contribuire alla comunità',

    // Services
    'services.title': 'Servizi',
    'services.subtitle':
      'Soluzioni specializzate in automazione di sorteggi e gestione digitale',
    'services.automation.title': 'Automazione di Sorteggi',
    'services.automation.description':
      "Sistema completo di automazione per sorteggi tramite la piattaforma AlphaBot. Offriamo soluzioni efficienti e affidabili per la gestione dei sorteggi, dall'iscrizione dei partecipanti alla selezione dei vincitori.",
    'services.automation.feature1':
      'Gestione automatizzata di partecipanti e iscrizioni',
    'services.automation.feature2':
      'Sistema trasparente e sicuro di selezione dei vincitori',
    'services.automation.feature3':
      'Report in tempo reale e analisi dettagliate',
    'services.automation.cta': 'Scopri di più',

    // Projects
    'projects.title': 'Progetti',
    'projects.subtitle':
      "Una selezione dei miei progetti più recenti e interessanti, disponibili su GitHub per l'esplorazione e il contributo.",
    'projects.viewAll': 'Vedi tutti i progetti',
    'projects.loading': 'Caricamento progetti...',
    'projects.defaultDesc':
      'Progetto interessante sviluppato con passione e dedizione.',
    'projects.error': 'Errore nel recupero dei repository:',

    // Contact
    'contact.country': 'Brasile',
    'contact.title': 'Parliamone',
    'contact.subtitle':
      "Interessato a collaborare o hai un'idea fantastica? Trasformiamo i concetti in realtà insieme.",
    'contact.ready': 'Pronto per il prossimo progetto?',
    'contact.description':
      "Che si tratti di un progetto freelance, un'opportunità di lavoro o semplicemente una chiacchierata sulla tecnologia, sono sempre aperto a nuove possibilità.",
    'contact.button': 'Contattami',
    'contact.email': 'Email',
    'contact.location': 'Posizione',
    'contact.social': 'Social Media',
    'contact.name': 'Nome',
    'contact.subject': 'Oggetto',
    'contact.message': 'Messaggio',
    'contact.name.placeholder': 'Il tuo nome',
    'contact.email.placeholder': 'La tua email',
    'contact.subject.placeholder': "L'oggetto del tuo messaggio",
    'contact.message.placeholder': 'Il tuo messaggio',
    'contact.submit': 'Invia messaggio',

    // Footer
    'footer.text': '© {year} OniMock. Sviluppato con ❤️ e tanto caffè.',

    // AlphaBot Page
    'alphabot.hero.title': 'Automazione Lotterie AlphaBot',
    'alphabot.hero.subtitle':
      'Piattaforma completa di automazione per lotterie e gestione digitale',
    'alphabot.hero.description':
      'Trasforma la tua gestione delle lotterie con il nostro sistema di automazione avanzato. Dalla registrazione dei partecipanti alla selezione dei vincitori, AlphaBot offre una soluzione completa e affidabile.',
    'alphabot.hero.cta': 'Inizia Ora',
    'alphabot.hero.demo': 'Vedi Demo',

    // AlphaBot Features
    'alphabot.features.automation.title': 'Automazione Completa',
    'alphabot.features.automation.description':
      "Sistema completamente automatizzato per gestire le lotterie dall'inizio alla fine.",
    'alphabot.features.security.title': 'Sicurezza Garantita',
    'alphabot.features.security.description':
      'Protezione avanzata dei dati e trasparenza totale nei sorteggi.',
    'alphabot.features.reports.title': 'Report Dettagliati',
    'alphabot.features.reports.description':
      'Analisi complete e report in tempo reale per una migliore gestione.',

    // Sezioni informative di AlphaBot
    'alphabot.sections.automation.title':
      'Automazione di Registrazione Lotterie con Alphabot',
    'alphabot.sections.automation.description':
      'Massimizza le tue opportunità con efficienza! Automatizza le registrazioni sulla piattaforma Alphabot, risparmiando tempo e aumentando le tue possibilità di vincere NFT.',
    'alphabot.sections.automation.feature1':
      'Registrazione Automatica: Iscrive i tuoi account non appena le lotterie diventano attive.',
    'alphabot.sections.automation.feature2':
      'Supporto Multi-Account: Gestisci più account contemporaneamente.',
    'alphabot.sections.automation.feature3':
      'Gestione Intelligente della Coda: Iscrizioni ottimizzate con controllo dei limiti.',

    'alphabot.sections.notifications.title':
      'Notifiche in Tempo Reale via Discord e Telegram',
    'alphabot.sections.notifications.description':
      'Ricevi avvisi istantanei su iscrizioni, vittorie e opportunità di mint.',
    'alphabot.sections.notifications.feature1':
      'Avvisi Istantanei: Informazioni al momento giusto.',
    'alphabot.sections.notifications.feature2':
      'Webhook Personalizzabili: Configura secondo le tue preferenze.',
    'alphabot.sections.notifications.feature3':
      'Aggiornamenti User-Friendly: Messaggi chiari con link utili.',

    'alphabot.sections.management.title': 'Gestione Robusta di Errori e Dati',
    'alphabot.sections.management.description':
      'Affidabilità garantita per mantenere la tua strategia in funzione.',
    'alphabot.sections.management.feature1':
      'Recupero Intelligente degli Errori: Tentativi automatici.',
    'alphabot.sections.management.feature2':
      'Archiviazione Sicura: MongoDB con pulizia periodica.',
    'alphabot.sections.management.feature3':
      'Infrastruttura Scalabile: Gestisce alti volumi senza conflitti.',

    'alphabot.sections.learnMore': 'Scopri di più',
  },
};

export default it;
