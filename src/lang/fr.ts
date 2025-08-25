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
    'hero.titles.3': 'Résolveur de problèmes',
    'hero.titles.4': 'Passionné de code',
    'hero.titles.5': 'Enthousiaste de la technologie',
    'hero.description':
      'Transformer des idées en code, créer des expériences numériques incroyables et des solutions innovantes qui font la différence.',
    'hero.viewProjects': 'Voir les projets',
    'hero.aboutMe': 'À propos de moi',

    // About
    'about.title': 'À propos de moi',
    'about.subtitle':
      'Développeur passionné par la technologie, toujours en quête de créer des solutions élégantes et efficaces qui impactent positivement la vie des gens.',
    'about.journey': 'Mon parcours',
    'about.journey.p1':
      'En tant que développeur full stack, j’ai une passion pour créer des expériences numériques exceptionnelles. Je me spécialise dans les technologies modernes et explore toujours de nouveaux outils et méthodologies.',
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
    'about.stats.location': 'Localisation',
    'about.stats.country': 'Brésil',
    'about.stats.experience': 'Expérience',
    'about.stats.years': '{years} Ans',
    'about.stats.focus': 'Focus',
    'about.stats.fullstack': 'Full Stack',
    'about.cta': 'Contactez-moi',

    // Services
    'services.title': 'Services',
    'services.subtitle':
      'Solutions spécialisées pour l’automatisation des tirages au sort et la gestion numérique',
    'services.automation.title': 'Automatisation des tirages',
    'services.automation.description':
      'Système d’automatisation complet pour les tirages via la plateforme AlphaBot. Nous offrons des solutions efficaces et fiables pour gérer les tirages, de l’inscription des participants à la sélection des gagnants.',
    'services.automation.feature1':
      'Gestion et inscription automatisées des participants',
    'services.automation.feature2':
      'Système de sélection des gagnants transparent et sécurisé',
    'services.automation.feature3':
      'Rapports en temps réel et analyses détaillées',
    'services.learnMore': 'En savoir plus',

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
    'contact.title': 'Parlons',
    'contact.subtitle':
      'Intéressé par une collaboration ou avez une idée incroyable ? Transformons ensemble les concepts en réalité.',
    'contact.ready': 'Prêt pour le prochain projet ?',
    'contact.button': 'Prendre contact',
    'contact.email': 'Email',
    'contact.location': 'Localisation',
    'contact.social': 'Liens sociaux',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.subject': 'Sujet',
    'contact.form.subject.placeholder': 'De quoi s’agit-il ?',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Parlez-moi de votre projet',
    'contact.form.submit': 'Envoyer le message',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success':
      '✅ Votre message a été envoyé avec succès ! Je vous contacterai bientôt.',
    'contact.form.error':
      "❌ Une erreur s'est produite lors de l'envoi de votre message. Veuillez vérifier si vous avez correctement configuré EmailJS ou réessayer plus tard.",
    'contact.form.error.button': "Erreur d'envoi. Réessayez.",
    'contact.form.success.button': 'Message envoyé !',
    'contact.form.name.placeholder': 'Votre nom complet',
    'contact.form.validation.name': 'Le nom doit contenir au moins 2 caractères',
    'contact.form.validation.email': 'Veuillez saisir une adresse email valide',
    'contact.form.validation.subject': 'Le sujet doit contenir au moins 3 caractères',
    'contact.form.validation.message': 'Le message doit contenir au moins 10 caractères',

    // Footer
    'footer.text': '© {year} OniMock. Construit avec ❤️ et beaucoup de café.',

    // AlphaBot Page
    'alphabot.hero.title': 'Automatisation des tirages AlphaBot',
    'alphabot.hero.subtitle':
      'Plateforme complète d’automatisation pour les tirages et la gestion numérique',
    'alphabot.hero.description':
      'Transformez la gestion de vos tirages avec notre système d’automatisation avancé. De l’inscription des participants à la sélection des gagnants, AlphaBot offre une solution complète et fiable.',
    'alphabot.hero.cta': 'Commencer',
    'alphabot.hero.demo': 'Voir la démo',

    // AlphaBot Features
    'alphabot.features.title': 'Fonctionnalités révolutionnaires',
    'alphabot.features.subtitle':
      'Technologie de pointe qui transforme la gestion de vos projets',
    'alphabot.features.automation.title': 'Automatisation complète',
    'alphabot.features.automation.description':
      'Système entièrement automatisé pour gérer les tirages du début à la fin.',
    'alphabot.features.security.title': 'Sécurité garantie',
    'alphabot.features.security.description':
      'Protection avancée des données et transparence totale dans les tirages.',
    'alphabot.features.reports.title': 'Rapports détaillés',
    'alphabot.features.reports.description':
      'Analyse complète et rapports en temps réel pour une meilleure gestion.',

    // AlphaBot informative sections
    'alphabot.sections.automation.title':
      'Automatisation de l’inscription aux tirages avec Alphabot',
    'alphabot.sections.automation.description':
      'Maximisez vos chances avec efficacité ! Automatisez les inscriptions sur la plateforme Alphabot, économisant du temps et augmentant vos chances de gagner des NFT.',
    'alphabot.sections.automation.feature1':
      'Inscription automatique : Inscrit vos comptes dès que les tirages sont actifs.',
    'alphabot.sections.automation.feature2':
      'Support multi-comptes : Gère plusieurs comptes simultanément.',
    'alphabot.sections.automation.feature3':
      'Gestion intelligente des files d’attente : Inscriptions optimisées avec contrôle des limites.',

    'alphabot.sections.notifications.title':
      'Notifications en temps réel via Discord et Telegram',
    'alphabot.sections.notifications.description':
      'Recevez des alertes instantanées sur les inscriptions, les gains et les opportunités de mint.',
    'alphabot.sections.notifications.feature1':
      'Alertes instantanées : Informations au bon moment.',
    'alphabot.sections.notifications.feature2':
      'Webhooks personnalisables : Configurez selon vos préférences.',
    'alphabot.sections.notifications.feature3':
      'Mises à jour conviviales : Messages clairs avec des liens utiles.',

    'alphabot.sections.management.title':
      'Gestion robuste des erreurs et des données',
    'alphabot.sections.management.description':
      'Fiabilité garantie pour maintenir votre stratégie en cours.',
    'alphabot.sections.management.feature1':
      'Récupération intelligente des erreurs : Réessais automatiques.',
    'alphabot.sections.management.feature2':
      'Stockage sécurisé : MongoDB avec nettoyage périodique.',
    'alphabot.sections.management.feature3':
      'Infrastructure évolutive : Gère de grands volumes sans conflits.',

    'alphabot.sections.learnMore': 'En savoir plus',
  },
};

export default fr;
