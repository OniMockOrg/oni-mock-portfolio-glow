import { useLanguage } from '../hooks/use-language';
import { useNavigate } from 'react-router-dom';
import { Code, Palette, Smartphone, Globe, Database, Zap, Rocket, Star } from 'lucide-react';
import { AnimatedButton } from './ui/animated-button';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const services = [
    {
      icon: Code,
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      features: [
        t('services.webDev.features.0'),
        t('services.webDev.features.1'),
        t('services.webDev.features.2'),
      ],
      gradient: 'from-blue-500 to-cyan-500',
      hoverGradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Smartphone,
      title: t('services.mobileDev.title'),
      description: t('services.mobileDev.description'),
      features: [
        t('services.mobileDev.features.0'),
        t('services.mobileDev.features.1'),
        t('services.mobileDev.features.2'),
      ],
      gradient: 'from-purple-500 to-pink-500',
      hoverGradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: Palette,
      title: t('services.uiux.title'),
      description: t('services.uiux.description'),
      features: [
        t('services.uiux.features.0'),
        t('services.uiux.features.1'),
        t('services.uiux.features.2'),
      ],
      gradient: 'from-green-500 to-emerald-500',
      hoverGradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Globe,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      features: [
        t('services.consulting.features.0'),
        t('services.consulting.features.1'),
        t('services.consulting.features.2'),
      ],
      gradient: 'from-orange-500 to-red-500',
      hoverGradient: 'from-orange-400 to-red-400'
    },
    {
      icon: Database,
      title: t('services.backend.title'),
      description: t('services.backend.description'),
      features: [
        t('services.backend.features.0'),
        t('services.backend.features.1'),
        t('services.backend.features.2'),
      ],
      gradient: 'from-indigo-500 to-purple-500',
      hoverGradient: 'from-indigo-400 to-purple-400'
    },
    {
      icon: Zap,
      title: t('services.optimization.title'),
      description: t('services.optimization.description'),
      features: [
        t('services.optimization.features.0'),
        t('services.optimization.features.1'),
        t('services.optimization.features.2'),
      ],
      gradient: 'from-yellow-500 to-orange-500',
      hoverGradient: 'from-yellow-400 to-orange-400'
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-900/50 via-indigo-900/30 to-slate-900/50">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'grid-move 30s linear infinite'
        }}></div>
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-3/4 w-80 h-80 bg-gradient-to-br from-violet-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                {t('services.title')}
              </span>
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl rounded-full opacity-50"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200`}></div>
                <div
                  className="relative glass-card p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                    <Icon className="w-10 h-10 text-white" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.hoverGradient} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`}></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-indigo-300 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-110 transition-transform duration-300`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <AnimatedButton
            variant="gradient"
            size="lg"
            leftIcon={Rocket}
            rightIcon={Star}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('services.cta')}
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Services;