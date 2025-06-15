
import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const skills = [
    'JavaScript/TypeScript',
    'React/Next.js',
    'Node.js',
    'Python',
    'Git/GitHub',
    'AWS/Cloud',
    'Docker',
    'MongoDB/SQL'
  ];

  const interests = [
    { 
      icon: Code, 
      title: t('about.interests.cleancode.title'), 
      desc: t('about.interests.cleancode.desc') 
    },
    { 
      icon: Lightbulb, 
      title: t('about.interests.innovation.title'), 
      desc: t('about.interests.innovation.desc') 
    },
    { 
      icon: Rocket, 
      title: t('about.interests.performance.title'), 
      desc: t('about.interests.performance.desc') 
    },
    { 
      icon: Coffee, 
      title: t('about.interests.opensource.title'), 
      desc: t('about.interests.opensource.desc') 
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('about.title')}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-white mb-4">{t('about.journey')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('about.journey.p1')}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {t('about.journey.p2')}
            </p>
          </div>
          
          <div className="glass-card p-8 animate-slide-in-right">
            <h3 className="text-xl font-semibold text-white mb-6">{t('about.technologies')}</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.title}
                className="glass-card p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-gray-400 text-sm">{interest.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
