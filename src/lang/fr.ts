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
    'nav.services': 'Services',
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
      'En tant que développeur full stack, je suis passionné par la création d\'expériences numériques exceptionnelles. Je me spécialise dans les technologies modernes et explore constamment de nouveaux outils et méthodologies.',
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

    // Services
    'services.title': 'Services',
    'services.subtitle':
      'Solutions spécialisées en automatisation de tirages au sort et gestion numérique',
    'services.automation.title': 'Automatisation de Tirages au Sort',
    'services.automation.description':
      "Système complet d'automatisation pour les tirages au sort via la plateforme AlphaBot. Nous offrons des solutions efficaces et fiables pour la gestion des tirages au sort, de l'inscription des participants à la sélection des gagnants.",
    'services.automation.feature1':
      'Gestion automatisée des participants et des inscriptions',
    'services.automation.feature2':
      'Système transparent et sécurisé de sélection des gagnants',
    'services.automation.feature3':
      'Rapports en temps réel et analyses détaillées',
    'services.automation.cta': 'En savoir plus',
    'services.learnMore': 'En Savoir Plus',

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
      'Qu\'il s\'agisse d\'un projet freelance, d\'une opportunité de travail ou simplement d\'une discussion sur la technologie, je suis toujours ouvert à de nouvelles possibilités.',
    'contact.button': 'Me contacter',
    'contact.email': 'E-mail',
    'contact.location': 'Localisation',
    'contact.social': 'Réseaux Sociaux',
    'contact.form.name': 'Nom',
    'contact.form.email': 'E-mail',
    'contact.form.email.placeholder': 'Votre e-mail',
    'contact.form.subject': 'Sujet',
    'contact.form.subject.placeholder': 'Le sujet de votre message',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Votre message',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',

    // Footer
    'footer.text': '© {year} OniMock. Développé avec ❤️ et beaucoup de café.',

    // AlphaBot Page
    'alphabot.hero.title': 'Automatisation de Tirages AlphaBot',
    'alphabot.hero.subtitle':
      "Plateforme complète d'automatisation pour tirages et gestion numérique",
    'alphabot.hero.description':
      "Transformez votre gestion de tirages avec notre système d'automatisation avancé. De l'inscription des participants à la sélection des gagnants, AlphaBot offre une solution complète et fiable.",
    'alphabot.hero.cta': 'Commencer Maintenant',
    'alphabot.hero.demo': 'Voir la Démo',

    // AlphaBot Features
    'alphabot.features.automation.title': 'Automatisation Complète',
    'alphabot.features.automation.description':
      'Système entièrement automatisé pour gérer les tirages du début à la fin.',
    'alphabot.features.security.title': 'Sécurité Garantie',
    'alphabot.features.security.description':
      'Protection avancée des données et transparence totale dans les tirages.',
    'alphabot.features.reports.title': 'Rapports Détaillés',
    'alphabot.features.reports.description':
      'Analyses complètes et rapports en temps réel pour une meilleure gestion.',

    // Sections informatives d'AlphaBot
    'alphabot.sections.automation.title':
      "Automatisation d'Inscription aux Tirages avec Alphabot",
    'alphabot.sections.automation.description':
      'Maximisez vos chances avec efficacité ! Automatisez les inscriptions sur la plateforme Alphabot, économisant du temps et augmentant vos chances de gagner des NFTs.',
    'alphabot.sections.automation.feature1':
      'Inscription Automatique : Inscrit vos comptes dès que les tirages deviennent actifs.',
    'alphabot.sections.automation.feature2':
      'Support Multi-Comptes : Gérez plusieurs comptes simultanément.',
    'alphabot.sections.automation.feature3':
      'Gestion Intelligente de File : Inscriptions optimisées avec contrôle des limites.',

    'alphabot.sections.notifications.title':
      'Notifications en Temps Réel via Discord et Telegram',
    'alphabot.sections.notifications.description':
      'Recevez des alertes instantanées sur les inscriptions, victoires et opportunités de mint.',
    'alphabot.sections.notifications.feature1':
      'Alertes Instantanées : Informations au bon moment.',
    'alphabot.sections.notifications.feature2':
      'Webhooks Personnalisables : Configurez selon vos préférences.',
    'alphabot.sections.notifications.feature3':
      'Mises à jour Conviviales : Messages clairs avec liens utiles.',

    'alphabot.sections.management.title':
      'Gestion Robuste des Erreurs et Données',
    'alphabot.sections.management.description':
      'Fiabilité garantie pour maintenir votre stratégie en fonctionnement.',
    'alphabot.sections.management.feature1':
      "Récupération Intelligente d'Erreurs : Tentatives automatiques.",
    'alphabot.sections.management.feature2':
      'Stockage Sécurisé : MongoDB avec nettoyage périodique.',
    'alphabot.sections.management.feature3':
      'Infrastructure Évolutive : Gère de gros volumes sans conflits.',

    'alphabot.sections.learnMore': 'En savoir plus',
  },
};

export default fr;
