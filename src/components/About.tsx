import { Code, Coffee, Lightbulb, Rocket, Brain, Star } from 'lucide-react';
import { useLanguage } from '../hooks/use-language';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { AnimatedButton } from './ui/animated-button';

const About = () => {
  const { t } = useLanguage();

  const skills = [
    'JavaScript/TypeScript',
    'Java/Kotlin',
    'Android Studio',
    'React/Next.js',
    'Node.js',
    'Python',
    'Git/GitHub',
    'AWS/Cloud',
    'Docker',
    'MongoDB/SQL',
  ];

  const interests = [
    {
      icon: Code,
      title: t('about.interests.cleancode.title'),
      desc: t('about.interests.cleancode.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.interests.innovation.title'),
      desc: t('about.interests.innovation.desc'),
    },
    {
      icon: Rocket,
      title: t('about.interests.performance.title'),
      desc: t('about.interests.performance.desc'),
    },
    {
      icon: Coffee,
      title: t('about.interests.opensource.title'),
      desc: t('about.interests.opensource.desc'),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 relative overflow-hidden border-b border-purple-800/30"
    >
      {/* Subtle gradient overlay for section distinction */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      {/* Code Matrix Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: '30px 30px',
            animation: 'grid-move 20s linear infinite',
          }}
        ></div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['<', '>', '{', '}', '(', ')', '[', ']', ';', '='].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-emerald-400/20 text-2xl font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Gradient Orbs - Developer Theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-gradient-to-br from-cyan-500/25 to-blue-500/25 rounded-full mix-blend-multiply filter blur-3xl opacity-35 animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className="absolute top-2/3 left-2/3 w-64 h-64 bg-gradient-to-br from-teal-500/20 to-green-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-emerald-400/10 text-xs font-mono leading-tight"
            style={{
              left: `${10 + i * 12}%`,
              top: '-10%',
              animation: `fall ${8 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Array.from({ length: 20 }, () =>
              Math.random() > 0.5 ? '1' : '0'
            ).join('\n')}
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                {t('about.title')}
              </span>
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl rounded-full opacity-50"></div>
          </div>
        </div>
        <div className="flex justify-center mb-16">
          <div className="glass-card flex flex-col md:flex-row items-center md:items-center gap-8 p-8 w-full max-w-3xl shadow-2xl bg-white/10 border border-white/10 rounded-3xl">
            <div className="flex-shrink-0 flex justify-center items-center">
              <div className="relative group">
                <span className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-tr from-blue-400 via-pink-400 to-yellow-400 blur-sm opacity-80 group-hover:opacity-100 transition-all duration-300"></span>
                <Avatar className="h-44 w-44 rounded-2xl border-4 border-transparent group-hover:scale-105 group-hover:shadow-xl transition-transform duration-300 bg-white/10 relative z-10">
                  <AvatarImage
                    src="https://github.com/OniMock.png"
                    alt="OniMock GitHub Avatar"
                    className="object-cover h-full w-full rounded-2xl"
                  />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <p className="text-lg font text-white mb-6">
                {t('about.subtitle')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {t('about.journey')}
            </h3>
            <p className="text-gray-300 leading-relaxed backdrop-blur-none">
              {t('about.journey.p1')}
            </p>
            <p className="text-gray-300 leading-relaxed backdrop-blur-none">
              {t('about.journey.p2')}
            </p>
          </div>

          <div className="glass-card p-8 animate-slide-in-right backdrop-blur-none group-hover:scale-[1.02] transition-all duration-500">
            <h3 className="text-xl font-semibold text-white mb-6 backdrop-blur-none">
              {t('about.technologies')}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="bg-blue-500/10 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-colors duration-300 backdrop-blur-none"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 auto-rows-fr">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            const gradients = [
              {
                gradient: 'from-blue-500 to-cyan-500',
                hoverGradient: 'from-blue-400 to-cyan-400',
              },
              {
                gradient: 'from-purple-500 to-pink-500',
                hoverGradient: 'from-purple-400 to-pink-400',
              },
              {
                gradient: 'from-green-500 to-emerald-500',
                hoverGradient: 'from-green-400 to-emerald-400',
              },
              {
                gradient: 'from-orange-500 to-red-500',
                hoverGradient: 'from-orange-400 to-red-400',
              },
            ];
            return (
              <div key={interest.title} className="group relative">
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${gradients[index].gradient} rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200`}
                ></div>
                <div
                  className="relative glass-card p-8 group-hover:scale-[1.01] transition-all duration-500 hover:shadow-xl backdrop-blur-none h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`relative w-20 h-20 bg-gradient-to-r ${gradients[index].gradient} rounded-full flex items-center justify-center mb-6 group-hover:rotate-3 transition-transform duration-500`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${gradients[index].hoverGradient} rounded-full blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-indigo-200 transition-colors duration-300 backdrop-blur-none">
                    {interest.title}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors duration-300 backdrop-blur-none">
                    {interest.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <AnimatedButton
            variant="gradient"
            size="lg"
            leftIcon={Brain}
            rightIcon={Star}
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('about.cta')}
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default About;
