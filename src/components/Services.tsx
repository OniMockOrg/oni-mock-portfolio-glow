import { useLanguage } from '../hooks/use-language';
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  BarChart3,
  Shield,
  Rocket,
  Star,
  Bot,
} from 'lucide-react';
import { AnimatedButton } from './ui/animated-button';

const Services = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section
      id="services"
      className="py-20 px-6 relative overflow-hidden border-b border-purple-800/30"
    >
      {/* Subtle gradient overlay for section distinction */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-transparent to-purple-900/20 pointer-events-none" />
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-8">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 2px, transparent 2px)
          `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 25s linear infinite reverse',
          }}
        ></div>
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
              animation: `rotate-slow ${15 + i * 3}s linear infinite ${
                i % 2 === 0 ? '' : 'reverse'
              }`,
              transform: 'rotate(0deg)',
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
                  transformOrigin: '50% 50px',
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>

      {/* Innovation Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/25 to-red-500/25 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse"
          style={{ animationDelay: '3s' }}
        ></div>
        <div
          className="absolute top-3/4 right-3/4 w-72 h-72 bg-gradient-to-br from-amber-500/15 to-yellow-500/15 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '1.5s' }}
        ></div>
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
              animation: `pulse-glow ${
                4 + Math.random() * 3
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed backdrop-blur-none bg-white/5 p-6 rounded-2xl border border-white/10">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Imagem à esquerda */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative glass-card p-8 group-hover:scale-[1.02] transition-all duration-500 h-full flex items-center">
              <div className="w-full h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 animate-pulse"></div>
                <img 
                  src="/alphabot_example.png" 
                  alt="AlphaBot Example" 
                  className="w-[325px] h-[325px] max-w-full max-h-full object-contain rounded-xl border-2 border-purple-400/30 shadow-lg"
                />
                <div className="absolute top-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-blue-400/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-4 w-3 h-3 bg-yellow-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>

          {/* Card do AlphaBot à direita */}
          <div className="group relative h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glass-card p-8 group-hover:scale-[1.01] transition-all duration-500 hover:shadow-xl backdrop-blur-none h-full flex flex-col">
              <div className="w-[80px] h-[80px] mx-auto mb-6">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:rotate-3 transition-transform duration-500">
                    <Bot className="w-16 h-16 relative z-10 text-white/80" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-indigo-200 transition-colors duration-300 backdrop-blur-none">
                {t('services.automation.title')}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors duration-300 backdrop-blur-none">
                {t('services.automation.description')}
              </p>
              <ul className="space-y-3 backdrop-blur-none mb-8 flex-grow">
                <li className="flex items-center text-gray-300 group-hover:text-gray-300 transition-colors duration-300 backdrop-blur-none">
                  <div className="min-w-[12px] min-h-[12px] w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-105 transition-transform duration-300"></div>
                  {t('services.automation.feature1')}
                </li>
                <li className="flex items-center text-gray-300 group-hover:text-gray-300 transition-colors duration-300 backdrop-blur-none">
                  <div className="min-w-[12px] min-h-[12px] w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-105 transition-transform duration-300"></div>
                  {t('services.automation.feature2')}
                </li>
                <li className="flex items-center text-gray-300 group-hover:text-gray-300 transition-colors duration-300 backdrop-blur-none">
                  <div className="min-w-[12px] min-h-[12px] w-3 h-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-105 transition-transform duration-300"></div>
                  {t('services.automation.feature3')}
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="text-center">
          <AnimatedButton
            variant="gradient"
            size="lg"
            leftIcon={Rocket}
            rightIcon={Star}
            onClick={() => navigate('/alphabot')}
          >
            {t('services.learnMore')}
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Services;
