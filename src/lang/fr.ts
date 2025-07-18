import { LanguageFile } from '../types/language';

const fr: LanguageFile = {
  config: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: 'fr',
  },
  translations: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',

    // Hero
    'hero.titles.0': 'Développeur Full Stack',
    'hero.titles.1': 'Designer',
    'hero.titles.2': 'Créateur de solutions',
    'hero.titles.3': 'Modérateur',
    'hero.titles.4': 'Passionné de programmation',
    'hero.titles.5': 'Enthousiaste de la technologie',
    'hero.description':
      'Transformer des idées en code, créer des expériences numériques incroyables et des solutions innovantes qui font la différence.',
    'hero.viewProjects': 'Voir les projets',
    'hero.aboutMe': 'À propos de moi',

    // About
    'about.title': 'À propos de moi',
    'about.subtitle':
      'Développeur passionné par la technologie, toujours à la recherche de solutions élégantes et efficaces qui ont un impact positif sur la vie des gens.',
    'about.journey': 'Mon parcours',
    'about.journey.p1':
      'En tant que développeur full stack, je suis passionné par la création d’expériences numériques exceptionnelles. Je me spécialise dans les technologies modernes et explore constamment de nouveaux outils et méthodologies.',
    'about.journey.p2':
      'Je crois que le code doit être non seulement fonctionnel, mais aussi élégant et maintenable. Chaque projet est une opportunité d’apprendre quelque chose de nouveau et de contribuer à la communauté des développeurs.',
    'about.technologies': 'Technologies',
    'about.interests.cleancode.title': 'Code propre',
    'about.interests.cleancode.desc': 'Code propre et bien structuré',
    'about.interests.innovation.title': 'Innovation',
    'about.interests.innovation.desc':
      'Toujours à la recherche de nouvelles solutions',
    'about.interests.performance.title': 'Performance',
    'about.interests.performance.desc': 'Optimisation et haute performance',
    'about.interests.opensource.title': 'Open Source',
    'about.interests.opensource.desc': 'Contribuer à la communauté',

    // Projects
    'projects.title': 'Projets',
    'projects.subtitle':
      'Une sélection de mes projets les plus récents et intéressants, disponibles sur GitHub pour exploration et contribution.',
    'projects.viewAll': 'Voir tous les projets',
    'projects.loading': 'Chargement des projets...',
    'projects.defaultDesc':
      'Projet intéressant développé avec passion et dévouement.',
    'projects.error': 'Erreur lors de la récupération des dépôts :',

    // Contact
    'contact.country': 'Brésil',
    'contact.title': 'Parlons-en',
    'contact.subtitle':
      'Intéressé par une collaboration ou une idée incroyable ? Transformons des concepts en réalité ensemble.',
    'contact.ready': 'Prêt pour le prochain projet ?',
    'contact.description':
      'Qu’il s’agisse d’un projet freelance, d’une opportunité de travail ou simplement d’une discussion sur la technologie, je suis toujours ouvert à de nouvelles possibilités.',
    'contact.button': 'Me contacter',

    // Footer
    'footer.text': '© {year} OniMock. Développé avec ❤️ et beaucoup de café.',
  },
};

export default fr;
