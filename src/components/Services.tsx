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
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 25s linear infinite reverse'
        }}></div>
      </div>

      {/* Rotating Gears */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-orange-400/10 rounded-full"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animation: `rotate-slow ${15 + i * 3}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
              transform: 'rotate(0deg)'
            }}
          >
            <div className="absolute inset-2 border border-orange-400/5 rounded-full"></div>
            {[...Array(8)].map((_, j) => (
              <div
                key={j}
                className="absolute w-1 h-3 bg-orange-400/10"
                style={{
                  left: '50%',
                  top: '-6px',
                  transform: `translateX(-50%) rotate(${j * 45}deg)`,
                  transformOrigin: '50% 50px'
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>

      {/* Innovation Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/25 to-red-500/25 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-3/4 w-72 h-72 bg-gradient-to-br from-amber-500/15 to-yellow-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-orange-400/20 to-blue-400/20 opacity-30"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: '2px',
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `pulse-glow ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          >
            <div className="absolute w-2 h-2 bg-orange-400/40 rounded-full -left-1 -top-0.5"></div>
            <div className="absolute w-2 h-2 bg-blue-400/40 rounded-full -right-1 -top-0.5"></div>
          </div>
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