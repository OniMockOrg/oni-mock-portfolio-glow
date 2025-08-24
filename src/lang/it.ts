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
    'hero.titles.2': 'Creatore di Soluzioni',
    'hero.titles.3': 'Risolutore di Problemi',
    'hero.titles.4': 'Appassionato di Codice',
    'hero.titles.5': 'Appassionato di Tecnologia',
    'hero.description':
      'Trasformare idee in codice, creando esperienze digitali straordinarie e soluzioni innovative che fanno la differenza.',
    'hero.viewProjects': 'Visualizza Progetti',
    'hero.aboutMe': 'Chi sono',

    // About
    'about.title': 'Chi sono',
    'about.subtitle':
      'Sviluppatore appassionato di tecnologia, sempre alla ricerca di creare soluzioni eleganti ed efficienti che abbiano un impatto positivo sulla vita delle persone.',
    'about.journey': 'Il mio percorso',
    'about.journey.p1':
      'Come sviluppatore full stack, ho una passione per creare esperienze digitali eccezionali. Mi specializzo in tecnologie moderne e sono sempre alla ricerca di nuovi strumenti e metodologie.',
    'about.journey.p2':
      'Credo che il codice debba essere non solo funzionale, ma anche elegante e manutenibile. Ogni progetto è un’opportunità per imparare qualcosa di nuovo e contribuire alla comunità degli sviluppatori.',
    'about.technologies': 'Tecnologie',
    'about.interests.cleancode.title': 'Codice Pulito',
    'about.interests.cleancode.desc': 'Codice pulito e ben strutturato',
    'about.interests.innovation.title': 'Innovazione',
    'about.interests.innovation.desc': 'Sempre alla ricerca di nuove soluzioni',
    'about.interests.performance.title': 'Prestazioni',
    'about.interests.performance.desc': 'Ottimizzazione e alte prestazioni',
    'about.interests.opensource.title': 'Open Source',
    'about.interests.opensource.desc': 'Contribuire alla comunità',
    'about.stats.location': 'Posizione',
    'about.stats.country': 'Brasile',
    'about.stats.experience': 'Esperienza',
    'about.stats.years': '{years} Anni',
    'about.stats.focus': 'Focus',
    'about.stats.fullstack': 'Full Stack',
    'about.cta': 'Contattami',

    // Services
    'services.title': 'Servizi',
    'services.subtitle':
      'Soluzioni specializzate per l’automazione delle lotterie e la gestione digitale',
    'services.automation.title': 'Automazione delle Lotterie',
    'services.automation.description':
      'Sistema di automazione completo per le lotterie tramite la piattaforma AlphaBot. Offriamo soluzioni efficienti e affidabili per la gestione delle lotterie, dalla registrazione dei partecipanti alla selezione dei vincitori.',
    'services.automation.feature1':
      'Gestione e registrazione automatica dei partecipanti',
    'services.automation.feature2':
      'Sistema di selezione dei vincitori trasparente e sicuro',
    'services.automation.feature3':
      'Report in tempo reale e analisi dettagliate',
    'services.learnMore': 'Scopri di più',

    // Projects
    'projects.title': 'Progetti',
    'projects.subtitle':
      'Una selezione dei miei progetti più recenti e interessanti, disponibili su GitHub per esplorazione e contributo.',
    'projects.viewAll': 'Visualizza tutti i progetti',
    'projects.loading': 'Caricamento dei progetti...',
    'projects.defaultDesc':
      'Progetto interessante sviluppato con passione e dedizione.',
    'projects.error': 'Errore nel recupero dei repository:',

    // Contact
    'contact.country': 'Brasile',
    'contact.title': 'Parliamo',
    'contact.subtitle':
      'Interessato a collaborare o hai un’idea straordinaria? Trasformiamo insieme i concetti in realtà.',
    'contact.ready': 'Pronto per il prossimo progetto?',
    'contact.button': 'Contattami',
    'contact.email': 'Email',
    'contact.location': 'Posizione',
    'contact.social': 'Link Sociali',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tuo@email.com',
    'contact.form.subject': 'Oggetto',
    'contact.form.subject.placeholder': 'Di cosa si tratta?',
    'contact.form.message': 'Messaggio',
    'contact.form.message.placeholder': 'Parlami del tuo progetto',
    'contact.form.submit': 'Invia messaggio',
    'contact.form.sending': 'Invio in corso...',
    'contact.form.success':
      '✅ Il tuo messaggio è stato inviato con successo! Ti contatterò presto.',
    'contact.form.error':
      '❌ Si è verificato un errore nell’invio del messaggio. Verifica se hai configurato correttamente EmailJS o riprova più tardi.',

    // Footer
    'footer.text': '© {year} OniMock. Realizzato con ❤️ e tanto caffè.',

    // AlphaBot Page
    'alphabot.hero.title': 'Automazione Lotterie AlphaBot',
    'alphabot.hero.subtitle':
      'Piattaforma completa per l’automazione delle lotterie e la gestione digitale',
    'alphabot.hero.description':
      'Trasforma la gestione delle tue lotterie con il nostro sistema di automazione avanzato. Dalla registrazione dei partecipanti alla selezione dei vincitori, AlphaBot offre una soluzione completa e affidabile.',
    'alphabot.hero.cta': 'Inizia ora',
    'alphabot.hero.demo': 'Visualizza Demo',

    // AlphaBot Features
    'alphabot.features.title': 'Funzionalità Rivoluzionarie',
    'alphabot.features.subtitle':
      'Tecnologia all’avanguardia che trasforma il modo in cui gestisci i tuoi progetti',
    'alphabot.features.automation.title': 'Automazione Completa',
    'alphabot.features.automation.description':
      'Sistema completamente automatizzato per gestire le lotterie dall’inizio alla fine.',
    'alphabot.features.security.title': 'Sicurezza Garantita',
    'alphabot.features.security.description':
      'Protezione avanzata dei dati e totale trasparenza nei sorteggi.',
    'alphabot.features.reports.title': 'Report Dettagliati',
    'alphabot.features.reports.description':
      'Analisi completa e report in tempo reale per una gestione migliore.',

    // AlphaBot informative sections
    'alphabot.sections.automation.title':
      'Automazione della Registrazione alle Lotterie con Alphabot',
    'alphabot.sections.automation.description':
      'Massimizza le tue possibilità con efficienza! Automatizza le registrazioni sulla piattaforma Alphabot, risparmiando tempo e aumentando le tue possibilità di vincere NFT.',
    'alphabot.sections.automation.feature1':
      'Registrazione Automatica: Iscrive i tuoi account non appena le lotterie diventano attive.',
    'alphabot.sections.automation.feature2':
      'Supporto Multi-Account: Gestisci più account contemporaneamente.',
    'alphabot.sections.automation.feature3':
      'Gestione Intelligente della Coda: Registrazioni ottimizzate con controllo dei limiti.',

    'alphabot.sections.notifications.title':
      'Notifiche in Tempo Reale tramite Discord e Telegram',
    'alphabot.sections.notifications.description':
      'Ricevi avvisi istantanei su registrazioni, vincite e opportunità di mint.',
    'alphabot.sections.notifications.feature1':
      'Avvisi Istantanei: Informazioni al momento giusto.',
    'alphabot.sections.notifications.feature2':
      'Webhook Personalizzabili: Configura secondo le tue preferenze.',
    'alphabot.sections.notifications.feature3':
      'Aggiornamenti User-Friendly: Messaggi chiari con link utili.',

    'alphabot.sections.management.title': 'Gestione Robusta di Errori e Dati',
    'alphabot.sections.management.description':
      'Affidabilità garantita per mantenere la tua strategia operativa.',
    'alphabot.sections.management.feature1':
      'Recupero Intelligente degli Errori: Riprove automatiche.',
    'alphabot.sections.management.feature2':
      'Archiviazione Sicura: MongoDB con pulizia periodica.',
    'alphabot.sections.management.feature3':
      'Infrastruttura Scalabile: Gestisce alti volumi senza conflitti.',

    'alphabot.sections.learnMore': 'Scopri di più',
  },
};

export default it;
