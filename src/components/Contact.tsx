
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/OniMock',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:contato@onimock.dev',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('contact.title')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 text-center">
          <div className="mb-8">
            <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <p className="text-gray-300">Brasil</p>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110 ${link.color}`}
                  aria-label={link.label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white mb-6">
              {t('contact.ready')}
            </h3>
            <p className="text-gray-400 mb-8">
              {t('contact.description')}
            </p>
            <a
              href="mailto:contato@onimock.dev"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <Mail className="w-5 h-5" />
              {t('contact.button')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
