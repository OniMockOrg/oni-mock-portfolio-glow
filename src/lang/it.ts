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
      'Credo che il codice debba essere non solo funzionale, ma anche elegante e manutenibile. Ogni progetto è un’opportunità per imparare qualcosa di nuovo e contribuire alla comunità degli sviluppatori.',
    'about.technologies': 'Tecnologie',
    'about.interests.cleancode.title': 'Codice pulito',
    'about.interests.cleancode.desc': 'Codice pulito e ben strutturato',
    'about.interests.innovation.title': 'Innovazione',
    'about.interests.innovation.desc': 'Sempre alla ricerca di nuove soluzioni',
    'about.interests.performance.title': 'Prestazioni',
    'about.interests.performance.desc': 'Ottimizzazione e alte prestazioni',
    'about.interests.opensource.title': 'Open Source',
    'about.interests.opensource.desc': 'Contribuire alla comunità',

    // Projects
    'projects.title': 'Progetti',
    'projects.subtitle':
      'Una selezione dei miei progetti più recenti e interessanti, disponibili su GitHub per l’esplorazione e il contributo.',
    'projects.viewAll': 'Vedi tutti i progetti',
    'projects.loading': 'Caricamento progetti...',
    'projects.defaultDesc':
      'Progetto interessante sviluppato con passione e dedizione.',
    'projects.error': 'Errore nel recupero dei repository:',

    // Contact
    'contact.country': 'Brasile',
    'contact.title': 'Parliamone',
    'contact.subtitle':
      'Interessato a collaborare o hai un’idea fantastica? Trasformiamo i concetti in realtà insieme.',
    'contact.ready': 'Pronto per il prossimo progetto?',
    'contact.description':
      'Che si tratti di un progetto freelance, un’opportunità di lavoro o semplicemente una chiacchierata sulla tecnologia, sono sempre aperto a nuove possibilità.',
    'contact.button': 'Contattami',

    // Footer
    'footer.text': '© {year} OniMock. Sviluppato con ❤️ e tanto caffè.',
  },
};

export default it;
